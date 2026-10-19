import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Placeholder, Reveal } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rabih Ballout — Author of Homo Electrus" },
      { name: "description", content: "The story of author and painter Rabih Ballout, and why he wrote Homo Electrus." },
      { property: "og:title", content: "About Rabih Ballout" },
      { property: "og:description", content: "The author, the painter, and the story behind Homo Electrus." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="The Author & the Book" />
      <section className="section-light">
        <Reveal className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1fr_1.5fr]">
          <div className="mx-auto w-64 self-start border border-sepia p-2 sm:w-72">
            <div className="flex aspect-[4/5] items-center justify-center bg-sepia/15 font-sans text-sm text-sepia">[Author photo]</div>
          </div>
          <div className="space-y-6 text-xl">
            <h2 className="text-3xl text-ink md:text-4xl">Rabih Ballout</h2>
            <div className="gold-rule w-32" />
            <p><Placeholder>[Insert Rabih Ballout's full bio here.]</Placeholder></p>
            <h3 className="pt-6 text-2xl text-ink">Why I Wrote This Book</h3>
            <p><Placeholder>[Insert "Why I wrote this book" text here.]</Placeholder></p>
            <h3 className="pt-6 text-2xl text-ink">The Art</h3>
            <p>Rabih is also a painter. The cover of Homo Electrus is one of his works. <Link to="/gallery" className="text-sepia underline underline-offset-4">Visit the paintings gallery →</Link></p>
            <p className="border-t border-sepia/30 pt-6 text-base text-sepia">Homo Electrus is published by Parker Publishers. <Placeholder>[Publisher note]</Placeholder></p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
