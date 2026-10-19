import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { FREE_STORY_URL } from "@/lib/site";

const schema = z.object({
  first_name: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

export function SubscribeForm({ source, withName = false, cta = "Subscribe", compact = false }: {
  source: string; withName?: boolean; cta?: string; compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "dupe">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ first_name: withName ? name || undefined : undefined, email });
    if (!parsed.success) { setError(parsed.error.issues[0].message); return; }
    setStatus("loading");
    const { error } = await supabase.from("subscribers").insert({
      email: parsed.data.email.toLowerCase(),
      first_name: parsed.data.first_name ?? null,
      source,
    });
    if (error) {
      if (error.code === "23505") { setStatus("dupe"); return; }
      setStatus("idle"); setError("Something went wrong. Please try again."); return;
    }
    setStatus("done");
  }

  if (status === "done" || status === "dupe") {
    return (
      <div role="status" className="rounded border border-gold/40 bg-ink/40 p-5 text-parchment">
        <p className="font-display text-gold-bright">
          {status === "done" ? "Thank you. Welcome aboard." : "You're already on the list."}
        </p>
        <p className="mt-1 text-base text-muted-foreground">
          Your free story is ready:{" "}
          <a href={FREE_STORY_URL} className="text-gold-bright underline underline-offset-4">
            Download “The Story Behind Homo Electrus”
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "flex flex-col gap-2 sm:flex-row" : "flex flex-col gap-3"}>
      {withName && (
        <label className="block">
          <span className="sr-only">First name</span>
          <input className="field" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} autoComplete="given-name" />
        </label>
      )}
      <label className="block flex-1">
        <span className="sr-only">Email</span>
        <input className="field" type="email" required placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} autoComplete="email" />
      </label>
      <button type="submit" className="btn-gold" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : cta}
      </button>
      {error && <p role="alert" className="font-sans text-sm text-destructive">{error}</p>}
    </form>
  );
}
