---
okf_version: "0.2"
---

# Gross Poetry Systems site

Source for the single-page studio site at `https://grosspoetry.systems`, plus a small Astro sub-site for product pages and writing. The repository ships one Cloudflare Worker that server-renders the main app and serves the pre-built Astro output as static assets.

This corpus documents how the two surfaces fit together, the day-to-day developer commands, and the machine-readable endpoints the site exposes for agents. It does not restate the owner's copy or invent product plans; the catalogue content lives in `src/lib/catalogue.ts`.

## Start here

- [Architecture](architecture.md) — the two apps, the build pipeline, design tokens and palettes, and how a deploy is assembled.
- [Workflows](workflows.md) — the `pnpm` command surface for local dev, checks, and deploy, and how to add a writing post.
- [Agent surfaces](agent-surfaces.md) — `llms.txt`, `catalogue.json`, the OpenAPI description, the RFC 9727 API catalog, sitemaps, RSS, and the `robots.txt` crawl policy.

## House rules

`AGENTS.md` governs changes: site copy comes from the owner, no person's name appears anywhere, and `robots.txt` deliberately blocks AI-training crawlers. Keep those intact.

## Known gaps

- Component-level UI (`src/components/`) and styling internals are not documented file-by-file; read the components directly.
- The catalogue's product list is data in `src/lib/catalogue.ts`, not mirrored here, so specific counts and versions are intentionally omitted to avoid drift.
