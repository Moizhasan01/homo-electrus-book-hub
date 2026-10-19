import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Placeholder } from "@/components/site/Layout";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support the Work — Rabih Ballout" },
      { name: "description", content: "Support Rabih Ballout's writing and painting with a donation." },
      { property: "og:title", content: "Support Rabih Ballout's Work" },
      { property: "og:description", content: "Help new writing and art come into the world." },
    ],
  }),
  component: Donate,
});

const DONATION_URL = "#"; // [Stripe or PayPal donation link]
const AMOUNTS = [5, 10, 25, 50];

function Donate() {
  const [amount, setAmount] = useState<number | "custom">(25);
  return (
    <>
      <PageHeader eyebrow="Donation" title="Support the Work" />
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="text-xl text-parchment/85"><Placeholder>[A short message in Rabih's voice about why support matters.]</Placeholder></p>
        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5" role="radiogroup" aria-label="Donation amount">
          {AMOUNTS.map((a) => (
            <button key={a} role="radio" aria-checked={amount === a} onClick={() => setAmount(a)} className={amount === a ? "btn-gold !px-0" : "btn-outline-gold !px-0"}>${a}</button>
          ))}
          <button role="radio" aria-checked={amount === "custom"} onClick={() => setAmount("custom")} className={amount === "custom" ? "btn-gold !px-0" : "btn-outline-gold !px-0"}>Custom</button>
        </div>
        <a href={DONATION_URL} className="btn-gold mt-8 w-full">Donate {amount === "custom" ? "" : `$${amount}`}</a>
        <p className="mt-3 font-sans text-xs text-muted-foreground">Secure payment link coming soon.</p>
        <div className="gold-rule my-12" />
        <p className="text-lg text-parchment/80">Donations help fund new writing, paintings, and reader events. <Placeholder>[How donations are used]</Placeholder></p>
        <p className="mt-6 font-display text-gold-bright">Thank you. Truly.</p>
      </section>
    </>
  );
}
