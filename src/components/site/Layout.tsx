import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { AMAZON_URL, CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";
import { SubscribeForm } from "./SubscribeForm";
import coverArt from "@/assets/cover-art.jpg.asset.json";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-charcoal/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Main">
        <Link to="/" className="font-display text-lg tracking-[0.2em] text-gold-gradient">HOMO ELECTRUS</Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="font-sans text-xs uppercase tracking-[0.2em] text-parchment/80 transition-colors hover:text-gold-bright" activeProps={{ className: "text-gold-bright" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold hidden !py-2.5 !px-4 sm:inline-flex">Buy on Amazon</a>
          <button className="text-gold-bright lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border px-5 pb-6 pt-2 lg:hidden">
          {[...NAV_LINKS, { to: "/gallery", label: "Paintings" }, { to: "/buy", label: "Buy the Book" }, { to: "/contact", label: "Contact" }].map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="block border-b border-border/50 py-3 font-display tracking-widest text-parchment">{l.label}</Link>
            </li>
          ))}
          <li className="pt-4"><a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full">Buy on Amazon</a></li>
        </ul>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${coverArt.url})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="gold-rule relative" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.2em] text-gold-gradient">HOMO ELECTRUS</p>
          <p className="mt-3 text-muted-foreground">The Power to Evolve. The Wisdom to Choose.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block font-sans text-sm text-gold-bright hover:underline">{CONTACT_EMAIL}</a>
          <div className="mt-4 flex gap-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-gold-bright">[Instagram]</a>
            <a href="#" className="hover:text-gold-bright">[Facebook]</a>
            <a href="#" className="hover:text-gold-bright">[X]</a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2 font-sans text-sm">
          {[...NAV_LINKS, { to: "/gallery", label: "Paintings" }, { to: "/buy", label: "Buy the Book" }, { to: "/contact", label: "Contact" }].map((l) => (
            <li key={l.to}><Link to={l.to} className="text-parchment/80 hover:text-gold-bright">{l.label}</Link></li>
          ))}
        </ul>
        <div>
          <p className="eyebrow mb-3">Letters from Rabih</p>
          <SubscribeForm source="footer" cta="Join" />
        </div>
      </div>
      <div className="relative border-t border-border px-5 py-6 text-center font-sans text-xs tracking-wider text-muted-foreground">
        © 2026 Rabih Ballout. All rights reserved. · Published by Parker Publishers
      </div>
    </footer>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${coverArt.url})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} aria-hidden />
      <div className="vignette absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-gold-gradient md:text-6xl">{title}</h1>
        <div className="gold-rule mx-auto mt-6 w-40" />
        {intro && <p className="mx-auto mt-6 max-w-2xl text-xl text-parchment/85">{intro}</p>}
      </div>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="rounded-sm bg-gold/15 px-1 text-gold-bright">{children}</span>;
}
