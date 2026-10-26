import { PENDING, PRODUCTS } from "@/lib/catalogue";

export const SITE = "https://grosspoetry.systems";
const NAME = "Gross Poetry Systems";
const TAGLINE = "Control surfaces for uncertain machines.";
const ABOUT =
  "Rigorous engineering and design for the probabilistic magic of intelligent systems.";

export const llmsTxt = () =>
  [
    `# ${NAME}`,
    "",
    `> ${TAGLINE} ${ABOUT}`,
    "",
    "A small catalogue of open-source tools for working with agents. Each project publishes its own documentation; follow its llms.txt for the full corpus.",
    "",
    "## Catalogue",
    "",
    ...PRODUCTS.map((p) => {
      const refs = [
        p.llms && `llms.txt: ${p.llms}`,
        p.graph && `graph.json: ${p.graph}`,
        ...p.links.map((l) => `${l.label}: ${l.href}`),
        `install: \`${p.install}\``,
      ].filter(Boolean);
      return `- [${p.name}](${p.links.find((l) => l.label === "source")?.href}): ${p.summary} (${p.number}, ${p.kind}, ${p.version}, ${p.license}; ${refs.join("; ")})`;
    }),
    "",
    "## In the works",
    "",
    ...PENDING.map((p) =>
      p.source
        ? `- [${p.name}](${p.source}): ${p.summary}`
        : `- ${p.name}: ${p.summary}`
    ),
    "",
    "## Contact",
    "",
    "- office@grosspoetry.systems",
    "- https://github.com/grosspoetrysystems",
    "",
    "## Machine-readable",
    "",
    `- Catalogue as JSON: ${SITE}/catalogue.json`,
    `- OpenAPI description: ${SITE}/openapi.json`,
    `- Writing (RSS): ${SITE}/writing/rss.xml`,
    "",
  ].join("\n");

export const catalogueJson = () => ({
  name: NAME,
  url: SITE,
  products: PRODUCTS.map((p) => ({
    id: p.id,
    number: p.number,
    name: p.name,
    kind: p.kind,
    summary: p.summary,
    version: p.version,
    license: p.license,
    install: p.install,
    links: Object.fromEntries(p.links.map((l) => [l.label, l.href])),
    llms: p.llms ?? null,
    graph: p.graph ?? null,
  })),
  pending: PENDING.map((p) => ({
    id: p.id,
    name: p.name,
    kind: p.kind,
    summary: p.summary,
    source: p.source ?? null,
  })),
});
export const sitemapXml = (lastmod: string) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${lastmod}</lastmod></url>
</urlset>
`;

/** schema.org description of the studio and its catalogue. The publisher is the organisation, never a person. */
export const jsonLd = (dateModified: string) => {
  const org = {
    "@type": "Organization",
    "@id": `${SITE}/#org`,
    name: NAME,
    url: SITE,
    email: "office@grosspoetry.systems",
    sameAs: ["https://github.com/grosspoetrysystems"],
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#site`,
        url: SITE,
        name: NAME,
        description: `${TAGLINE} ${ABOUT}`,
        publisher: { "@id": org["@id"] },
        dateModified,
      },
      {
        "@type": "ItemList",
        name: "Catalogue",
        itemListElement: PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: p.name,
            identifier: p.number,
            description: p.summary,
            codeRepository: p.links.find((l) => l.label === "source")?.href,
            url: p.links.find((l) => l.label === "docs")?.href,
            license: `https://spdx.org/licenses/${p.license}.html`,
            version: p.version.replace(/^v/u, ""),
            author: { "@id": org["@id"] },
          },
        })),
      },
    ],
  };
};
