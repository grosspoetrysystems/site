import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { SITE } from "../src/lib/share.ts";

// It builds straight into the main site's public/ so one deploy ships both.
export default defineConfig({
  site: SITE,
  base: "/writing",
  trailingSlash: "always",
  outDir: "../public/writing",
  integrations: [sitemap()],
  // Code blocks inherit the palette instead of a fixed Shiki theme.
  markdown: { syntaxHighlight: false },
});
