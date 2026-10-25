import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/routes/**/*.tsx", "terrazzo.config.ts"],
  project: ["src/**/*.{ts,tsx}"],
  // shadcn-generated primitives export more than this site uses.
  ignore: ["src/components/ui/**"],
  // Imported from src/styles.css, which knip does not follow.
  ignoreDependencies: ["tailwindcss", "tw-animate-css", "shadcn"],
};

export default config;
