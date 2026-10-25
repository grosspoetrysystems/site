import tokens from "../../tokens/gps.tokens.json" with { type: "json" };

/** Palette names, in token order. Each is a `[data-palette]` block in the Terrazzo output. */
export const PALETTES = Object.keys(tokens.color.ground.$extensions.mode);
export const DEFAULT_PALETTE = PALETTES[0] as string;
export const PALETTE_STORAGE_KEY = "gps_palette";

/** Resolve a stored palette name; anything unknown or missing falls back to the default. */
export const resolvePalette = (stored: string | null): string =>
  stored !== null && PALETTES.includes(stored) ? stored : DEFAULT_PALETTE;
