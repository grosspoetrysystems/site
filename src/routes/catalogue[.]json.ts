import { createFileRoute } from "@tanstack/react-router";

import { catalogueJson } from "@/lib/agents";

export const Route = createFileRoute("/catalogue.json")({
  server: {
    handlers: {
      GET: () => Response.json(catalogueJson()),
    },
  },
});
