import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { SITE } from "../src/lib/share.ts";

// Product pages and Writing. The main site's Vite build publishes this output as its public dir.
export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  integrations: [sitemap()],
  // Code blocks inherit the palette instead of a fixed Shiki theme.
  markdown: { syntaxHighlight: false },
  vite: { plugins: [tailwindcss()] },
});
