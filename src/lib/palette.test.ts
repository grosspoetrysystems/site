import { describe, expect, it } from "vitest";

import tokens from "../../tokens/gps.tokens.json" with { type: "json" };
import { DEFAULT_PALETTE, PALETTES, resolvePalette } from "./palette";

describe(resolvePalette, () => {
  it("defaults to cobalt, the token file's first palette", () => {
    expect(DEFAULT_PALETTE).toBe("cobalt");
  });

  it("restores a known stored palette", () => {
    expect(resolvePalette("bone")).toBe("bone");
  });

  it.each([null, "", "chartreuse", "Bone"])(
    "falls back to the default for %j",
    (stored) => {
      expect(resolvePalette(stored)).toBe(DEFAULT_PALETTE);
    }
  );

  it("has the same palettes for ground and ink", () => {
    expect(Object.keys(tokens.color.ink.$extensions.mode)).toStrictEqual(
      PALETTES
    );
  });
});
