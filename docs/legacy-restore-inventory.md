# Legacy restore inventory

This document records the local historical source used to restore the
`/~Solferino/` public pages. It is intentionally an inventory first: publishing
changes should be reviewed in separate pull requests.

## Source snapshot

- Local restore root: `/home/remote-ai/incoming/webpage2-restore/http-Solferino`
- DV3 source: `BackUp/http/~Solferino`
- Copied subset excludes bulky downloadable payloads such as `spot/file/`.
- Source manifest:
  `/home/remote-ai/incoming/webpage2-restore/http-Solferino-source-manifest.txt`
- Excluded file manifest:
  `/home/remote-ai/incoming/webpage2-restore/http-Solferino-excluded-large-files.txt`

The earlier `html.rar` candidate was useful as a hint, but it was incomplete
for the current site restoration. The HTTP backup tree above contains the old
top-level pages and the missing `spot`, `writing`, `rss`, and board directories.

## Current menu mapping

| Current menu item | Legacy source path | Status |
| --- | --- | --- |
| `自己紹介` | `profile.html` | Found. Stale hardware/environment details need review before republication. |
| `最新情報` | `../spot_info.html` from `menu.html` | Not found in the copied `~Solferino` subtree. Old updates also exist in `rss/antennajane.rdf` and board logs. |
| `実況履歴` | `spot/index.html` and related `spot/*.html` | Found. Current React broadcast pages already cover part of this area. |
| `想界日記` | Listed in legacy `menu.html` | Linked from the old menu, but not present in the copied subtree. |
| `雑記廃物` | `writing/index.html` | Found. Child pages include `writing/excavation.html`, `writing/tei/index.html`, `writing/toho_mistake/index.html`, and `writing/with_the_purple_sprout/*.html`. |
| `掲示板等` | `bbs18c/entrance/index.html` | Found as a static historical board snapshot. Do not restore executable PHP behavior. |
| `接続状況` | `logs-public/index.php` and `logs-public/*.html` | Found as historical AWStats output. Treat as archival only because it contains old access-stat material. |
| `規制情報` | Commented-out `../IP_sol.html` in legacy `menu.html` | Not found in the copied subtree; it was already disabled in the old menu. |
| `諸注意等` | `notes.html` | Found. Current React `Notes.tsx` already contains an updated version. |
| `RSS` | `rss/antennajane.rdf` | Found. It is a historical feed snapshot with old `magenta.ddo.jp` links. |

## Legacy top-level pages

| Path | Title | Notes |
| --- | --- | --- |
| `index.html` | `AntennaJane 実況本部` | Current `Front.tsx` already reflects this page with some updated wording. |
| `menu.html` | `目次/AntennaJane 実況本部` | Main source for old menu links. Current `Menu.tsx` has several unlinked placeholders. |
| `notes.html` | `利用上の諸注意/AntennaJane 実況本部` | Current `Notes.tsx` is a modernized version. |
| `profile.html` | `プロフィール/AntennaJane` | Primary source for restoring `自己紹介`. |

## Restore policy

1. Do not invent page content. Restore from files listed here or leave the page
   visibly unfinished.
2. Keep old executable server behavior out of Cloudflare Pages. PHP/CGI board
   files may be retained only as static archival output after review.
3. Update stale links and operational claims only where the replacement is
   factual. Old `magenta.ddo.jp` links should not be republished unchanged.
4. Prefer small pull requests:
   - PR 1: inventory only.
   - PR 2: menu links and one low-risk static page, likely `profile`.
   - PR 3+: `writing`, historical board snapshot, RSS/archive decisions, and
     any broadcast-history reconciliation.
5. Each publishing PR should include the legacy source paths used and the
   intentional stale-info edits in its description.
