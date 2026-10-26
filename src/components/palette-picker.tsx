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
        className="block cursor-pointer leading-none opacity-40 transition-opacity hover:opacity-100 data-popup-open:opacity-100"
      >
        <svg
          aria-hidden="true"
          className="ease-drawer transition-transform duration-500 in-data-popup-open:rotate-180 motion-reduce:transition-none"
          height="22"
          viewBox="0 0 100 100"
          width="22"
        >
          <circle cx="50" cy="50" fill="var(--gps-color-ink)" r="47" />
          <path
            d="M50,3 a47,47 0 1,0 0,94 a23.5,23.5 0 1,1 0,-47 a23.5,23.5 0 1,0 0,-47 z"
            fill="var(--gps-color-ground)"
          />
          <circle cx="50" cy="26.5" fill="var(--gps-color-ink)" r="7" />
          <circle cx="50" cy="73.5" fill="var(--gps-color-ground)" r="7" />
        </svg>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner align="end" side="right" sideOffset={10}>
          <Popover.Popup className="border-foreground bg-background ease-drawer origin-left border p-2 transition duration-500 data-ending-style:-translate-x-2 data-ending-style:scale-x-0 data-ending-style:opacity-0 data-starting-style:-translate-x-2 data-starting-style:scale-x-0 data-starting-style:opacity-0 motion-reduce:transition-none">
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
