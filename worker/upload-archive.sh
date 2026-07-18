#!/usr/bin/env bash
# R2 バケット webpage2-archive へアーカイブデータを一括アップロードする。
# 使い方: bash upload-archive.sh <ステージングのルート>
#   例:   bash upload-archive.sh /home/remote-ai/projects/webpage2/r2-stage
# ステージング内の相対パスがそのままオブジェクトキーになる
# (broadcasts/logs/xxx.json → /broadcasts/logs/xxx.json で配信)。
set -euo pipefail

SRC=${1:?usage: bash upload-archive.sh <staging-root>}
cd "$(dirname "$0")"

find "$SRC" -type f | while read -r f; do
  key=${f#"$SRC"/}
  case "$key" in
    *.json) ct="application/json" ;;
    *.png)  ct="image/png" ;;
    *.jpg|*.jpeg) ct="image/jpeg" ;;
    *)      ct="application/octet-stream" ;;
  esac
  npx wrangler r2 object put "webpage2-archive/$key" --file "$f" --content-type "$ct" --remote
done
echo "アップロード完了: $(find "$SRC" -type f | wc -l) files"
