import { createFileRoute } from "@tanstack/react-router";

import { sitemapXml } from "@/lib/agents";

// The worker bundle is rebuilt on every deploy, so build time is the page's last-modified date.
const BUILT = new Date().toISOString().slice(0, 10);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(BUILT), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
