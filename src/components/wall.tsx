import type { CSSProperties, ReactNode } from "react";

import { ExternalLink } from "@/components/external-link";
import { InstallCommand } from "@/components/install-command";
import type { Picture } from "@/lib/catalogue";
import { PENDING, PRODUCTS } from "@/lib/catalogue";

// The first photo is in the opening viewport (the LCP on phones); the rest load as they scroll in.
const Photo = ({ picture, badge }: { picture: Picture; badge: string }) => {
  const lead = picture === PRODUCTS[0]?.picture;
  return (
    <div className="relative">
      <img
        alt=""
        className="wall-photo block h-auto w-full"
        decoding="async"
        fetchPriority={lead ? "high" : undefined}
        height={picture.height}
        loading={lead ? "eager" : "lazy"}
        src={`/wall/${picture.slug}.webp`}
        width={picture.width}
      />
      <span className="bg-foreground text-background absolute right-0 bottom-0 px-2.5 py-1.5 font-mono text-xs">
        {badge}
      </span>
    </div>
  );
};

const Pin = ({
  id,
  badge,
  name,
  picture,
  summary,
  href,
  children,
}: {
  id: string;
  badge: string;
  name: string;
  picture: Picture;
  summary: string;
  href?: string;
  children: ReactNode;
}) => {
  const external = href !== undefined && !href.startsWith("/");
  return (
    <article
      className="wall-pin group"
      id={id}
      style={
        {
          "--span": `${picture.span}%`,
          "--offset": `${picture.offset}%`,
        } as CSSProperties
      }
    >
      {/* The photo repeats the heading's link for pointer users; keyboard and screen readers get the heading. */}
      {href ? (
        <a
          aria-hidden="true"
          className="no-underline"
          href={href}
          rel={external ? "noopener noreferrer" : undefined}
          tabIndex={-1}
          target={external ? "_blank" : undefined}
        >
          <Photo badge={badge} picture={picture} />
        </a>
      ) : (
        <div aria-hidden="true">
          <Photo badge={badge} picture={picture} />
        </div>
      )}
      <div className="rule-b pt-4 pb-5">
        <h3 className="font-display text-2xl leading-none font-extrabold tracking-tight uppercase">
          <span className="sr-only">{badge}: </span>
          {href && external ? (
            <ExternalLink className="no-underline" href={href}>
              {name}
            </ExternalLink>
          ) : null}
          {href && !external ? (
            <a className="no-underline" href={href}>
              {name}
            </a>
          ) : null}
          {href ? null : name}
        </h3>
        <p className="mt-2 mb-4">{summary}</p>
        {children}
      </div>
    </article>
  );
};

export const Wall = () => (
  <div className="px-gutter pb-12">
    {PRODUCTS.map((p) => (
      <Pin
        badge={p.number}
        id={p.id}
        key={p.id}
        name={p.name}
        picture={p.picture}
        href={`/${p.id}/`}
        summary={p.summary}
      >
        <InstallCommand command={p.install} />
        <div className="label mt-3">
          {p.kind} · {p.version} · {p.license}
          {p.links.map((l) => (
            <span key={l.href}>
              {" · "}
              <ExternalLink href={l.href}>{l.label}</ExternalLink>
            </span>
          ))}
        </div>
      </Pin>
    ))}
    {PENDING.map((p) => (
      <Pin
        badge="Pending"
        id={p.id}
        key={p.id}
        name={p.name}
        picture={p.picture}
        href={p.docs ?? p.source}
        summary={p.summary}
      >
        <div className="label">
          {p.kind}
          {p.docs ? (
            <>
              {" · "}
              <ExternalLink href={p.docs}>docs</ExternalLink>
            </>
          ) : null}
          {p.source ? (
            <>
              {" · "}
              <ExternalLink href={p.source}>source</ExternalLink>
            </>
          ) : null}
        </div>
      </Pin>
    ))}
  </div>
);
