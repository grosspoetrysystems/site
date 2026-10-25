import { PRODUCTS } from "@/lib/catalogue";

const SECTIONS = ["Catalogue", "About", "Contact"] as const;

/** Section and product links, shared by the desktop rail and the mobile drawer. */
export const SiteIndex = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    <nav aria-label="Sections">
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
    <ol aria-label="Catalogue" className="rule-t mt-6 list-none p-0 pt-4">
      {PRODUCTS.map((p) => (
        <li key={p.id}>
          <a
            className="font-display hover:bg-foreground hover:text-background block py-1.75 font-semibold no-underline"
            href={`#${p.id}`}
            onClick={onNavigate}
          >
            <span className="label">{p.number}</span> {p.name}
          </a>
        </li>
      ))}
    </ol>
  </>
);
