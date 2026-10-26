import { GRID_PATHS } from "./mark-grid";

const SYMBOL_ID = "gps-mark";

/**
 * The mark's drawing, defined once per page. Every <Mark> references it with <use>, so the
 * ~20 KB of grid path data ships once instead of once per copy. Colours resolve from CSS
 * custom properties at each <use>, so marks still follow their own palette.
 */
export const MarkSprite = () => (
  <svg aria-hidden="true" className="absolute" height="0" width="0">
    <defs>
      {/* Stroke width is left to each <use>: the mark and the palette picker draw it at different weights. */}
      <path
        d={GRID_PATHS.join(" ")}
        fill="none"
        id="gps-grid"
        stroke="var(--gps-color-ink)"
        strokeLinecap="round"
      />
      <clipPath id={`${SYMBOL_ID}-clip`}>
        <rect height="112" width="112" x="4" y="4" />
      </clipPath>
      <symbol id={SYMBOL_ID} viewBox="0 0 120 120">
        <rect
          fill="var(--gps-color-ground)"
          height="112"
          width="112"
          x="4"
          y="4"
        />
        <g clipPath={`url(#${SYMBOL_ID}-clip)`}>
          <use href="#gps-grid" strokeWidth="2.6" />
          <g
            fill="var(--gps-color-ground)"
            stroke="var(--gps-color-ground)"
            strokeLinejoin="round"
            strokeWidth="6.24"
          >
            <circle cx="30" cy="60" r="13" />
            <rect height="26" width="26" x="47" y="47" />
            <path d="M 90,46 L 104,73 L 76,73 Z" />
          </g>
          <line
            stroke="var(--gps-color-ink)"
            strokeLinecap="round"
            strokeWidth="2.99"
            x1="30"
            x2="90"
            y1="60"
            y2="60"
          />
          <g fill="var(--gps-color-ink)">
            <circle cx="30" cy="60" r="13" />
            <rect height="26" width="26" x="47" y="47" />
            <path d="M 90,46 L 104,73 L 76,73 Z" />
          </g>
        </g>
        <rect
          fill="none"
          height="112"
          stroke="var(--gps-color-ink)"
          strokeWidth="2.6"
          width="112"
          x="4"
          y="4"
        />
      </symbol>
    </defs>
  </svg>
);

/** Needs <MarkSprite> on the page. */
export const Mark = ({ className }: { className: string }) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 120 120">
    <use href={`#${SYMBOL_ID}`} />
  </svg>
);
