import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";

import tokens from "./tokens/gps.tokens.json" with { type: "json" };

const palettes = Object.keys(tokens.color.ground.$extensions.mode);

export default defineConfig({
  tokens: ["./tokens/gps.tokens.json"],
  outDir: "./src/",
  plugins: [
    css({
      filename: "tokens.css",
      legacyHex: true,
      // Prefixed so src/styles.css can map them into Tailwind's theme without name clashes.
      variableName: (token) => `--gps-${token.id.replaceAll(".", "-")}`,
      permutations: [
        {
          input: { tzMode: "." },
          prepare: (contents) => `:root {\n  ${contents}\n}`,
        },
        ...palettes.map((name) => ({
          input: { tzMode: name },
          // Only the colours change between palettes; everything else stays in :root.
          include: ["color.*"],
          prepare: (contents: string) =>
            `[data-palette="${name}"] {\n  ${contents}\n}`,
        })),
      ],
    }),
  ],
});
