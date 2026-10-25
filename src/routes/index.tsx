import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { InstallCommand } from "@/components/install-command";
import { Mark } from "@/components/mark";
import { MobileIndex } from "@/components/mobile-index";
import { PalettePicker } from "@/components/palette-picker";
import { SiteIndex } from "@/components/site-index";
import { PENDING, PRACTICE_NOTES, PRODUCTS } from "@/lib/catalogue";

const LINK =
  "border-current border-b no-underline hover:bg-foreground hover:text-background";
const LISTINGS =
  "grid grid-cols-1 gap-x-10 md:grid-cols-[repeat(auto-fill,minmax(340px,1fr))]";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="rule-t px-4.5 py-14 md:px-7.5" id={id}>
    <h2 className="label mb-7 font-normal">{title}</h2>
    {children}
  </section>
);

const Listing = ({
  id,
  number,
  name,
  summary,
  pending = false,
  children,
}: {
  id?: string;
  number: string;
  name: string;
  summary: string;
  pending?: boolean;
  children?: ReactNode;
}) => (
  <article className="rule-b flex gap-4.5 py-5.5" id={id}>
    <Mark
      className={
        pending
          ? "size-13 flex-none opacity-45 md:size-18"
          : "size-13 flex-none md:size-18"
      }
      label={pending ? undefined : `${name} catalogue mark`}
    />
    <div className="min-w-0 flex-1">
      <span className="label">{number}</span>
      <h3 className="font-display mt-1 text-2xl leading-none font-extrabold tracking-tight uppercase">
        {name}
      </h3>
      <p className="mt-1.5 mb-2.5">{summary}</p>
      {children}
    </div>
  </article>
);

const Home = () => (
  <>
    <MobileIndex />
    <div className="flex flex-col md:flex-row md:items-start">
      <main className="min-w-0 flex-1">
        <header className="px-4.5 pt-8.5 pb-6.5 md:px-7.5">
          <div className="label">GPS · General index · Catalogue no. 0001</div>
          <h1
            className="font-display text-masthead leading-masthead tracking-masthead mt-3.5 font-black uppercase"
            id="masthead"
          >
            Gross
            <br />
            Poetry
            <br />
            Systems
          </h1>
          <hr className="rule-t mt-5.5 border-0" />
          <p className="text-lede mt-5.5 max-w-190 leading-snug">
            Control surfaces for uncertain machines. A small, opinionated
            catalogue of open-source tools for agent-era work. Tools building
            tools: each is its own object, and each is built and maintained with
            the others.
          </p>
        </header>

        <Section id="catalogue" title="01 · The catalogue / in print">
          <div className={LISTINGS}>
            {PRODUCTS.map((p) => (
              <Listing
                id={p.id}
                key={p.id}
                name={p.name}
                number={`${p.number} · ${p.kind}`}
                summary={p.summary}
              >
                <InstallCommand command={p.install} />
                <div className="label mt-2.5">
                  {p.version} · {p.license}
                  {p.links.map((l) => (
                    <span key={l.href}>
                      {" · "}
                      <a className={LINK} href={l.href}>
                        {l.label}
                      </a>
                    </span>
                  ))}
                </div>
              </Listing>
            ))}
          </div>
        </Section>

        <Section id="in-the-works" title="02 · In the works / not yet in print">
          <div className={LISTINGS}>
            {PENDING.map((p) => (
              <Listing
                key={p.name}
                name={p.name}
                number={`Pending · ${p.kind}`}
                pending
                summary={p.summary}
              >
                {p.source ? (
                  <div className="label">
                    <a className={LINK} href={p.source}>
                      source
                    </a>
                  </div>
                ) : null}
              </Listing>
            ))}
          </div>
        </Section>

        <Section id="about" title="§ About / notes on practice">
          <ul className="text-notes m-0 max-w-190 list-disc pl-5">
            {PRACTICE_NOTES.map((n) => (
              <li className="mb-2" key={n}>
                {n}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="§ Contact">
          <a
            className="font-display text-contact tracking-contact hover:bg-foreground hover:text-background font-black no-underline"
            href="mailto:office@grosspoetry.systems"
          >
            Write to us →
          </a>
        </Section>

        <footer className="label rule-t px-4.5 pt-6 pb-20 md:px-7.5">
          grosspoetry.systems ·{" "}
          <a className={LINK} href="https://github.com/grosspoetrysystems">
            github.com/grosspoetrysystems
          </a>{" "}
          · Profoundly unfashionable since 2026
        </footer>
      </main>

      <aside className="rule-l sticky top-0 hidden h-screen w-75 px-5.5 py-6.5 md:block">
        <SiteIndex />
      </aside>
    </div>
    <div className="fixed bottom-4.5 left-5">
      <PalettePicker />
    </div>
  </>
);

export const Route = createFileRoute("/")({ component: Home });
