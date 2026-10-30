---
okf_version: "0.2"
type: reference
status: stable
sources:
  - resource: src/lib/agents.ts
  - resource: src/lib/catalogue.ts
  - resource: src/lib/share.ts
  - resource: src/routes/llms[.]txt.ts
  - resource: src/routes/catalogue[.]json.ts
  - resource: src/routes/sitemap[.]xml.ts
  - resource: src/routes/[.]well-known/api-catalog.ts
  - resource: pages/public/openapi.json
  - resource: pages/public/robots.txt
  - resource: pages/src/pages/writing/rss.xml.ts
  - resource: pages/src/pages/[product].astro
  - resource: src/components/wall.tsx
  - resource: scripts/unlinked-docs.ts
---

# Agent surfaces

The site publishes machine-readable descriptions of the studio catalogue so agents can discover projects without scraping HTML. The main app serves the dynamic endpoints; the Astro sub-site serves the static ones.

## Endpoints

| Path | Content type | Served by | Source |
| --- | --- | --- | --- |
| `/llms.txt` | `text/plain` | Main app | `src/routes/llms[.]txt.ts` → `llmsTxt()` |
| `/catalogue.json` | `application/json` | Main app | `src/routes/catalogue[.]json.ts` → `catalogueJson()` |
| `/sitemap.xml` | `application/xml` | Main app | `src/routes/sitemap[.]xml.ts` → `sitemapXml()` |
| `/.well-known/api-catalog` | `application/linkset+json` | Main app | `src/routes/[.]well-known/api-catalog.ts` |
| `/openapi.json` | `application/json` | Astro static | `pages/public/openapi.json` |
| `/writing/rss.xml` | RSS | Astro | `pages/src/pages/writing/rss.xml.ts` |
| `/sitemap-index.xml` | XML | Astro (`@astrojs/sitemap`) | `pages/astro.config.mjs` |

The TanStack routes use literal-dot filenames (`llms[.]txt.ts` → `/llms.txt`): the `[.]` escapes the dot so the route stays a single path segment instead of a nested one.

## Discovery chain

`/.well-known/api-catalog` is the canonical machine entrypoint (`https://grosspoetry.systems/.well-known/api-catalog`). It is an RFC 9727 linkset that anchors on `/catalogue.json`, points at `/openapi.json` as its `service-desc`, and `/llms.txt` as its `service-doc`. An agent can start there and reach the catalogue, OpenAPI description, and language-model guide; following `/llms.txt` additionally reaches the writing RSS feed under its "Machine-readable" section.

## Catalogue data model

`catalogue.json` and the product pages read the same catalogue arrays; writing OG cards read the published posts collection. The wall links released and pending entries to their generated product pages.

- `PRODUCTS` (`Product[]`) — released, public projects. Each has `id`, `name`, `number`, `kind`, `summary`, `install`, `version`, `license`, `links[]`, and optional `llms` (the project's own `llms.txt`) and `graph` (its Poolboy `graph.json` manifest).
- `PENDING` (`PendingProduct[]`) — "in the works": `id`, `name`, `kind`, `summary`, and optional `docs` and `source`. `pages/src/pages/[product].astro` generates pages for both arrays; pending pages show the pending label, summary, and only the optional external links that exist.

`catalogue.json` serialises both lists via `catalogueJson()` in `src/lib/agents.ts`; its shape is described by the `Catalogue`, `Product`, and `Pending` schemas in `pages/public/openapi.json`. The schema.org `jsonLd()` block uses the organisation as the WebSite publisher and product author; `shareMeta` uses the same organisation constants for page and social metadata. No person is emitted, per `AGENTS.md`.

## External publications

The catalogue's `docs`, `llms`, and `graph` fields point to separate project publications; they are not copied into this site's corpus or made trusted by the catalogue. A Poolboy publication build may use bounded `--discover` traversal to inspect HTTPS references from the corpus and admitted source files, retaining pinned remote identities. Discovery is network-dependent and may be partial when a remote publication is unavailable; omitting `--discover` preserves the offline deterministic path.

## Crawl policy

`pages/public/robots.txt` is deliberately split, and `AGENTS.md` forbids relaxing it for a better score:

- Search and user-initiated agent fetches (`OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`) are allowed.
- Training crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`) are disallowed, and the `Content-Signal` line in `robots.txt` sets `ai-train=no`.
