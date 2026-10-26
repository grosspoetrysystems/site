/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { MarkSprite } from "@/components/mark";
import { jsonLd } from "@/lib/agents";
import { PALETTE_STORAGE_KEY, PALETTES } from "@/lib/palette";

import appCss from "@/styles.css?url";

// Prerendered at build, so this is the date the deployed page was last generated.
const BUILT = new Date().toISOString().slice(0, 10);

// Applies a saved palette before first paint so returning visitors don't see a flash of cobalt.
const RESTORE_PALETTE = `try{var p=localStorage.getItem(${JSON.stringify(PALETTE_STORAGE_KEY)});if(${JSON.stringify(PALETTES)}.indexOf(p)>-1)document.documentElement.dataset.palette=p}catch(e){}`;

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <HeadContent />
    </head>
    <body>
      <MarkSprite />
      {children}
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Courier+Prime:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      { children: RESTORE_PALETTE },
      { type: "application/ld+json", children: JSON.stringify(jsonLd(BUILT)) },
    ],
  }),
  component: () => <Outlet />,
  shellComponent: RootDocument,
});
