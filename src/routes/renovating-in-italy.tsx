import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Check } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { EmailCapture } from "@/components/EmailCapture";
import { buildMeta } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/renovating-in-italy")({
  head: () => ({
    ...buildMeta({
      title: "Furnishing a Historic Italian Home — Virtual Interior Design | Jill Valeri",
      description:
        "Bought a farmhouse or apartment in Italy? A designer living in Umbria helps you lay out, furnish, and source it for modern life — entirely online, from wherever you are.",
      path: "/renovating-in-italy",
      image: "/images/portfolio/image33.jpg",
    }),
  }),
  component: RenovatingInItaly,
});

const faqItems = [
  {
    q: "Can you design my Italian home if I don't live there yet?",
    a: "Yes — the whole process is virtual. Most clients are abroad during the work. Everything happens over video calls and shared digital plans; you never need to be on site.",
  },
  {
    q: "Do you handle structural changes?",
    a: "I'm not certified to make structural changes, but I'm happy to collaborate with your architect, engineer, or geometra should structural work be recommended — and I'll design around whatever your builder confirms is possible.",
  },
  {
    q: "Can you source furniture in Italy and from my home country?",
    a: "Yes. The curated materials list includes direct purchase links from both Italian suppliers and international retailers, so you can buy wherever makes sense for shipping, duty, and budget.",
  },
  {
    q: "What does it cost?",
    a: "Per-room pricing starts from €750 for living spaces (living room, dining room, bedroom, office) and €1,500 for working spaces (kitchen, bathroom). See the full breakdown on the Services page.",
  },
  {
    q: "Which areas of Italy do you cover?",
    a: "Anywhere in Italy — and worldwide. I'm based in Umbria, which gives me deep knowledge of central Italian homes, trades, and sourcing, but the virtual process works for any property in Italy or abroad.",
  },
];

const included = [
  "2D floor plan",
  "3D rendering",
  "Product inventory with links (Italian and international sources)",
  "Project implementation notes",
  "One set of revisions",
];

const proofSlugs = [
  "umbrian-wine-lounge-laundry-room",
  "adding-character-to-new-construction",
  "historic-ellicott-city-decorators-showhouse",
];
const proofProjects = proofSlugs
  .map((s) => projects.find((p) => p.slug === s))
  .filter(Boolean) as typeof projects;

function RenovatingInItaly() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Renovating in Italy"
        title="You bought the house. Let's make it home."
        image="/images/portfolio/image33.jpg"
      />

      {/* EMPATHY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">The challenge</span>
          <h2 className="font-display text-4xl mt-4 leading-[1.05]">
            Old Italian houses are gorgeous
            <span className="block italic text-accent"> and stubborn.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/85 font-light">
            Thick stone walls, uneven floors, tiny historic windows, a kitchen where a fireplace
            used to be. You're often hundreds of miles away, juggling a <em>geometra</em>, a
            builder who speaks no English, and a Pinterest board that doesn't quite fit a 300-year-old
            room. It's hard to know where the sofa even goes — let alone what to buy.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col gap-8 pt-8">
          {[
            {
              n: "01",
              t: "Someone who lives here",
              d: "I understand Italian homes from the inside — the proportions, the trades, local sourcing, and what actually works in a centuries-old building.",
            },
            {
              n: "02",
              t: "Designed around the building",
              d: "I work with the history of the space, not against it — honoring original materials while making the house work for modern life.",
            },
            {
              n: "03",
              t: "Done from anywhere",
              d: "Video calls, shared plans, and a curated shopping list with direct purchase links. You never need to be on site.",
            },
          ].map((c) => (
            <div key={c.n} className="border-t border-border pt-4">
              <span className="font-display text-accent text-sm">{c.n}</span>
              <h3 className="font-display text-xl mt-1">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-light">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl">What's included</h2>
            <p className="text-sm text-muted-foreground mt-3">Every project, every room.</p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex gap-3 items-start text-[15px] leading-relaxed">
                <Check size={18} className="text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">How it works</span>
          <h2 className="font-display text-4xl mt-4">Four steps,<span className="italic text-accent"> entirely remote.</span></h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            {
              n: "01",
              t: "Questionnaire + consultation",
              d: "You share photos, measurements, and your vision via a short questionnaire. Then we meet on video — Jill walks through everything and establishes the design direction.",
            },
            {
              n: "02",
              t: "2D floor plan",
              d: "Jill produces a 2D layout showing furniture placement, traffic flow, and functional zones. You review and share one round of feedback.",
            },
            {
              n: "03",
              t: "3D rendering + shopping list",
              d: "With the layout confirmed, Jill brings the space to life in 3D alongside a curated product list with direct purchase links — from Italy and internationally.",
            },
            {
              n: "04",
              t: "Final delivery + walk-through",
              d: "You receive the complete package. Once the room is furnished, Jill meets you on video to assess the result and suggest any final touches.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-6">
              <span className="font-display text-5xl text-accent/20 leading-none select-none shrink-0 w-14 text-right">
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-xl leading-snug">{step.t}</h3>
                <p className="mt-2 text-[15px] text-foreground/75 font-light leading-relaxed">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* PORTFOLIO PROOF */}
      {proofProjects.length > 0 && (
        <section className="bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
            <h2 className="font-display text-3xl mb-10">From the portfolio</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {proofProjects.map((p) => (
                <Link
                  key={p.slug}
                  to="/project/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col"
                >
                  {p.cover && (
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-52 object-cover transition-opacity group-hover:opacity-85"
                    />
                  )}
                  <div className="border-t border-border pt-4 mt-4">
                    <h3 className="font-display text-xl group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 font-light leading-relaxed line-clamp-2">
                      {p.brief}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqSection items={faqItems} title="Questions about designing your Italian home" />

      {/* LEAD MAGNET */}
      <EmailCapture magnet="italian-home-starter" />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 text-center">
        <h2 className="font-display text-3xl">Ready to begin?</h2>
        <p className="mt-4 text-foreground/70 font-light max-w-lg mx-auto">
          Tell Jill about your property and she'll reply with next steps within 1–2 days.
        </p>
        <Link
          to="/contact"
          search={{ segment: "italy" }}
          className="mt-8 inline-block bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
        >
          Begin a project
        </Link>
      </section>
    </PageShell>
  );
}
