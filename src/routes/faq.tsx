import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Homo Electrus" },
      { name: "description", content: "Answers about Homo Electrus, the author, formats, ordering, and the free story." },
      { property: "og:title", content: "Homo Electrus FAQ" },
      { property: "og:description", content: "Questions about the book, the author, and ordering." },
    ],
  }),
  component: Faq,
});

const FAQS = [
  ["What is Homo Electrus about?", "[Editable answer] A book about human evolution, consciousness, and the responsibility that comes with technological power."],
  ["Where can I buy the book?", "[Editable answer] Homo Electrus is available on Amazon. See the Buy the Book page for other retailers."],
  ["Is there an ebook or audiobook?", "[Editable answer about formats]"],
  ["How do I get the free story?", "[Editable answer] Enter your name and email on the home page and the download link appears right away."],
  ["Can I invite the author to speak or be interviewed?", "[Editable answer] Yes. Please write through the Contact page."],
  ["Who painted the cover?", "[Editable answer] Rabih Ballout himself. See the Paintings gallery."],
];

function Faq() {
  return (
    <>
      <PageHeader eyebrow="Questions" title="FAQ" />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Accordion type="single" collapsible>
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={i} value={`q${i}`} className="border-border">
              <AccordionTrigger className="font-display text-lg tracking-wide text-gold-bright hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-lg text-parchment/85">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
