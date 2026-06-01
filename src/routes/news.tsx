import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Noteworthy — The Welcome Home" },
      {
        name: "description",
        content:
          "Publications and press features for The Welcome Home — interior design projects and expertise featured in regional and national media.",
      },
      { property: "og:title", content: "News & Noteworthy — The Welcome Home" },
    ],
  }),
  component: News,
});

const press: { publication: string; category: string; description: string }[] = [
  {
    publication: "Ellicott City Patch",
    category: "Local Feature",
    description: "Coverage of local design work and community involvement in Ellicott City.",
  },
  {
    publication: "Baltimore Sun — Dream Homes",
    category: "Editorial Feature",
    description: "Featured in the Baltimore Sun's Dream Homes section, highlighting residential interior design.",
  },
  {
    publication: "Maryland Life Magazine",
    category: "Magazine Feature",
    description: "A showcase of award-winning residential interiors featured in Maryland Life Magazine.",
  },
];

function News() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Press</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05] max-w-3xl">
          News &amp; Noteworthy
        </h1>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl font-light">
          Projects published, work recognised, and expertise quoted — a record of
          The Welcome Home in the press.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-20">
        <div className="divide-y divide-border">
          {press.map((item, i) => (
            <div
              key={item.publication}
              className="py-10 grid md:grid-cols-12 gap-6 items-start group"
            >
              <div className="md:col-span-2">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-2">
                  {item.category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl leading-tight">
                  {item.publication}
                </h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-[15px] leading-relaxed text-foreground/80 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
