// magenta.link の前段で来訪エージェントを分類・集計する Worker。
// プライバシー設計: IP・ホスト名・個別 UA 文字列は記録しない。
// ボットは種別ごと、人間などその他は総数のみを日別にカウントする。

const AGENTS = [
  [/archive\.org_bot|ia_archiver|heritrix/i, "Wayback Machine (Internet Archive)"],
  [/GPTBot/i, "GPTBot (OpenAI)"],
  [/OAI-SearchBot/i, "OAI-SearchBot (OpenAI)"],
  [/ChatGPT-User/i, "ChatGPT-User (OpenAI)"],
  [/ClaudeBot/i, "ClaudeBot (Anthropic)"],
  [/Claude-Web|Claude-User|anthropic-ai/i, "Claude-User (Anthropic)"],
  [/PerplexityBot/i, "PerplexityBot (Perplexity)"],
  [/Google-Extended/i, "Google-Extended (Google AI)"],
  [/CCBot/i, "CCBot (Common Crawl)"],
  [/Bytespider/i, "Bytespider (ByteDance)"],
  [/meta-externalagent/i, "Meta-ExternalAgent (Meta AI)"],
  [/Googlebot/i, "Googlebot (Google 検索)"],
  [/bingbot/i, "Bingbot (Bing 検索)"],
  [/DuckDuckBot/i, "DuckDuckBot (DuckDuckGo)"],
  [/Applebot/i, "Applebot (Apple)"],
  [/Amazonbot/i, "Amazonbot (Amazon)"],
  [/YandexBot/i, "YandexBot (Yandex)"],
  [/Twitterbot/i, "Twitterbot (𝕏 プレビュー)"],
  [/facebookexternalhit/i, "Facebook プレビュー"],
  [/Discordbot/i, "Discordbot (Discord プレビュー)"],
  [/Mastodon/i, "Mastodon プレビュー"],
  [/curl|wget|python-requests|python-httpx|Go-http-client/i, "コマンドラインツール"],
  [/bot|crawler|spider|crawling|scrapy/i, "その他のボット"],
];

function classify(ua) {
  if (!ua) return "UA なし";
  for (const [pattern, name] of AGENTS) {
    if (pattern.test(ua)) return name;
  }
  return "人間などその他";
}

// 集計対象: ページ遷移相当のみ (静的アセットの読込で数を膨らませない)。
// robots.txt はクローラ観測として面白いので対象に含める。
function countable(request, url) {
  if (request.method !== "GET") return false;
  const path = url.pathname;
  if (path === "/robots.txt") return true;
  if (path.startsWith("/static/")) return false;
  const last = path.split("/").pop();
  return !last.includes(".") || last.endsWith(".html");
}

async function record(env, agent) {
  const day = new Date().toISOString().slice(0, 10);
  const now = new Date().toISOString().slice(0, 19).replace("T", " ");
  await env.DB.prepare(
    "INSERT INTO hits (day, agent, count, last) VALUES (?1, ?2, 1, ?3) " +
    "ON CONFLICT(day, agent) DO UPDATE SET count = count + 1, last = ?3"
  ).bind(day, agent, now).run();
}

// ボット以外 (内訳を取らない集計カテゴリ)
const NONBOT = new Set(["人間などその他"]);

async function stats(env) {
  const agents = (await env.DB.prepare(
    "SELECT agent, SUM(count) AS total, MAX(last) AS last, MIN(day) AS since " +
    "FROM hits GROUP BY agent ORDER BY total DESC"
  ).all()).results;
  const months = (await env.DB.prepare(
    "SELECT substr(day, 1, 7) AS month, SUM(count) AS total " +
    "FROM hits GROUP BY month ORDER BY month"
  ).all()).results;
  const days = (await env.DB.prepare(
    "SELECT day, SUM(count) AS total FROM hits GROUP BY day ORDER BY day DESC LIMIT 31"
  ).all()).results.reverse();
  const range = (await env.DB.prepare(
    "SELECT MIN(day) AS since, MAX(day) AS until FROM hits"
  ).all()).results[0] || {since: null, until: null};

  const bots = agents.filter((a) => !NONBOT.has(a.agent));
  const other = agents.filter((a) => NONBOT.has(a.agent))
    .reduce((acc, a) => ({total: acc.total + a.total, last: acc.last > a.last ? acc.last : a.last}),
      {total: 0, last: ""});
  // agents は旧ページ互換のため残す
  return {since: range.since, until: range.until, months, days, bots, other, agents};
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // アーカイブ (スレログ・旧サムネイル等の大容量静的データ) は R2 から配信する
    const archiveTypes = [
      ["/broadcasts/logs/", ".json", "application/json; charset=utf-8"],
      ["/broadcasts/comments/", ".json", "application/json; charset=utf-8"],
      ["/broadcasts/thumb/", ".png", "image/png"],
    ];
    for (const [prefix, ext, contentType] of archiveTypes) {
      if (!url.pathname.startsWith(prefix) || !url.pathname.endsWith(ext)) continue;
      try {
        const object = await env.ARCHIVE.get(url.pathname.slice(1));
        if (object == null) {
          return new Response("not found", {status: 404});
        }
        return new Response(object.body, {
          headers: {
            "content-type": contentType,
            "cache-control": "public, max-age=86400",
          },
        });
      } catch (e) {
        return new Response("unavailable", {status: 503});
      }
    }

    if (url.pathname === "/~Solferino/api/access-stats") {
      try {
        const body = JSON.stringify(await stats(env));
        return new Response(body, {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=300",
          },
        });
      } catch (e) {
        return new Response(JSON.stringify({error: "unavailable"}), {
          status: 503,
          headers: {"content-type": "application/json; charset=utf-8"},
        });
      }
    }

    if (countable(request, url)) {
      const agent = classify(request.headers.get("user-agent"));
      // 集計失敗でもサイト配信は妨げない
      ctx.waitUntil(record(env, agent).catch(() => {}));
    }
    return fetch(request);
  },
};
