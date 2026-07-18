# 接続状況集計 Worker

magenta.link の前段で来訪エージェント (Wayback Machine、AI クローラ等) を分類し、
日別カウントを Cloudflare D1 に記録する。サイトの「接続状況」ページが
`/~Solferino/api/access-stats` から集計を取得して表示する。

プライバシー設計: IP アドレス・ホスト名・生の User-Agent 文字列は保存しない。
保存されるのは「分類名 / 日付 / 回数 / 最終来訪時刻」のみ。人間の閲覧は
「人間などその他」として総数だけ数える。

## 初回デプロイ手順 (Cloudflare アカウント権限が必要)

初回セットアップは 2026-07-18 に実施済み (database_id は wrangler.toml に記載済み)。
作り直す場合のみ以下を実行する。

```sh
cd worker
npx wrangler@latest login
npx wrangler d1 create webpage2-access
#   ↑出力に表示される database_id を wrangler.toml の database_id に転記
#   (ID を後から調べる場合は `npx wrangler d1 list`。
#    `d1 info` は wrangler.toml の database_id を参照するため転記前には使えない)
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

**Git 連携 (Workers Builds) 設定済みの場合は master への merge で自動デプロイされる**
(Pages と同じ運用に統一。手動での `npx wrangler deploy` は緊急時のフォールバック)。

Git 連携の設定 (ダッシュボード、初回のみ):

1. Workers & Pages → `webpage2-access-stats` → 設定 → ビルド → リポジトリを接続
2. リポジトリ: `AntennaJane/webpage2` / ブランチ: `master`
3. ルートディレクトリ: `/worker` (wrangler.toml がここにある)
4. ビルドコマンド: 空欄 (ビルド不要の素の JS)。デプロイコマンドは既定の
   `npx wrangler deploy` のまま
5. ビルド監視パス (build watch paths) を `worker/*` にすると、サイトのみの
   merge では Worker デプロイが走らず無駄がない

## 費用

Workers/D1 とも無料枠 (10 万リクエスト/日・D1 書込 10 万行/日) で十分収まる規模。
超過時は課金ではなくエラーになる設定 (無料プラン) のため高額請求リスクはない。
