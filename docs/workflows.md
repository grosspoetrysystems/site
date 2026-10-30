---
okf_version: "0.2"
type: guide
status: stable
sources:
  - resource: package.json
  - resource: lefthook.yml
  - resource: commitlint.config.js
  - resource: AGENTS.md
  - resource: pages/src/content.config.ts
  - resource: pages/src/posts/_template.md
  - resource: pages/src/lib/posts.ts
  - resource: pages/src/pages/writing/[...slug].astro
  - resource: pages/src/pages/writing/index.astro
  - resource: pages/src/pages/writing/rss.xml.ts
  - resource: pages/src/pages/og/[...card].png.ts
  - resource: pages/src/layouts/page.astro
  - resource: src/lib/share.ts
  - resource: .github/workflows/poolboy-docs.yml
  - resource: scripts/unlinked-docs.ts
  - resource: poolboy.toml
---

# Workflows

All commands run from the repository root with `pnpm`. Most scripts re-run `pnpm tokens` first where they need compiled tokens, so you rarely call `tz` directly.

## Local development

| Task | Command | Notes |
| --- | --- | --- |
| Main app dev server | `pnpm dev` | Vite on port 3000; builds tokens and `pages/` first. |
| Astro sub-site only | `pnpm pages` | `astro dev` for product/writing pages in isolation. |
| Preview a production build | `pnpm preview` | Serves the `vite build` output. |

## Checks

`pnpm check` is the full gate and must pass before a change ships (`AGENTS.md`):

- `pnpm lint` — `ultracite` (oxlint) check, tokens built first.
- `pnpm typecheck` — `tsc --noEmit`, plus `astro sync` and a second `tsc` over `pages`.
- `pnpm test` — `vitest run`.
- `pnpm knip` — unused files, exports, and dependencies.

`pnpm fix` runs `ultracite fix` for autofixable lint issues.

## Poolboy documentation publication

The checked-in `.github/workflows/poolboy-docs.yml` pins `@grosspoetrysystems/poolboy@0.4.0`. Its `poolboy check` stays offline. The publication build alone opts into `poolboy build --discover`; the workflow uploads and deploys that separate GitHub Pages publication only for a manual `workflow_dispatch` on `main`. It does not replace the Worker/Astro deployment.

The equivalent local commands are:

```sh
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy check
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy build --discover
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy read index.md
```

`--discover` follows bounded HTTPS references from the corpus and admitted source files. It can be network-dependent and partial when a remote publication is unavailable; discovered publications remain separate external references with pinned remote identities, not trusted local corpus content. Omitting `--discover` keeps a local build offline and deterministic.

### Git hooks

`lefthook.yml` installs hooks on `pnpm prepare`:

- **pre-commit** lints and auto-fixes staged `*.{ts,tsx,js,json,jsonc,css}` files only — it does not typecheck or test, so run `pnpm check` yourself.
- **commit-msg** enforces Conventional Commits with an empty body and no footers (`commitlint.config.js`). The hook removes `Signed-off-by` before linting, so `git commit -s` supplies the required DCO sign-off without tripping the footer rule.

## Deploy

`pnpm deploy` runs `node scripts/unlinked-docs.ts`, then `pnpm build`, then `wrangler deploy`. Deploy only when the owner says so, then load the changed pages on `grosspoetry.systems` to confirm (`AGENTS.md`). The script clears `CF_API_TOKEN` and `CF_ACCOUNT_ID` from the env so Wrangler uses its own auth.

Before the build, `scripts/unlinked-docs.ts` checks released products without a `graph` and pending products without `docs`. It probes the default GitHub Pages URL and any explicit docs URL for a live `graph.json`; a live unlinked graph blocks deployment, while offline or other network failures do not. This guard preserves the existing catalogue links and does not add per-project deployment wiring.

## Add a writing post

Posts are an Astro content collection (`pages/src/content.config.ts`) loaded from `pages/src/posts/**/*.md`; files whose basename begins with `_` are ignored.

1. Copy `pages/src/posts/_template.md` to a new name without the leading underscore — the relative filename becomes the URL slug (`/writing/<slug>/`).
2. Fill the frontmatter: `title` (string), `date` (`YYYY-MM-DD`), optional `description` (passed through the post page's `Page`/`shareMeta` metadata and used as the RSS item's description when provided), and `draft` (defaults to `false`). If `draft` is omitted, the post is published. The writing index shows title/date only; generated OG images use the post title/date and do not render `description`.
3. Set `draft: true` to keep a post unpublished; omit it or set `draft: false` to publish. `publishedPosts` (`pages/src/lib/posts.ts`) filters out drafts and sorts newest-first, so only published posts reach the writing index, post pages, RSS, and generated OG cards.
4. Each published post gets a generated share card at `/og/writing/<slug>.png` and an entry in `/writing/rss.xml`.

Post content, like the site's own copy, comes from the owner (`AGENTS.md`); this documents the mechanics, not licence to write new copy.
