export interface Product {
  id: string;
  install: string;
  kind: string;
  license: string;
  links: readonly { label: string; href: string }[];
  name: string;
  number: string;
  summary: string;
  version: string;
}

export interface PendingProduct {
  kind: string;
  name: string;
  source?: string;
  summary: string;
}

const repo = (name: string) => `https://github.com/grosspoetrysystems/${name}`;

// Released and public. Versions and install commands match the published npm packages.
export const PRODUCTS: readonly Product[] = [
  {
    id: "poolboy",
    number: "GPS-0002",
    kind: "Docs",
    name: "Poolboy",
    summary:
      "Maintain software documentation as portable Markdown, then compile it into a static corpus agents can query.",
    install: "npm install --global @grosspoetrysystems/poolboy",
    version: "v0.3.0",
    license: "GPL-3.0",
    links: [{ label: "source", href: repo("poolboy") }],
  },
  {
    id: "helicopter",
    number: "GPS-0003",
    kind: "Governance",
    name: "Helicopter",
    summary:
      "Intake for human, AI-assisted, and agent-authored contributions: PR contracts, trusted-base checks, a turn queue, and a human who merges.",
    install: "npx skills add grosspoetrysystems/helicopter",
    version: "v0.2.0",
    license: "MIT",
    links: [{ label: "source", href: repo("helicopter") }],
  },
  {
    id: "vernacular",
    number: "GPS-0004",
    kind: "Workspace",
    name: "Vernacular",
    summary:
      "A private working space beside every repository, so durable agent work never pollutes a commit.",
    install: "npm install --global @grosspoetrysystems/vernacular",
    version: "v0.3.0",
    license: "MIT",
    links: [{ label: "source", href: repo("vernacular") }],
  },
  {
    id: "oompf",
    number: "GPS-0005",
    kind: "Profiles",
    name: "OOMPF",
    summary:
      "Share, inspect, and install reproducible OMP agent profiles. Your YAML stays in your Gist.",
    install: "npm install --global @grosspoetrysystems/oompf",
    version: "v0.4.1",
    license: "MIT",
    links: [
      { label: "oompf.run", href: "https://oompf.run" },
      { label: "source", href: repo("oompf") },
    ],
  },
  {
    id: "crooked-pattern",
    number: "GPS-0006",
    kind: "Readiness",
    name: "Crooked Pattern",
    summary:
      "A deterministic, evidence-backed score for how ready a repository or website is for agents.",
    install:
      "npx @grosspoetrysystems/crooked-pattern scan --url https://your-site.com",
    version: "v0.1.2",
    license: "MIT",
    links: [{ label: "source", href: repo("crooked-pattern") }],
  },
];

export const PENDING: readonly PendingProduct[] = [
  {
    kind: "Memory",
    name: "Sea Noise",
    summary:
      "A personal cognition layer on a Markdown vault. Local-first, audience of one, a mirror rather than an assistant.",
    source: repo("sea-noise"),
  },
  {
    kind: "Secrets",
    name: "Dummy",
    summary:
      "Secrets by indirection: pointers in your .env, plaintext only at the point of use, paired with a governed execution sandbox.",
  },
  {
    kind: "Harness",
    name: "Steel Cars",
    summary: "A composable single-agent runtime. Unpainted on purpose.",
  },
];

export const PRACTICE_NOTES = [
  "Local-first, human-first. The individual is primary.",
  "Choose the most durable tool, language, or pattern for the job. Minimize dependencies.",
  "Publish into the ecosystems where the audience and collaborators already are.",
  "Shared orchestration, not shared visibility.",
  "Governance is part of UX, not a layer above it.",
  "Ship the canonical implementation. Adoption is by example.",
  "Subtract until restraint shows. Features that don’t earn their keep are removed, not deferred.",
] as const;
