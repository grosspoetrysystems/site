---
okf_version: "0.2"
type: explanation
status: stable
sources:
  - resource: package.json
  - resource: vite.config.ts
  - resource: wrangler.jsonc
  - resource: pages/astro.config.mjs
  - resource: pages/package.json
  - resource: pnpm-workspace.yaml
  - resource: terrazzo.config.ts
  - resource: tokens/gps.tokens.json
  - resource: src/lib/palette.ts
  - resource: src/lib/share.ts
  - resource: src/routes/__root.tsx
  - resource: pages/src/pages/[product].astro
  - resource: src/lib/catalogue.ts
  - resource: src/lib/agents.ts
  - resource: src/components/wall.tsx
  - resource: scripts/unlinked-docs.ts
---

# Architecture

## Two apps, one worker

The repository is a pnpm workspace with two front ends:

- **Main app** — a TanStack Start (React 19) application in `src/`, bundled by Vite with the Cloudflare plugin (`vite.config.ts`) and deployed as a single Worker (`wrangler.jsonc`, `name = "gps-site"`). It prerenders at build (`tanstackStart({ prerender: { enabled: true, crawlLinks: true } })`) and server-renders through `@tanstack/react-start/server-entry`.
- **Pages sub-site** — an Astro project in `pages/` (the only workspace package, per `pnpm-workspace.yaml`) that builds product pages, the writing section, OG share cards, and RSS.

The two are stitched together by one line in `vite.config.ts`: `publicDir: "pages/dist"`. The Astro build writes static output to `pages/dist`, and the main Vite build publishes that directory as its public assets. So the Astro-rendered routes (`/<product>/`, `/writing/…`, `/og/….png`) and static files (`robots.txt`, `openapi.json`, `favicon.svg`) are served by the same Worker as the TanStack app.

The shared catalogue in `src/lib/catalogue.ts` is source data, not a second routing layer. The Worker serializers, wall, and Astro page consume the same `PRODUCTS` and `PENDING` arrays, so catalogue URLs remain the source evidence for each project's external documentation.

`pages/src/pages/[product].astro` generates pages for both arrays. Released products render their install command, version, licence, and declared links; pending products render a pending label, summary, and only the optional docs/source links that exist.

Shared constants — `SITE`, `NAME`, `TAGLINE`, and the `shareMeta` helper — live in `src/lib/share.ts`, imported by both apps, so that file stays free of path aliases (see its header comment).

## Build pipeline

`pnpm build` runs three stages in order (`package.json`):

1. `pnpm tokens` — Terrazzo compiles design tokens to `src/tokens.css`.
2. `pnpm --filter pages build` — Astro builds the sub-site into `pages/dist`.
3. `vite build` — the main app builds and publishes `pages/dist` as its public dir, prerendering linked routes.

Because step 3 depends on step 2's output, the order is fixed. `dev` follows the token-then-pages-build preamble before starting Vite; `pages` compiles tokens and then starts the Astro dev server directly.

## Design tokens and palettes

Colour, type, and spacing are defined once in `tokens/gps.tokens.json` (DTCG format) and compiled by Terrazzo (`terrazzo.config.ts`) into `src/tokens.css`:

- Variables are emitted as `--gps-*` so `src/styles.css` can map them into Tailwind's theme without name clashes.
- Palettes come from `tokens.color.ground.$extensions.mode`. The base `:root` block holds everything; each palette emits a `[data-palette="<name>"]` block that overrides only `color.*`.

`src/tokens.css` is generated and git-ignored — never edit it; change `tokens/gps.tokens.json` and re-run `pnpm tokens` (`AGENTS.md`). At runtime the palette list and storage key live in `src/lib/palette.ts`, and `src/routes/__root.tsx` restores the saved palette from `localStorage` before first paint to avoid a flash of the default.

## Deploy target

`wrangler.jsonc` binds the Worker to the custom domains `grosspoetry.systems` and `www.grosspoetry.systems` with `nodejs_compat`. Deploys are manual and owner-gated — see [Workflows](workflows.md) and `AGENTS.md`.

`pnpm deploy` first runs `node scripts/unlinked-docs.ts`. The guard checks released products without a `graph` and pending products without `docs`, probing the default Pages URL and any explicit docs URL for a live `graph.json`. A live graph at an unlinked location blocks deployment; network or offline failures do not.
