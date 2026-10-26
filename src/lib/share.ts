// Imported by both the main site and writing/, so it must stay free of path aliases.

export const SITE = "https://grosspoetry.systems";
export const NAME = "Gross Poetry Systems";
export const TAGLINE =
  "Control surfaces for uncertain machines: rigorous engineering and design for the probabilistic magic of intelligent systems.";

const IMAGE = {
  url: `${SITE}/og.png`,
  width: 1200,
  height: 630,
  alt: `${NAME}: the name beside the mark, a circle, square and triangle on a warped grid, over the line “Control surfaces for uncertain machines.”`,
};

type Meta =
  | { name: string; content: string }
  | { property: string; content: string };

/** Every path's title, description, canonical URL and social share card. */
export const shareMeta = ({
  title,
  description = TAGLINE,
  path,
  published,
}: {
  title?: string;
  description?: string;
  path: string;
  published?: Date;
}) => {
  const fullTitle = title ? `${title} · ${NAME}` : NAME;
  const url = new URL(path, SITE).href;
  const meta: Meta[] = [
    { name: "description", content: description },
    { property: "og:site_name", content: NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: published ? "article" : "website" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: IMAGE.url },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: String(IMAGE.width) },
    { property: "og:image:height", content: String(IMAGE.height) },
    { property: "og:image:alt", content: IMAGE.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: IMAGE.url },
    { name: "twitter:image:alt", content: IMAGE.alt },
  ];
  if (published) {
    meta.push(
      { property: "article:published_time", content: published.toISOString() },
      { property: "article:publisher", content: SITE }
    );
  }
  return { title: fullTitle, url, meta };
};

/** `shareMeta` in the shape TanStack route `head` expects. */
export const routeHead = (page: Parameters<typeof shareMeta>[0]) => {
  const { title, url, meta } = shareMeta(page);
  return {
    meta: [{ title }, ...meta],
    links: [{ rel: "canonical", href: url }],
  };
};
