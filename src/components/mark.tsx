import { useId } from "react";

import { GRID_PATHS } from "./mark-grid";

/** The GPS mark: circle, square, triangle on a warped grid. Inherits --ground/--ink. */
export const Mark = ({
  size = 72,
  label,
  className,
}: {
  size?: number;
  label?: string;
  className?: string;
}) => {
  const clipId = useId();
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      height={size}
      role={label ? "img" : undefined}
      viewBox="0 0 120 120"
      width={size}
    >
      <defs>
        <clipPath id={clipId}>
          <rect height="112" width="112" x="4" y="4" />
        </clipPath>
      </defs>
      <rect
        fill="var(--gps-color-ground)"
        height="112"
        width="112"
        x="4"
        y="4"
      />
      <g clipPath={`url(#${clipId})`}>
        {GRID_PATHS.map((d) => (
          <path
            d={d}
            fill="none"
            key={d.slice(0, 24)}
            stroke="var(--gps-color-ink)"
            strokeLinecap="round"
            strokeWidth="2.6"
          />
        ))}
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
    </svg>
  );
};
