/** A photo from the wall, assigned to one project. Placement is a percentage of the column. */
export interface Picture {
  /** File in public/wall, without extension. */
  slug: string;
  title: string;
  width: number;
  height: number;
  span: number;
  offset: number;
}

export interface Product {
  id: string;
  /** The project's own Poolboy corpus manifest, when it publishes one. */
  graph?: string;
  install: string;
  kind: string;
  license: string;
  links: readonly { label: string; href: string }[];
  llms?: string;
  name: string;
  number: string;
  picture: Picture;
  summary: string;
  version: string;
}

export interface PendingProduct {
  id: string;
  kind: string;
  name: string;
  picture: Picture;
  source?: string;
  summary: string;
}

const repo = (name: string) => `https://github.com/grosspoetrysystems/${name}`;
/** Where Poolboy publishes a project's docs by default (GitHub Pages). */
export const pages = (name: string) =>
  `https://grosspoetrysystems.github.io/${name}/`;

// Released and public. Versions and install commands match the published npm packages.
export const PRODUCTS: readonly Product[] = [
  {
    id: "poolboy",
    number: "GPS-0001",
    kind: "Docs",
    name: "Poolboy",
    summary:
      "Maintain software documentation as portable Markdown, then compile it into a static corpus agents can query.",
    install: "npm install --global @grosspoetrysystems/poolboy",
    version: "v0.3.0",
    license: "GPL-3.0-only",
    links: [
      { label: "docs", href: "https://poolboy.sh/docs/" },
      { label: "source", href: repo("poolboy") },
    ],
    llms: "https://poolboy.sh/docs/llms.txt",
    graph: "https://poolboy.sh/docs/graph.json",
    picture: {
      slug: "text-painting-maine",
      title: "text painting · (Maine, black flies)",
      width: 1372,
      height: 1820,
      span: 62,
      offset: 6,
    },
  },
  {
    id: "helicopter",
    number: "GPS-0002",
    kind: "Governance",
    name: "Helicopter",
    summary:
      "Intake for human, AI-assisted, and agent-authored contributions: PR contracts, trusted-base checks, a turn queue, and a human who merges.",
    install: "npx skills add grosspoetrysystems/helicopter",
    version: "v0.2.0",
    license: "MIT",
    links: [
      { label: "docs", href: pages("helicopter") },
      { label: "source", href: repo("helicopter") },
    ],
    llms: `${pages("helicopter")}llms.txt`,
    graph: `${pages("helicopter")}graph.json`,
    picture: {
      slug: "roundabout-fire",
      title: "roundabout on fire",
      width: 1080,
      height: 1080,
      span: 78,
      offset: 0,
    },
  },
  {
    id: "vernacular",
    number: "GPS-0003",
    kind: "Workspace",
    name: "Vernacular",
    summary:
      "A private working space beside every repository, so durable agent work never pollutes a commit.",
    install: "npm install --global @grosspoetrysystems/vernacular",
    version: "v0.3.0",
    license: "MIT",
    links: [{ label: "source", href: repo("vernacular") }],
    picture: {
      slug: "building-blankets",
      title: "anon. · building under blankets",
      width: 1080,
      height: 1439,
      span: 52,
      offset: 40,
    },
  },
  {
    id: "oompf",
    number: "GPS-0004",
    kind: "Profiles",
    name: "OOMPF",
    summary:
      "Share, inspect, and install reproducible OMP agent profiles. Your YAML stays in your Gist.",
    install: "npm install --global @grosspoetrysystems/oompf",
    version: "v0.4.1",
    license: "MIT",
    links: [
      { label: "docs", href: "https://oompf.run/docs" },
      { label: "source", href: repo("oompf") },
    ],
    llms: "https://oompf.run/llms.txt",
    picture: {
      slug: "leatherhead",
      title: "Leatherhead · McFarlane",
      width: 1600,
      height: 1600,
      span: 70,
      offset: 8,
    },
  },
  {
    id: "crooked-pattern",
    number: "GPS-0005",
    kind: "Readiness",
    name: "Crooked Pattern",
    summary:
      "A deterministic, evidence-backed score for how ready a repository or website is for agents.",
    install:
      "npx @grosspoetrysystems/crooked-pattern scan --url https://your-site.com",
    version: "v0.1.2",
    license: "MIT",
    links: [
      { label: "docs", href: pages("crooked-pattern") },
      { label: "source", href: repo("crooked-pattern") },
    ],
    llms: `${pages("crooked-pattern")}llms.txt`,
    graph: `${pages("crooked-pattern")}graph.json`,
    picture: {
      slug: "bargello-eye-wave",
      title: "bargello · eye / wave",
      width: 1200,
      height: 1200,
      span: 58,
      offset: 34,
    },
  },
];

export const PENDING: readonly PendingProduct[] = [
  {
    id: "sea-noise",
    kind: "Memory",
    name: "Sea Noise",
    summary:
      "A personal cognition layer on a Markdown vault. Local-first, with an audience of one.",
    source: repo("sea-noise"),
    picture: {
      slug: "flavin-orange-room",
      title: "Flavin · the orange room",
      width: 1412,
      height: 1816,
      span: 56,
      offset: 4,
    },
  },
  {
    id: "dummy",
    kind: "Secrets",
    name: "Dummy",
    summary:
      "Your .env holds pointers instead of secrets. Plaintext exists only at the point of use, inside a governed execution sandbox.",
    picture: {
      slug: "dead-neon",
      title: "dead neon · full daylight",
      width: 1338,
      height: 1830,
      span: 64,
      offset: 30,
    },
  },
  {
    id: "steel-cars",
    kind: "Harness",
    name: "Steel Cars",
    summary: "A composable single-agent runtime. Unpainted on purpose.",
    picture: {
      slug: "tricycle-rain",
      title: "anon. · tricycle, rain, gold hour",
      width: 1336,
      height: 892,
      span: 70,
      offset: 24,
    },
  },
];
