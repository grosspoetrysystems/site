import { PENDING, PRODUCTS } from "@/lib/catalogue";

const ENTRIES = [
  ...PRODUCTS,
  ...PENDING.map((p) => ({ ...p, number: "Pending" })),
];

const SECTIONS = ["Catalogue", "About", "Contact"] as const;

/** Section and product links, shared by the desktop rail and the mobile drawer. */
export const SiteIndex = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    <nav aria-label="Sections" className="px-gutter pb-6">
      {SECTIONS.map((label) => (
        <a
          className="font-display hover:bg-foreground hover:text-background block text-2xl leading-tight font-extrabold no-underline"
          href={`#${label.toLowerCase()}`}
          key={label}
          onClick={onNavigate}
        >
          {label}
        </a>
      ))}
    </nav>
    <ol
      aria-label="Catalogue"
      className="rule-t m-0 min-h-0 flex-1 list-none overflow-y-auto p-0"
    >
      {ENTRIES.map((p) => (
        <li className="border-foreground/15 border-b" key={p.id}>
          <a
            className="px-gutter hover:bg-foreground/10 block py-3 no-underline"
            href={`#${p.id}`}
            onClick={onNavigate}
          >
            <span className="block font-mono text-xs">{p.number}</span>
            <span className="tracking-label mt-1 block font-mono text-xs uppercase opacity-90">
              {p.kind}
            </span>
            <span className="font-display block leading-tight font-bold">
              {p.name}
            </span>
          </a>
        </li>
      ))}
    </ol>
  </>
);
