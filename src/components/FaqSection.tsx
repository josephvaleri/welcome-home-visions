import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqJsonLd } from "@/lib/seo";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  title?: string;
}

export function FaqSection({ items, title = "Frequently asked questions" }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <h2 className="font-display text-3xl mb-10">{title}</h2>
      <Accordion type="single" collapsible className="max-w-2xl">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-display text-lg text-left leading-snug hover:no-underline hover:text-accent">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] text-foreground/80 font-light leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
