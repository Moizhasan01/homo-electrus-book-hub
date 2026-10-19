import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageHeader } from "@/components/site/Layout";
import { PAINTINGS } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Paintings Gallery — Rabih Ballout" },
      { name: "description", content: "Original paintings by Rabih Ballout, including the artwork on the cover of Homo Electrus." },
      { property: "og:title", content: "Paintings by Rabih Ballout" },
      { property: "og:description", content: "Original art by the author of Homo Electrus." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const p = active !== null ? PAINTINGS[active] : null;
  return (
    <>
      <PageHeader eyebrow="The Art" title="Paintings" intro="Sea, sky, and the human mind. The cover of Homo Electrus began here." />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {PAINTINGS.map((pt, i) => (
            <figure key={i} className="mb-6 break-inside-avoid">
              <button onClick={() => setActive(i)} className="group block w-full overflow-hidden border border-border" aria-label={`View ${pt.title}`}>
                <img src={pt.src} alt={pt.title} width={pt.w} height={pt.h} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
              </button>
              <figcaption className="mt-3">
                <p className="font-display tracking-wider text-gold-bright">{pt.title}</p>
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">{pt.medium} · {pt.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Dialog open={p !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-gold/40 bg-ink">
          {p && (
            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
              <img src={p.src} alt={p.title} className="max-h-[75vh] w-full object-contain" />
              <div>
                <DialogTitle className="font-display text-2xl text-gold-bright">{p.title}</DialogTitle>
                <p className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">{p.medium} · {p.year}</p>
                <div className="gold-rule my-4" />
                <DialogDescription className="text-lg text-parchment/85">{p.story}</DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
