import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Layout";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Rabih Ballout" },
      { name: "description", content: "Essays by Rabih Ballout on evolution, consciousness, technology, and art." },
      { property: "og:title", content: "Blog — Rabih Ballout" },
      { property: "og:description", content: "New writing from the author of Homo Electrus." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHeader eyebrow="Journal" title="Blog" />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group border border-border bg-card">
            <div className="overflow-hidden"><img src={p.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
            <div className="p-7">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              <h2 className="mt-3 text-2xl text-gold-bright">{p.title}</h2>
              <p className="mt-3 text-parchment/80">{p.excerpt}</p>
              <div className="mt-4 flex gap-2">{p.tags.map((t) => <span key={t} className="border border-gold/40 px-2 py-0.5 font-sans text-xs text-gold">{t}</span>)}</div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
