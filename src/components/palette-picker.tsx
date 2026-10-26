import { Popover } from "@base-ui/react/popover";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { useCallback, useState } from "react";

import {
  DEFAULT_PALETTE,
  PALETTE_STORAGE_KEY,
  PALETTES,
  resolvePalette,
} from "@/lib/palette";

export const PalettePicker = () => {
  const [current, setCurrent] = useState(DEFAULT_PALETTE);

  // The swatches only render while open, so read the saved palette then.
  const syncFromStorage = useCallback((open: boolean) => {
    if (open) {
      setCurrent(resolvePalette(localStorage.getItem(PALETTE_STORAGE_KEY)));
    }
  }, []);

  const choose = useCallback((value: unknown) => {
    const palette = resolvePalette(String(value));
    document.documentElement.dataset.palette = palette;
    localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    setCurrent(palette);
  }, []);

  return (
    <Popover.Root onOpenChange={syncFromStorage}>
      <Popover.Trigger
        aria-label="Change colours"
        className="relative z-50 block cursor-pointer leading-none opacity-70 transition-opacity hover:opacity-100 data-popup-open:opacity-100"
      >
        {/* Draws the grid from <MarkSprite>, which the home page always renders. */}
        <svg aria-hidden="true" height="22" viewBox="0 0 120 120" width="22">
          <clipPath id="palette-icon-clip">
            <circle cx="60" cy="60" r="56" />
          </clipPath>
          <circle cx="60" cy="60" fill="var(--gps-color-ground)" r="56" />
          <g clipPath="url(#palette-icon-clip)">
            <use className="palette-grid" href="#gps-grid" strokeWidth="5" />
          </g>
          <circle
            cx="60"
            cy="60"
            fill="none"
            r="56"
            stroke="var(--gps-color-ink)"
            strokeWidth="8"
          />
        </svg>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          align="center"
          className="z-40"
          positionMethod="fixed"
          side="right"
          sideOffset={-30}
        >
          <Popover.Popup
            aria-label="Change colours"
            className="border-foreground bg-background tray-reveal rounded-full border py-2 pr-2 pl-10"
          >
            <RadioGroup
              aria-label="Colours"
              className="flex gap-2"
              onValueChange={choose}
              value={current}
            >
              {PALETTES.map((name) => (
                // Each swatch carries its own data-palette, so bg-ground shows that palette's colour.
                <Radio.Root
                  aria-label={name}
                  className="border-foreground bg-ground data-checked:outline-foreground size-6 cursor-pointer rounded-full border capitalize data-checked:outline-2 data-checked:outline-offset-2"
                  data-palette={name}
                  key={name}
                  title={name}
                  value={name}
                />
              ))}
            </RadioGroup>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};
