import type { CSSProperties, ReactNode } from "react";

import { InstallCommand } from "@/components/install-command";
import { Mark } from "@/components/mark";
import type { Picture } from "@/lib/catalogue";
import { PENDING, PRODUCTS } from "@/lib/catalogue";

const LINK =
  "border-current border-b no-underline hover:bg-foreground hover:text-background";

/** Wraps content in a link to the project's repository when it has a public one. */
const Source = ({ href, children }: { href?: string; children: ReactNode }) =>
  href ? (
    <a className="no-underline" href={href}>
      {children}
    </a>
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
  pending = false,
  children,
}: {
  id: string;
  badge: string;
  name: string;
  picture: Picture;
  summary: string;
  source?: string;
  pending?: boolean;
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
    <Source href={source}>
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
    <div className="rule-b flex gap-4 pt-4 pb-5">
      <Mark
        className={
          pending ? "size-12 flex-none opacity-45" : "size-12 flex-none"
        }
        label={pending ? undefined : `${name} catalogue mark`}
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-2xl leading-none font-extrabold tracking-tight uppercase">
          <Source href={source}>{name}</Source>
        </h3>
        <p className="mt-2 mb-4">{summary}</p>
        {children}
      </div>
    </div>
  </article>
);

/** The catalogue as a wall: one photo per project, monochrome until hovered. */
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
              <a className={LINK} href={l.href}>
                {l.label}
              </a>
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
        pending
        picture={p.picture}
        source={p.source}
        summary={p.summary}
      >
        <div className="label">
          {p.kind}
          {p.source ? (
            <>
              {" · "}
              <a className={LINK} href={p.source}>
                source
              </a>
            </>
          ) : null}
        </div>
      </Pin>
    ))}
  </div>
);
