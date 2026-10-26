import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      entry: ["src/routes/**/*.tsx", "terrazzo.config.ts"],
      project: ["src/**/*.{ts,tsx}"],
      // shadcn-generated primitives export more than this site uses.
      ignore: ["src/components/ui/**"],
      // Imported from src/styles.css, which knip does not follow.
      ignoreDependencies: [
        "tailwindcss",
        "tw-animate-css",
        "shadcn",
        "@fontsource/archivo",
        "@fontsource/courier-prime",
        "@fontsource/newsreader",
      ],
    },
    // Font files are read by path in the share-card endpoint.
    pages: {
      ignoreDependencies: ["@fontsource/archivo", "@fontsource/courier-prime"],
    },
  },
};

export default config;
