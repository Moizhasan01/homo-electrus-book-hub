import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, ChevronLeft, ChevronRight, Cpu, Dna, Scale } from "lucide-react";
import { AMAZON_URL, COVER_URL, FREE_STORY, PAINTINGS, TAGLINE } from "@/lib/site";
import { Placeholder, Reveal } from "@/components/site/Layout";
import { SubscribeForm } from "@/components/site/SubscribeForm";
import coverArt from "@/assets/cover-art.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Homo Electrus by Rabih Ballout — The Next Evolution Is a Choice" },
      { name: "description", content: "A thought-provoking book on human evolution, consciousness, and the responsibility that comes with technological power." },
      { property: "og:title", content: "Homo Electrus by Rabih Ballout" },
      { property: "og:description", content: "The Power to Evolve. The Wisdom to Choose." },
    ],
  }),
  component: Home,
});

const THEMES = [
  { icon: Dna, label: "Evolution" },
  { icon: Brain, label: "Consciousness" },
  { icon: Cpu, label: "Technology" },
  { icon: Scale, label: "Choice" },
];

const PRAISE = [
  { quote: "[Reader quote]", name: "[Name]" },
  { quote: "[Reader quote]", name: "[Name]" },
  { quote: "[Reader quote]", name: "[Name]" },
];

function Home() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${coverArt.url})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
        <div className="vignette absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div className="text-center md:text-left">
            <p className="eyebrow">A book by Rabih Ballout</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-gold-gradient sm:text-7xl lg:text-8xl">HOMO<br />ELECTRUS</h1>
            <div className="gold-rule mx-auto mt-7 w-48 md:mx-0" />
            <p className="mt-6 font-display text-xl text-parchment sm:text-2xl">{TAGLINE}</p>
            <p className="mt-3 font-display tracking-[0.3em] text-gold">RABIH BALLOUT</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">Buy on Amazon</a>
              <a href="#free-story" className="btn-outline-gold">Get the Free Story</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={COVER_URL} alt="Homo Electrus book cover by Rabih Ballout" width={914} height={1386} className="animate-float shadow-book w-64 rounded-sm sm:w-80 lg:w-96" />
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="section-light">
        <Reveal className="mx-auto max-w-4xl px-5 py-24 text-center">
          <p className="eyebrow !text-sepia">About the Book</p>
          <h2 className="mt-4 text-3xl text-ink md:text-5xl">The Next Evolution Is a Choice.</h2>
          <div className="gold-rule mx-auto mt-6 w-32" />
          <p className="mt-8 text-xl leading-relaxed">
            <Placeholder>[Insert the official back-cover description here.]</Placeholder> We have learned to bend light, split atoms, and rewrite the code of life. What we have not yet learned is how to choose wisely. Homo Electrus asks what kind of species we become when the power to evolve is in our own hands.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {THEMES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 border border-sepia/30 px-4 py-6">
                <Icon className="h-7 w-7 text-sepia" strokeWidth={1.2} aria-hidden />
                <span className="font-display tracking-widest">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Lead magnet */}
      <section id="free-story" className="relative scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--sepia),transparent_60%)] opacity-40" aria-hidden />
        <Reveal className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="shadow-book relative flex aspect-[3/4] w-64 flex-col justify-between border border-gold/50 bg-ink p-8 sm:w-72">
              <div className="absolute inset-2 border border-gold/20" aria-hidden />
              <p className="eyebrow relative">A free story</p>
              <div className="relative">
                <p className="font-display text-2xl leading-snug text-gold-gradient">{FREE_STORY.title}</p>
                <div className="gold-rule mt-4" />
              </div>
              <p className="relative font-display tracking-[0.3em] text-parchment/80">RABIH BALLOUT</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Free download</p>
            <h2 className="mt-4 text-3xl text-gold-bright md:text-4xl">{FREE_STORY.title}</h2>
            <p className="mt-5 text-xl text-parchment/85">{FREE_STORY.pitch}</p>
            <div className="mt-8"><SubscribeForm source="lead-magnet" withName cta="Send Me the Free Story" /></div>
            <p className="mt-3 font-sans text-xs text-muted-foreground">By subscribing you agree to receive occasional emails from Rabih Ballout. Unsubscribe anytime.</p>
          </div>
        </Reveal>
      </section>

      {/* Paintings */}
      <section className="border-y border-border bg-ink">
        <Reveal className="mx-auto max-w-7xl px-5 py-24">
          <div className="text-center">
            <p className="eyebrow">The Art</p>
            <h2 className="mt-4 text-3xl text-gold-bright md:text-5xl">Paintings by the Author</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-parchment/80">The cover of Homo Electrus is one of Rabih's own paintings. The book and the brush ask the same question.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {PAINTINGS.slice(0, 5).map((p, i) => (
              <Link to="/gallery" key={i} className="group overflow-hidden border border-border">
                <img src={p.src} alt={p.title} loading="lazy" className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/gallery" className="btn-outline-gold">View the Full Gallery</Link></div>
        </Reveal>
      </section>

      {/* Author */}
      <section className="section-light">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-64 border border-sepia p-2 sm:w-72">
            <div className="flex aspect-[4/5] items-center justify-center bg-sepia/15 font-sans text-sm text-sepia">[Author photo]</div>
          </div>
          <div>
            <p className="eyebrow !text-sepia">Meet the Author</p>
            <h2 className="mt-4 text-3xl text-ink md:text-5xl">Rabih Ballout</h2>
            <div className="gold-rule mt-6 w-32" />
            <p className="mt-6 text-xl"><Placeholder>[Insert Rabih Ballout's bio here.]</Placeholder> Writer, painter, and lifelong student of the human story.</p>
            <Link to="/about" className="mt-8 inline-block font-sans text-sm font-bold uppercase tracking-[0.2em] text-sepia underline-offset-8 hover:underline">Read the full story →</Link>
          </div>
        </Reveal>
      </section>

      {/* Praise */}
      <section>
        <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="eyebrow">Reader Praise</p>
          <blockquote className="mt-8 min-h-32">
            <p className="font-serif text-3xl italic text-parchment">“{PRAISE[slide]?.quote}”</p>
            <footer className="mt-5 font-display tracking-widest text-gold">— {PRAISE[slide]?.name}</footer>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button aria-label="Previous quote" onClick={() => setSlide((slide + PRAISE.length - 1) % PRAISE.length)} className="text-gold hover:text-gold-bright"><ChevronLeft /></button>
            <div className="flex gap-2">{PRAISE.map((_, i) => <span key={i} className={`h-1.5 w-6 ${i === slide ? "bg-gold" : "bg-gold/25"}`} />)}</div>
            <button aria-label="Next quote" onClick={() => setSlide((slide + 1) % PRAISE.length)} className="text-gold hover:text-gold-bright"><ChevronRight /></button>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border bg-ink">
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center">
          <div className="gold-rule mx-auto w-48" />
          <p className="mt-10 font-display text-3xl leading-snug text-gold-gradient md:text-5xl">The Power to Evolve.<br />The Wisdom to Choose.</p>
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-12">Buy on Amazon</a>
        </div>
      </section>
    </>
  );
}
