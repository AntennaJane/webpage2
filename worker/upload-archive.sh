#!/usr/bin/env bash
# R2 バケット webpage2-archive へアーカイブデータを一括アップロードする。
# 使い方: bash upload-archive.sh <ステージングのルート>
#   例:   bash upload-archive.sh /home/remote-ai/projects/webpage2/r2-stage
# - 一時エラーは 3 回までリトライ
# - 完了キーは upload-archive.done に記録し、再実行時はスキップ (途中再開可能)
set -uo pipefail

SRC=${1:?usage: bash upload-archive.sh <staging-root>}
# 完了記録は実行時のカレントディレクトリに置く (書込可能な場所で実行すること)
DONE="$PWD/upload-archive.done"
touch "$DONE"

total=$(find "$SRC" -type f | wc -l)
find "$SRC" -type f | sort | while read -r f; do
  key=${f#"$SRC"/}
  hash=$(sha256sum "$f" | cut -d' ' -f1)
  # 完了記録は「キー<TAB>ハッシュ」。内容が変わったファイルは再アップロードする
  # (旧形式のキーのみの行は既存アップロード済みとして扱う)
  if grep -qxF "$key	$hash" "$DONE" || grep -qxF "$key" "$DONE"; then continue; fi
  case "$key" in
    *.json) ct="application/json" ;;
    *.png)  ct="image/png" ;;
    *.jpg|*.jpeg) ct="image/jpeg" ;;
    *)      ct="application/octet-stream" ;;
  esac
  ok=0
  for attempt in 1 2 3; do
    if npx wrangler r2 object put "webpage2-archive/$key" --file "$f" --content-type "$ct" --remote; then
      ok=1
      break
    fi
    echo "リトライ ($attempt/3 失敗): $key" >&2
    sleep 3
  done
  if [ "$ok" = 1 ]; then
    echo "$key	$hash" >> "$DONE"
  else
    echo "断念: $key (再実行で続きから再開できます)" >&2
  fi
done

done_n=$(cut -f1 "$DONE" | sort -u | wc -l)
echo "完了 $done_n / $total"
if [ "$done_n" -ne "$total" ]; then
  echo "未完了分があります。同じコマンドを再実行してください。" >&2
  exit 1
fi
