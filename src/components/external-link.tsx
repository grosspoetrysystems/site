import type { ReactNode } from "react";

const LINK =
  "border-current border-b no-underline hover:bg-foreground hover:text-background";

export const ExternalLink = ({
  href,
  className = LINK,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => (
  <a
    className={className}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    <span aria-hidden="true"> ↗</span>
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);
