import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/site/Layout";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rabih Ballout" },
      { name: "description", content: "Get in touch with Rabih Ballout about the book, interviews, speaking, or paintings." },
      { property: "og:title", content: "Contact Rabih Ballout" },
      { property: "og:description", content: "Write to the author of Homo Electrus." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(5000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Invalid input"); return; }
    setState("loading");
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    if (error) { setState("idle"); setError("Something went wrong. Please try again."); return; }
    setState("done");
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Write to Rabih" />
      <section className="mx-auto max-w-xl px-5 py-20">
        <p className="text-center text-lg text-parchment/85">Or email directly: <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-bright underline underline-offset-4">{CONTACT_EMAIL}</a></p>
        {state === "done" ? (
          <p role="status" className="mt-10 border border-gold/40 p-6 text-center font-display text-gold-bright">Thank you. Your message has been received.</p>
        ) : (
          <form onSubmit={submit} noValidate className="mt-10 space-y-4">
            <label className="block"><span className="eyebrow">Name</span><input className="field mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} /></label>
            <label className="block"><span className="eyebrow">Email</span><input type="email" className="field mt-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} /></label>
            <label className="block"><span className="eyebrow">Message</span><textarea rows={6} className="field mt-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={5000} /></label>
            {error && <p role="alert" className="font-sans text-sm text-destructive">{error}</p>}
            <button className="btn-gold w-full" disabled={state === "loading"}>{state === "loading" ? "Sending…" : "Send Message"}</button>
          </form>
        )}
      </section>
    </>
  );
}
