import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ExternalLink, LINK } from "@/components/external-link";
import { InstallCommand } from "@/components/install-command";
import { Mark } from "@/components/mark";
import { PalettePicker } from "@/components/palette-picker";
import { PRODUCTS } from "@/lib/catalogue";
import { routeHead } from "@/lib/share";

const ProductPage = () => {
  const p = Route.useLoaderData();
  return (
    <>
      <div className="px-gutter font-display flex flex-col gap-8 pt-8 pb-20 text-sm leading-relaxed md:flex-row-reverse md:justify-between">
        <nav aria-label="Catalogue" className="md:text-right">
          <ul className="m-0 list-none p-0">
            {PRODUCTS.map((other) => (
              <li key={other.id}>
                {other.id === p.id ? (
                  <span aria-current="page">{other.name}</span>
                ) : (
                  <Link
                    className={LINK}
                    params={{ product: other.id }}
                    to="/$product"
                  >
                    {other.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a className={LINK} href="/writing/">
                Writing
              </a>
            </li>
          </ul>
        </nav>
        <main className="max-w-lg">
          <p className="label m-0">
            {p.number} · {p.kind}
          </p>
          <h1 className="mt-2 mb-0 text-base font-bold">{p.name}</h1>
          <p className="mt-2 mb-4">{p.summary}</p>
          <InstallCommand command={p.install} />
          <ul className="mt-4 list-disc pl-5">
            <li>{p.version}</li>
            <li>{p.license}</li>
            {p.links.map((l) => (
              <li className="capitalize" key={l.href}>
                <ExternalLink href={l.href}>{l.label}</ExternalLink>
              </li>
            ))}
            {p.llms ? (
              <li>
                <ExternalLink href={p.llms}>llms.txt</ExternalLink>
              </li>
            ) : null}
            {p.graph ? (
              <li>
                <ExternalLink href={p.graph}>graph.json</ExternalLink>
              </li>
            ) : null}
          </ul>
        </main>
      </div>
      <footer>
        <div className="left-gutter fixed bottom-4">
          <PalettePicker />
        </div>
        <Link aria-label="Home" className="right-gutter fixed bottom-4" to="/">
          <Mark className="block size-8" />
        </Link>
      </footer>
    </>
  );
};

export const Route = createFileRoute("/$product")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.product);
    if (!product) {
      throw notFound();
    }
    return product;
  },
  head: ({ loaderData }) =>
    loaderData
      ? routeHead({
          title: loaderData.name,
          description: loaderData.summary,
          path: `/${loaderData.id}`,
        })
      : {},
  component: ProductPage,
});
