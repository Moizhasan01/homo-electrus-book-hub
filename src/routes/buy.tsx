import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Layout";
import { AMAZON_URL, COVER_URL, TAGLINE } from "@/lib/site";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy Homo Electrus — Rabih Ballout" },
      { name: "description", content: "Buy Homo Electrus by Rabih Ballout in paperback or ebook." },
      { property: "og:title", content: "Buy Homo Electrus" },
      { property: "og:description", content: TAGLINE },
    ],
  }),
  component: Buy,
});

function Buy() {
  return (
    <>
      <PageHeader eyebrow="The Book" title="Buy Homo Electrus" />
      <section className="mx-auto grid max-w-5xl items-center gap-14 px-5 py-20 md:grid-cols-2">
        <img src={COVER_URL} alt="Homo Electrus book cover" width={914} height={1386} className="shadow-book mx-auto w-72" />
        <div>
          <h2 className="text-3xl text-gold-bright">Homo Electrus</h2>
          <p className="mt-2 font-display tracking-[0.25em] text-gold">RABIH BALLOUT</p>
          <dl className="mt-8 space-y-2 font-sans text-sm">
            <div className="flex justify-between border-b border-border py-2"><dt className="text-muted-foreground">Price</dt><dd>[Price]</dd></div>
            <div className="flex justify-between border-b border-border py-2"><dt className="text-muted-foreground">Formats</dt><dd>[Paperback / Ebook]</dd></div>
            <div className="flex justify-between border-b border-border py-2"><dt className="text-muted-foreground">Publisher</dt><dd>Parker Publishers</dd></div>
          </dl>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full">Buy on Amazon</a>
          <p className="eyebrow mt-10">Also available</p>
          <ul className="mt-3 space-y-1 text-parchment/80">
            <li>[Retailer 1]</li><li>[Retailer 2]</li><li>[Retailer 3]</li>
          </ul>
        </div>
      </section>
    </>
  );
}
