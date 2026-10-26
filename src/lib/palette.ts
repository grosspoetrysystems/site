import tokens from "../../tokens/gps.tokens.json" with { type: "json" };

export const PALETTES = Object.keys(tokens.color.ground.$extensions.mode);
export const DEFAULT_PALETTE = PALETTES[0] as string;
export const PALETTE_STORAGE_KEY = "gps_palette";

export const resolvePalette = (stored: string | null): string =>
  stored !== null && PALETTES.includes(stored) ? stored : DEFAULT_PALETTE;
