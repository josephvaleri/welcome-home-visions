import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  const live = testimonials.filter((t) => !t.draft);
  if (live.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
      <span className="text-xs uppercase tracking-[0.3em] text-accent">What clients say</span>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {live.map((t, i) => (
          <blockquote key={i} className="border-t border-border pt-6 flex flex-col">
            <p className="font-display italic text-xl leading-relaxed text-foreground/85 flex-1">
              "{t.quote}"
            </p>
            <footer className="mt-6">
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
