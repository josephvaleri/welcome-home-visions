import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — The Welcome Home" },
      {
        name: "description",
        content:
          "Virtual interior design packages including 2D floor plan, 3D rendering, sourcing with links, and a final walk-through.",
      },
      { property: "og:title", content: "Services & Pricing — The Welcome Home" },
      {
        property: "og:description",
        content: "Per-room virtual design packages from €750.",
      },
      { property: "og:image", content: "/images/portfolio/image14.jpg" },
    ],
  }),
  component: Services,
});

const included = [
  "2D floor plan",
  "3D rendering",
  "Product inventory with links",
  "Project implementation notes",
  "One set of revisions",
];

const tiers = [
  {
    name: "Living Spaces",
    rooms: ["Living Room", "Dining Room", "Bedroom", "Office"],
    price: "€750",
    per: "per room",
  },
  {
    name: "Working Spaces",
    rooms: ["Kitchen", "Bathroom"],
    price: "€1,500",
    per: "per room",
    featured: true,
  },
];

function Services() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Services</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            Virtual design,
            <span className="block italic text-accent">fully considered.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85 font-light max-w-2xl">
            Every virtual design package is built around how you actually live. From
            first plan to final walk-through, here is what's included in your project.
          </p>
        </div>
        <div className="md:col-span-5">
          <img
            src="/images/portfolio/image14.jpg"
            alt="3D rendering of a designed living room"
            className="w-full h-72 object-cover"
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">How it works</span>
          <h2 className="font-display text-4xl mt-4">From first question<span className="italic text-accent"> to finished room.</span></h2>
          <p className="mt-4 text-foreground/75 font-light leading-relaxed">
            A clear, collaborative process — entirely virtual, designed around your life.
          </p>
        </div>
        <ol className="relative grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            {
              n: "01",
              title: "Complete the questionnaire",
              body: "You'll receive a short questionnaire covering your space, how you use it, your style preferences, and your budget. This gives Jill everything she needs to come to your first conversation prepared.",
            },
            {
              n: "02",
              title: "Video consultation with Jill",
              body: "Jill meets with you one-on-one over video to walk through your answers, ask follow-up questions, and establish a shared vision for the space. This is where the design relationship begins.",
            },
            {
              n: "03",
              title: "Initial 2D floor plan",
              body: "Jill produces an initial 2D rendering of your proposed space — furniture placement, traffic flow, and functional zones — giving you a clear picture of the plan before any money is spent.",
            },
            {
              n: "04",
              title: "Make it yours — one chance to shape the plan",
              body: "You review the 2D plan and share your feedback. One full round of revisions is included.",
            },
            {
              n: "05",
              title: "3D rendering + materials list",
              body: "With the layout confirmed, Jill brings the space to life in 3D — showing finishes, furniture, lighting, and texture — alongside a curated materials list with direct purchase links.",
            },
            {
              n: "06",
              title: "Refine the materials",
              body: "You review every item and swap anything that doesn't fit your taste or budget. One round of materials changes is included so the final list reflects exactly what you want to buy.",
            },
            {
              n: "07",
              title: "Final delivery",
              body: "You receive the complete design package: final 2D drawings, the 3D rendering, and your full product inventory with purchase links — everything you need to bring the space to life at your own pace.",
            },
            {
              n: "08",
              title: "Virtual walk-through of the finished space",
              body: "Once you've implemented the design, Jill meets with you over video to walk through the completed space together — assessing the result and suggesting any final adjustments to make it perfect.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-6">
              <span className="font-display text-5xl text-accent/20 leading-none select-none shrink-0 w-14 text-right">
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-xl leading-snug">{step.title}</h3>
                <p className="mt-2 text-[15px] text-foreground/75 font-light leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* INCLUDED */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl">What's included</h2>
            <p className="text-sm text-muted-foreground mt-3">
              Every package, every room.
            </p>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {included.map((i) => (
              <li key={i} className="flex gap-3 items-start text-[15px] leading-relaxed">
                <Check size={18} className="text-accent mt-1 shrink-0" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="md:col-span-12 text-center text-sm italic text-muted-foreground mt-4 px-4">
            I am not certified to make structural changes but I will happily work with your architect or engineer should such changes be recommended.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <h2 className="font-display text-4xl text-center">Per-room pricing</h2>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground text-center mt-3">
          Priced in euro
        </p>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-10 border ${
                t.featured
                  ? "border-accent bg-card shadow-[0_30px_60px_-30px_oklch(0.38_0.07_35/0.25)]"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="font-display text-3xl">{t.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-6xl text-accent">{t.price}</span>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {t.per}
                </span>
              </div>
              <ul className="mt-8 space-y-2 text-[15px]">
                {t.rooms.map((r) => (
                  <li key={r} className="flex items-center gap-3 border-b border-border/60 pb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-block w-full text-center bg-primary text-primary-foreground py-3 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                Begin a project
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
