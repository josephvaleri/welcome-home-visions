import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { EmailCapture } from "@/components/EmailCapture";
import { buildMeta } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/italian-style-at-home")({
  head: () => ({
    ...buildMeta({
      title: "Get the Italian Look at Home — Virtual Interior Design | Jill Valeri",
      description:
        "Love the warmth and soul of Italian interiors? Bring authentic Italian style to your home anywhere in the world — virtual design with a designer living in Umbria.",
      path: "/italian-style-at-home",
      image: "/images/portfolio/image14.jpg",
    }),
  }),
  component: ItalianStyleAtHome,
});

const faqItems = [
  {
    q: "Do you only work on homes in Italy?",
    a: "Not at all. Most of my clients live outside Italy and want to bring that sense of warmth, light, and authenticity to the home they already have — wherever in the world that is.",
  },
  {
    q: "I don't want it to look like a theme restaurant.",
    a: "Good. Authentic Italian style has nothing to do with terracotta roosters or obvious Tuscan clichés. It's about restraint, natural materials, patina, light, and spaces that feel personal and lived-in. That's what we're going for.",
  },
  {
    q: "How do you design my room if you can't visit?",
    a: "Entirely virtually — photos, measurements, and a video consultation give Jill everything she needs. You receive a 2D floor plan, a 3D rendering, and a curated shopping list with direct purchase links. Most clients are surprised by how thorough and accurate the result is.",
  },
  {
    q: "What will it cost?",
    a: "Per-room pricing starts from €750 for living spaces and €1,500 for working spaces (kitchen, bathroom). See the full breakdown on the Services page.",
  },
];

const proofSlugs = [
  "primary-bedroom-with-dressing-area",
  "purple-passion-maryland-life-magazine",
  "golfers-paradise",
];
const proofProjects = proofSlugs
  .map((s) => projects.find((p) => p.slug === s))
  .filter(Boolean) as typeof projects;

function ItalianStyleAtHome() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Italian style, anywhere"
        title="The soul of an Italian home — in yours."
        image="/images/portfolio/image14.jpg"
      />

      {/* WHAT AUTHENTIC ITALIAN STYLE IS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">What it really means</span>
          <h2 className="font-display text-4xl mt-4 leading-[1.05]">
            Authentic Italian style isn't
            <span className="block italic text-accent"> a Tuscan kitchen kit.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/85 font-light">
            Real Italian interiors are restrained. They are built on natural materials — linen, stone,
            terracotta, aged wood — and on light handled carefully. Objects are chosen for meaning,
            not accumulation. Spaces feel liveable, not decorated.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/85 font-light">
            What most people are really drawn to is a quality of life: rooms that feel calm and
            grounded, where everything earns its place. That is achievable in any home, in any
            country — with the right eye and the right approach.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/85 font-light">
            I live and work in Umbria. I see these spaces every day. The goal is never to copy
            Italy — it's to bring home the <em>feeling</em> of an Italian room, rooted in your
            own life and the home you actually have.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col gap-6 pt-10">
          {[
            { t: "Natural materials", d: "Stone, linen, aged wood, terracotta — materials with presence and patina over synthetic finishes." },
            { t: "Considered restraint", d: "Italian rooms edit ruthlessly. Every object earns its place; clutter is the enemy of calm." },
            { t: "Light as architecture", d: "Italian design treats natural light as a material — how it enters, moves, and lands shapes the whole room." },
            { t: "Meaningful objects", d: "Things collected over a life, not purchased in a set. The room should tell your story, not someone else's." },
          ].map((c) => (
            <div key={c.t} className="border-t border-border pt-4">
              <h3 className="font-display text-lg">{c.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground font-light">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The process</span>
            <h2 className="font-display text-4xl mt-4">
              From your living room<span className="italic text-accent"> to the look you want.</span>
            </h2>
            <p className="mt-4 text-foreground/70 font-light">
              Entirely virtual — wherever you are in the world.
            </p>
          </div>
          <ol className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Video consultation", d: "We talk through your space, your life, and the feeling you're chasing — via video from wherever you are." },
              { n: "02", t: "2D floor plan", d: "A layout that considers how the room actually lives — traffic flow, scale, light, function." },
              { n: "03", t: "3D rendering", d: "See the finished room before committing to a single purchase. Finishes, furniture, light — all rendered." },
              { n: "04", t: "Shoppable materials list", d: "Every piece curated and linked — from your country, at your budget. Ready to order at your pace." },
            ].map((s) => (
              <li key={s.n} className="flex flex-col">
                <span className="font-display text-4xl text-accent/20 leading-none">{s.n}</span>
                <h3 className="font-display text-xl mt-3">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 font-light leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO PROOF */}
      {proofProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="font-display text-3xl mb-10">Selected work</h2>
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
          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="text-sm uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
            >
              View full portfolio →
            </Link>
          </div>
        </section>
      )}

      {/* JOURNAL CROSS-LINK */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">From the journal</span>
          <h2 className="font-display text-3xl mt-4">Ideas on Italian style,<span className="italic text-accent"> in words.</span></h2>
          <p className="mt-4 text-foreground/70 font-light max-w-xl mx-auto">
            Jill writes about design, place, and the details that make an interior feel alive.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
          >
            Read the journal →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={faqItems} title="Questions about Italian style at home" />

      {/* LEAD MAGNET */}
      <EmailCapture magnet="italian-style-lookbook" />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 text-center">
        <h2 className="font-display text-3xl">Ready to begin?</h2>
        <p className="mt-4 text-foreground/70 font-light max-w-lg mx-auto">
          Tell Jill about your home and she'll reply with next steps within 1–2 days.
        </p>
        <Link
          to="/contact"
          search={{ segment: "style" }}
          className="mt-8 inline-block bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
        >
          Begin a project
        </Link>
      </section>
    </PageShell>
  );
}
