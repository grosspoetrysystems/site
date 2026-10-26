import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      entry: ["src/routes/**/*.tsx", "terrazzo.config.ts"],
      project: ["src/**/*.{ts,tsx}"],
      // shadcn-generated primitives export more than this site uses.
      ignore: ["src/components/ui/**"],
      // Imported from src/styles.css, which knip does not follow.
      ignoreDependencies: ["tailwindcss", "tw-animate-css", "shadcn"],
    },
    // Writing (Astro): the Astro plugin finds its pages, config and content config.
    writing: {},
  },
};

export default config;
