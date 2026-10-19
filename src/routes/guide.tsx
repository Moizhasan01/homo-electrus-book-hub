import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/site/Layout";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "User Guide — How to Read Homo Electrus" },
      { name: "description", content: "How the book is structured, how to get the most from it, reflection prompts, and how to use this site." },
      { property: "og:title", content: "How to Read Homo Electrus" },
      { property: "og:description", content: "A reader's guide to the book and the site." },
    ],
  }),
  component: Guide,
});

const STEPS = [
  ["How the book is structured", "[Placeholder] Describe the parts and chapters of the book."],
  ["Getting the most from it", "[Placeholder] Read slowly. Pause at the end of each chapter. Keep a notebook."],
  ["Reflection prompts", "[Placeholder] What power do you hold that your ancestors did not? What would wise use of it look like?"],
  ["Using this site", "Browse the paintings gallery, join reader discussions in the forum, read new essays on the blog, and subscribe for letters from Rabih."],
];

function Guide() {
  return (
    <>
      <PageHeader eyebrow="User Guide" title="How to Read This Book" />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <ol className="space-y-12">
          {STEPS.map(([t, d], i) => (
            <Reveal key={i}>
              <li className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-display text-5xl text-gold-gradient">{String(i + 1).padStart(2, "0")}</span>
                <div className="border-l border-border pl-6">
                  <h2 className="text-2xl text-gold-bright">{t}</h2>
                  <p className="mt-3 text-lg text-parchment/85">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
