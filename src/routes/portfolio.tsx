import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — The Welcome Home" },
      {
        name: "description",
        content:
          "A selection of residential and multi-family interior design projects by Jill Valeri.",
      },
      { property: "og:title", content: "Portfolio — The Welcome Home" },
      {
        property: "og:description",
        content: "Selected residential, multi-family and hospitality interiors.",
      },
      { property: "og:image", content: "/images/portfolio/image40.jpg" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Portfolio</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05] max-w-3xl">
          Selected projects,
          <span className="block italic text-accent">told as stories.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl font-light">
          Residential, multi-family, retail and hospitality — from intimate condos
          to showhouses and editorial features.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 space-y-24 pb-12">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7">
              <Link to="/project/$slug" params={{ slug: p.slug }}>
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-[420px] md:h-[520px] object-cover transition-opacity hover:opacity-90"
                  />
                ) : (
                  <div className="w-full h-[420px] md:h-[520px] bg-muted border border-border flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Photos coming soon
                    </span>
                  </div>
                )}
              </Link>
            </div>
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-accent">
                Project {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                <Link
                  to="/project/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-accent transition-colors"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">
                <span className="uppercase tracking-[0.18em] text-xs text-muted-foreground block mb-1">
                  Brief
                </span>
                {p.brief}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">
                <span className="uppercase tracking-[0.18em] text-xs text-muted-foreground block mb-1">
                  Solution
                </span>
                {p.solution}
              </p>
              <Link
                to="/project/$slug"
                params={{ slug: p.slug }}
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
              >
                View project →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
