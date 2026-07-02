# steward external PJ management

steward should manage this repository as an external Managed Service. The
source of truth remains GitHub, and production hosting is Cloudflare Pages.
DV3/steward is not the public origin.

## Local source checkout

```sh
git clone https://github.com/AntennaJane/webpage2.git ~/projects/webpage2
bash ~/steward-v2/scripts/managed-service-init.sh --hook-only ~/projects/webpage2
```

The hook allows ordinary work commits and blocks forged `Reviewed-By` trailers.
Promotion proof should come from steward's Review Ledger route.

## Registry entry

Add this to `steward-v2/config/managed-services.yaml` when steward-v2 can be
edited through its normal worktree/promotion path:

```yaml
  webpage2:
    composition: static_site
    source: ~/projects/webpage2/
    runtime:
      test: null
      prod: null
    five_minute_commit: false
    deploy_gate: false
    access_urls:
      prod: https://magenta.link/~Solferino/
      test: null
    notes: "AntennaJane/webpage2. Current magenta.link/~Solferino source repo. Old hosting was GCE VM + Express + certbot + GCS(s.magenta.link) images. Target is GitHub(master) -> Cloudflare Pages(build/) -> magenta.link. DV3/steward is not public origin or source of truth; it only handles external PJ management, review, and migration notes. Keep s.magenta.link thumbnails during the first Pages migration phase, then decide integration/R2/GCS separately."
```

## cli_envoy allowlist update

Add a secure update equivalent to:

```yaml
description: |
  Allow cli_envoy to edit the webpage2 source repo and its PJ worktree root.

  webpage2 is the source repository for https://magenta.link/~Solferino/.
  The public hosting target is Cloudflare Pages connected to GitHub, not a
  DV3/Caddy runtime.
operations:
  - op: append
    path: cli_envoy.allowed_work_dirs
    value: /home/remote-ai/projects/webpage2

  - op: append
    path: cli_envoy.allowed_work_dirs
    value: /home/remote-ai/projects/webpage2-worktrees
```

After that, steward PJ work can use `target_repo=webpage2` and land in
`~/projects/webpage2-worktrees/<execID>/`.
