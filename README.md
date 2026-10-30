# Gross Poetry Systems site

This repository contains two site surfaces: the main React/TanStack app, server-rendered by a Cloudflare Worker, and the `pages/` Astro app for product pages and writing. The Worker serves the built Astro output as static assets.

Read the [site documentation](docs/index.md) for the architecture, workflows, and agent surfaces. The [Poolboy docs workflow](.github/workflows/poolboy-docs.yml) validates pull requests. Main pushes validate the corpus; they do not deploy automatically.

The optional documentation publication is separate from `grosspoetry.systems`; it does not replace the Worker, Astro routes, or custom domain.

Check, build the documentation publication, and read it locally with the pinned Poolboy release:

```sh
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy check
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy build --discover
npx --yes --package=@grosspoetrysystems/poolboy@0.4.0 -- poolboy read index.md
```

`poolboy check` remains offline. `--discover` is only on the publication build; omit it for an offline, deterministic local build.

After human content review and merge, an administrator can enable GitHub Pages at **Settings → Pages → GitHub Actions**, then manually run the Poolboy docs workflow on `main`.
