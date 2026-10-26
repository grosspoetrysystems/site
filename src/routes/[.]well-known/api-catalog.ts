import { createFileRoute } from "@tanstack/react-router";

import { SITE } from "@/lib/share";

// RFC 9727 API catalog: one read-only API, described by /openapi.json.
const LINKSET = {
  linkset: [
    {
      anchor: `${SITE}/catalogue.json`,
      "service-desc": [
        {
          href: `${SITE}/openapi.json`,
          type: "application/vnd.oai.openapi+json",
        },
      ],
      "service-doc": [{ href: `${SITE}/llms.txt`, type: "text/plain" }],
    },
  ],
};

export const Route = createFileRoute("/.well-known/api-catalog")({
  server: {
    handlers: {
      GET: () =>
        Response.json(LINKSET, {
          headers: { "Content-Type": "application/linkset+json" },
        }),
    },
  },
});
