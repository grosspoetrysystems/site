import type { ReactNode } from "react";

const LINK =
  "border-current border-b no-underline hover:bg-foreground hover:text-background";

export const ExternalLink = ({
  href,
  className = LINK,
  arrow = true,
  children,
}: {
  href: string;
  className?: string;
  arrow?: boolean;
  children: ReactNode;
}) => (
  <a
    className={className}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    {arrow ? <span aria-hidden="true"> ↗</span> : null}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);
