# Ariane User Manual

The user manual for [Ariane](https://www.arianesline.com/ariane/), the cave surveying and mapping
application — built with [Docusaurus](https://docusaurus.io/), the same setup as the
[MNemo v2](https://manuals.arianesline.com/mnemo/) and
[JedEye](https://manuals.arianesline.com/jedeye/) manuals.

Published at **https://manuals.arianesline.com/ariane/**.

## Local development

```bash
npm install
npm start
```

`npm start` opens a live-reloading dev server. Edits to files under `docs/` appear immediately.

## Building

```bash
npm run build
npm run serve
```

`npm run build` produces the static site in `build/`; `npm run serve` previews that build locally.
`npm run typecheck` checks the TypeScript config files.

## Structure

| Path | Contents |
| --- | --- |
| `docs/` | The manual pages, one Markdown file per topic |
| `sidebars.ts` | Sidebar order and grouping |
| `docusaurus.config.ts` | Site title, URL, navbar, footer, search |
| `src/pages/index.tsx` | Landing page |
| `src/css/custom.css` | Theme colours |
| `static/img/` | Logos and screenshots |

## Adding a page

1. Create `docs/My-Topic.md` with front matter:

   ```markdown
   ---
   title: My Topic
   sidebar_label: My topic
   ---
   ```

   Start the body at `##` — Docusaurus renders the `title` as the page heading.

2. Add `'My-Topic'` to `sidebars.ts` at the position it should appear.

The build runs with `onBrokenLinks: 'throw'`, so a typo in a cross-reference fails the build rather
than shipping a dead link.

Search is provided by `@easyops-cn/docusaurus-search-local`, which indexes at build time — no
third-party service is contacted.

## Use as a submodule

This repository is consumed by the [Ariane](https://github.com/SebKister/ariane) repository as a
submodule at `doc/manual`. After cloning Ariane, populate it with:

```bash
git submodule update --init --recursive
```

Note that git worktrees do not inherit submodule contents, so the same command is needed inside a
freshly created worktree.

## Deployment

The site is a plain static build, so any host works. The MNemo and JedEye manuals are published by a
GitHub Actions workflow that runs `npm ci && npm run build` and then rsyncs `build/` to the
documentation VPS using a `DOCS_DEPLOY_KEY` repository secret.

An equivalent workflow for this manual is not committed yet — see `.github/workflows/` in the
[MNemo documentation repository](https://github.com/SebKister/MNemoV2-Documentation) for the template
to copy. Point its rsync target at `/ariane` on the docs host so the site is served from
`https://manuals.arianesline.com/ariane/`.
