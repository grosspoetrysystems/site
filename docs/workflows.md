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

### Git hooks

`lefthook.yml` installs hooks on `pnpm prepare`:

- **pre-commit** lints and auto-fixes staged `*.{ts,tsx,js,json,jsonc,css}` files only — it does not typecheck or test, so run `pnpm check` yourself.
- **commit-msg** enforces Conventional Commits with an empty body (`commitlint.config.js`). Footers are allowed; use `git commit -s` to provide the sign-off required by the repository's DCO check.

## Deploy

`pnpm deploy` runs `pnpm build` then `wrangler deploy`. Deploy only when the owner says so, then load the changed pages on `grosspoetry.systems` to confirm (`AGENTS.md`). The script clears `CF_API_TOKEN` and `CF_ACCOUNT_ID` from the env so Wrangler uses its own auth.

## Add a writing post

Posts are an Astro content collection (`pages/src/content.config.ts`) loaded from `pages/src/posts/**/*.md`; files whose basename begins with `_` are ignored.

1. Copy `pages/src/posts/_template.md` to a new name without the leading underscore — the relative filename becomes the URL slug (`/writing/<slug>/`).
2. Fill the frontmatter: `title` (string), `date` (`YYYY-MM-DD`), optional `description` (passed through the post page's `Page`/`shareMeta` metadata and used as the RSS item's description when provided), and `draft` (defaults to `false`). If `draft` is omitted, the post is published. The writing index shows title/date only; generated OG images use the post title/date and do not render `description`.
3. Set `draft: true` to keep a post unpublished; omit it or set `draft: false` to publish. `publishedPosts` (`pages/src/lib/posts.ts`) filters out drafts and sorts newest-first, so only published posts reach the writing index, post pages, RSS, and generated OG cards.
4. Each published post gets a generated share card at `/og/writing/<slug>.png` and an entry in `/writing/rss.xml`.

Post content, like the site's own copy, comes from the owner (`AGENTS.md`); this documents the mechanics, not licence to write new copy.
