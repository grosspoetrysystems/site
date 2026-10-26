// Fails the deploy when a project's Poolboy docs are live but the catalogue doesn't link them yet.
import { PENDING, PRODUCTS, pages } from "../src/lib/catalogue.ts";

const live = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    // Offline or GitHub down: don't block a deploy on the network.
    return false;
  }
};

const homes = [...PRODUCTS, ...PENDING]
  // Released products link a docs graph; pending ones only a docs site.
  .filter((p) => !("number" in p ? p.graph : p.docs))
  .flatMap((p) => {
    const docs =
      "links" in p ? p.links.find((l) => l.label === "docs")?.href : undefined;
    const urls = new Set([
      pages(p.id),
      ...(docs ? [docs.endsWith("/") ? docs : `${docs}/`] : []),
    ]);
    return [...urls].map((home) => ({ home, name: p.name }));
  });

const results = await Promise.all(
  homes.map(async (h) => ((await live(`${h.home}graph.json`)) ? h : null))
);
const found = results.filter((h) => h !== null);

if (found.length > 0) {
  console.error(
    `Poolboy docs are live but not linked in src/lib/catalogue.ts:\n${found.map((h) => `${h.name}: ${h.home}`).join("\n")}`
  );
  process.exit(1);
}
