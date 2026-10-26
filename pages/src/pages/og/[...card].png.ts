import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import satori from "satori";

import { GRID_PATHS } from "../../../../src/components/mark-grid";
import { PRODUCTS } from "../../../../src/lib/catalogue";
import { isoDate, publishedPosts } from "../../lib/posts";

const GROUND = "#2634c9";
const INK = "#efe7d6";

interface Card {
  label?: string;
  title: string;
  footer: string;
}

export const getStaticPaths = async () => {
  const posts = await publishedPosts();
  const cards: { card: string; props: Card }[] = [
    {
      card: "index",
      props: {
        title: "Gross Poetry Systems",
        footer: "Control surfaces for uncertain machines.",
      },
    },
    {
      card: "writing",
      props: { title: "Writing", footer: "Gross Poetry Systems" },
    },
    ...PRODUCTS.map((p) => ({
      card: p.id,
      props: {
        label: `${p.number} · ${p.kind}`,
        title: p.name,
        footer: "Gross Poetry Systems",
      },
    })),
    ...posts.map((post) => ({
      card: `writing/${post.id}`,
      props: {
        label: isoDate(post.data.date),
        title: post.data.title,
        footer: "Gross Poetry Systems",
      },
    })),
  ];
  return cards.map(({ card, props }) => ({ params: { card }, props }));
};

const require = createRequire(import.meta.url);
const font = (file: string) => readFile(require.resolve(`@fontsource/${file}`));

const mark = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><clipPath id="c"><rect x="4" y="4" width="112" height="112"/></clipPath></defs><rect x="4" y="4" width="112" height="112" fill="${GROUND}"/><g clip-path="url(#c)"><path d="${GRID_PATHS.join(" ")}" fill="none" stroke="${INK}" stroke-linecap="round" stroke-width="2.6"/><g fill="${GROUND}" stroke="${GROUND}" stroke-linejoin="round" stroke-width="6.24"><circle cx="30" cy="60" r="13"/><rect x="47" y="47" width="26" height="26"/><path d="M 90,46 L 104,73 L 76,73 Z"/></g><line x1="30" y1="60" x2="90" y2="60" stroke="${INK}" stroke-linecap="round" stroke-width="2.99"/><g fill="${INK}"><circle cx="30" cy="60" r="13"/><rect x="47" y="47" width="26" height="26"/><path d="M 90,46 L 104,73 L 76,73 Z"/></g></g><rect x="4" y="4" width="112" height="112" fill="none" stroke="${INK}" stroke-width="2.6"/></svg>`
).toString("base64")}`;

const div = (style: Record<string, unknown>, children: unknown) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { label, title, footer } = props as Card;
  const titleSize = title.length > 28 ? 72 : 104;
  const svg = await satori(
    div(
      {
        width: 1056,
        height: 502,
        paddingTop: 64,
        paddingRight: 72,
        paddingBottom: 64,
        paddingLeft: 72,
        flexDirection: "column",
        justifyContent: "space-between",
        background: GROUND,
        color: INK,
        fontFamily: "Archivo",
      },
      [
        div(
          {
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 48,
          },
          [
            div({ flexDirection: "column", gap: 20, flex: 1 }, [
              label
                ? div(
                    {
                      fontFamily: "Courier Prime",
                      fontSize: 24,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                    },
                    label
                  )
                : null,
              div(
                {
                  fontWeight: 900,
                  fontSize: titleSize,
                  lineHeight: 0.95,
                  letterSpacing: -2,
                  textTransform: "uppercase",
                },
                title
              ),
            ]),
            {
              type: "img",
              props: {
                src: mark,
                width: 200,
                height: 200,
                style: { flexShrink: 0 },
              },
            },
          ]
        ),
        div(
          {
            borderTop: `3px solid ${INK}`,
            paddingTop: 28,
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 34,
          },
          [
            div({}, footer),
            div(
              {
                fontFamily: "Courier Prime",
                fontSize: 22,
                letterSpacing: 3,
                textTransform: "uppercase",
              },
              "grosspoetry.systems"
            ),
          ]
        ),
      ]
    ) as Parameters<typeof satori>[0],
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Archivo",
          data: await font("archivo/files/archivo-latin-400-normal.woff"),
          weight: 400,
        },
        {
          name: "Archivo",
          data: await font("archivo/files/archivo-latin-900-normal.woff"),
          weight: 900,
        },
        {
          name: "Courier Prime",
          data: await font(
            "courier-prime/files/courier-prime-latin-400-normal.woff"
          ),
          weight: 400,
        },
      ],
    }
  );
  return new Response(new Uint8Array(new Resvg(svg).render().asPng()), {
    headers: { "Content-Type": "image/png" },
  });
};
