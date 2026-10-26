import type { CSSProperties, ReactNode } from "react";

import { ExternalLink } from "@/components/external-link";
import { InstallCommand } from "@/components/install-command";
import type { Picture } from "@/lib/catalogue";
import { PENDING, PRODUCTS } from "@/lib/catalogue";

const Source = ({
  href,
  arrow,
  children,
}: {
  href?: string;
  arrow?: boolean;
  children: ReactNode;
}) =>
  href ? (
    <ExternalLink arrow={arrow} className="no-underline" href={href}>
      {children}
    </ExternalLink>
  ) : (
    children
  );

const Pin = ({
  id,
  badge,
  name,
  picture,
  summary,
  source,
  children,
}: {
  id: string;
  badge: string;
  name: string;
  picture: Picture;
  summary: string;
  source?: string;
  children: ReactNode;
}) => (
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
    <Source arrow={false} href={source}>
      <div className="relative">
        <img
          alt={picture.title}
          className="wall-photo block h-auto w-full"
          decoding="async"
          height={picture.height}
          loading="lazy"
          src={`/wall/${picture.slug}.webp`}
          width={picture.width}
        />
        <span className="bg-foreground text-background absolute right-0 bottom-0 px-2.5 py-1.5 font-mono text-xs">
          {badge}
        </span>
      </div>
    </Source>
    <div className="rule-b pt-4 pb-5">
      <h3 className="font-display text-2xl leading-none font-extrabold tracking-tight uppercase">
        <Source href={source}>{name}</Source>
      </h3>
      <p className="mt-2 mb-4">{summary}</p>
      {children}
    </div>
  </article>
);

export const Wall = () => (
  <div className="px-gutter pb-12">
    {PRODUCTS.map((p) => (
      <Pin
        badge={p.number}
        id={p.id}
        key={p.id}
        name={p.name}
        picture={p.picture}
        source={p.links.find((l) => l.label === "source")?.href}
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
        source={p.source}
        summary={p.summary}
      >
        <div className="label">
          {p.kind}
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
