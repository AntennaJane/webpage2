# 接続状況集計 Worker

magenta.link の前段で来訪エージェント (Wayback Machine、AI クローラ等) を分類し、
日別カウントを Cloudflare D1 に記録する。サイトの「接続状況」ページが
`/~Solferino/api/access-stats` から集計を取得して表示する。

プライバシー設計: IP アドレス・ホスト名・生の User-Agent 文字列は保存しない。
保存されるのは「分類名 / 日付 / 回数 / 最終来訪時刻」のみ。人間の閲覧は
「人間などその他」として総数だけ数える。

## 初回デプロイ手順 (Cloudflare アカウント権限が必要)

```sh
cd worker
npx wrangler@latest login
npx wrangler d1 create webpage2-access
#   ↑出力に表示される database_id を wrangler.toml の PLACEHOLDER_DATABASE_ID に転記
npx wrangler d1 execute webpage2-access --remote --file=schema.sql
npx wrangler deploy
```

## 動作確認

```sh
curl -s https://magenta.link/~Solferino/api/access-stats
#   → {"agents":[...]} が返ればOK (直後は空配列)
curl -s -A "ClaudeBot/1.0" -o /dev/null https://magenta.link/~Solferino/
curl -s https://magenta.link/~Solferino/api/access-stats
#   → ClaudeBot (Anthropic) が 1 件記録されている
```

サイト側: https://magenta.link/~Solferino/connections に一覧が表示される。

## 更新デプロイ

`worker/src/index.js` 変更後に `npx wrangler deploy` のみ。

## 費用

Workers/D1 とも無料枠 (10 万リクエスト/日・D1 書込 10 万行/日) で十分収まる規模。
超過時は課金ではなくエラーになる設定 (無料プラン) のため高額請求リスクはない。
