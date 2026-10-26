import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Writing: static Markdown pages, served by the main site's Worker at /writing.
// It builds straight into the main site's public/ so one deploy ships both.
export default defineConfig({
  site: "https://grosspoetry.systems",
  base: "/writing",
  trailingSlash: "always",
  outDir: "../public/writing",
  integrations: [sitemap()],
  // Code blocks inherit the palette instead of a fixed Shiki theme.
  markdown: { syntaxHighlight: false },
});
