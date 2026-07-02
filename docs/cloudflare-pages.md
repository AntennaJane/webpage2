# Cloudflare Pages deployment

This repository is the source of truth for `https://magenta.link/~Solferino/`.

## Build settings

- Framework preset: Create React App
- Production branch: `master`
- Build command: `npm ci && npm run build`
- Build output directory: `build`

`npm run build` creates `src/data/parameters.json` from
`src/data/parameters-dist.json` when the local file is missing. The file is
ignored by git so local overrides do not become part of the repository.

## Routing

`public/_redirects` provides the SPA fallback that the former Express server
implemented with `/* -> build/index.html`. This keeps direct access to routes
such as `/~Solferino/menu` working on Cloudflare Pages.

## External assets

Broadcast thumbnails currently remain on `https://s.magenta.link/`, backed by
the existing Google Cloud Storage bucket. Moving those assets into this
repository, Cloudflare R2, or another store should be handled as a separate
migration after the Pages cutover is stable.

## Retired path

`app.js` and `setup/` document the previous GCE VM + Express + certbot hosting
model. They are retained as migration history, but Cloudflare Pages should not
run them.
