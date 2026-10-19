import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/site/Layout";
import { SubscribeForm } from "@/components/site/SubscribeForm";

export const Route = createFileRoute("/forum")({
  head: () => ({
    meta: [
      { title: "Reader Forum — Homo Electrus" },
      { name: "description", content: "A community space for readers of Homo Electrus to discuss chapters, art, and questions for the author." },
      { property: "og:title", content: "Homo Electrus Reader Forum" },
      { property: "og:description", content: "Discuss the book with other readers." },
    ],
  }),
  component: Forum,
});

const CATEGORIES = [
  ["General Discussion", "Big ideas, first impressions, and everything in between."],
  ["Chapter Discussions", "Go deep, one chapter at a time."],
  ["Art and Paintings", "Talk about Rabih's paintings and the cover art."],
  ["Questions for the Author", "Ask Rabih directly."],
];

function Forum() {
  return (
    <>
      <PageHeader eyebrow="Community" title="Reader Forum" intro="A place to think out loud, together." />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {CATEGORIES.map(([t, d]) => (
            <div key={t} className="border border-border bg-card p-7">
              <MessageSquare className="h-6 w-6 text-gold" strokeWidth={1.3} aria-hidden />
              <h2 className="mt-4 text-xl text-gold-bright">{t}</h2>
              <p className="mt-2 text-parchment/80">{d}</p>
              <p className="mt-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">0 threads</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-xl border border-gold/40 p-8 text-center">
          <p className="font-display text-xl text-gold-bright">The forum doors open soon.</p>
          <p className="mt-2 text-parchment/80">Leave your email and you'll be the first invited in.</p>
          <div className="mt-6"><SubscribeForm source="forum" compact cta="Notify Me" /></div>
        </div>
      </section>
    </>
  );
}
