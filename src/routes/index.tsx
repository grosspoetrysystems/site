import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { ExternalLink } from "@/components/external-link";
import { FloatingMark } from "@/components/floating-mark";
import { Mark } from "@/components/mark";
import { MobileIndex } from "@/components/mobile-index";
import { PalettePicker } from "@/components/palette-picker";
import { SiteIndex } from "@/components/site-index";
import { Wall } from "@/components/wall";
import { routeHead } from "@/lib/share";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="rule-t overflow-x-clip" id={id}>
    <h2 className="font-display px-gutter pt-12 pb-6 text-2xl leading-none font-extrabold tracking-tight uppercase">
      {title}
    </h2>
    {children}
  </section>
);

const Home = () => (
  <>
    <MobileIndex />
    <FloatingMark />
    <div className="flex flex-col md:flex-row md:items-start">
      <main className="min-w-0 flex-1">
        <header>
          <div className="px-gutter flex items-end justify-between gap-8 pt-8 pb-6">
            <h1
              className="font-display text-masthead leading-masthead tracking-masthead font-black uppercase"
              id="masthead"
            >
              Gross
              <br />
              Poetry
              <br />
              Systems
            </h1>
            <Mark className="hidden size-45 flex-none xl:block" />
          </div>
          <hr className="rule-t m-0 border-0" />
          <p className="text-lede px-gutter max-w-prose py-8 leading-snug">
            Control surfaces for uncertain machines. A small catalogue of
            open-source tools for working with agents. Tools building tools,
            each one built and maintained with the others.
          </p>
        </header>

        <Section id="catalogue" title="Catalogue">
          <Wall />
        </Section>

        <Section id="about" title="About">
          <p className="text-notes px-gutter m-0 max-w-prose pb-12">
            Rigorous engineering and design for the probabilistic magic of
            intelligent systems.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <a
            className="font-display text-contact tracking-contact hover:bg-foreground hover:text-background mx-gutter mb-12 inline-block font-black no-underline"
            href="mailto:office@grosspoetry.systems"
          >
            Write to us →
          </a>
        </Section>

        <footer className="rule-t px-gutter pt-6 pb-20 font-mono text-xs">
          grosspoetry.systems ·{" "}
          <ExternalLink href="https://github.com/grosspoetrysystems">
            github.com/grosspoetrysystems
          </ExternalLink>{" "}
          · Profoundly unfashionable since 2026
        </footer>
      </main>

      <aside className="rule-l sticky top-0 hidden h-screen w-75 flex-col pt-8 md:flex">
        <SiteIndex />
      </aside>
    </div>
    <div className="left-gutter fixed bottom-5.25 z-50">
      <PalettePicker />
    </div>
  </>
);

export const Route = createFileRoute("/")({
  head: () => routeHead({ path: "/", image: "/og/index.png" }),
  component: Home,
});
