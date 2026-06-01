import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jill Valeri — The Welcome Home" },
      {
        name: "description",
        content:
          "Twenty years of designing residential, multi-family, retail and hospitality spaces. Based in Umbria, Italy.",
      },
      { property: "og:title", content: "About Jill Valeri — The Welcome Home" },
      {
        property: "og:description",
        content: "Twenty years of interior design experience, now based in Umbria, Italy.",
      },
      { property: "og:image", content: "/images/portfolio/image33.jpg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-12 gap-10 md:gap-16 pb-24">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">About</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            From Umbria,
            <span className="block italic text-accent">with care.</span>
          </h1>
          <div className="mt-8 overflow-hidden">
            <img
              src="/images/portfolio/image33.jpg"
              alt="Antique Italian floor tiles in Umbria"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-20 space-y-6 text-[17px] leading-[1.8] text-foreground/85 font-light">
          <p>
            I have been designing and decorating spaces for over 20 years. My projects
            have included residential, multi-family, retail/hospitality and have been
            both traditional on-site as well as virtual.
          </p>
          <p>
            I moved from the United States of America to Italy several years ago. My
            experience touring homes in Italy has shown me that these properties can
            offer unique challenges to creating spaces that work for modern lives. As I
            work on my own home in Umbria — as well as helping friends in my area — I
            have a better understanding about how to combine the history and personality
            of these ancient buildings with the lifestyle and functions of today.
          </p>
          <p>
            I look forward to helping my clients wherever they call home to apply my
            skills and knowledge to help them live more comfortably and authentically in
            their spaces.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border mt-10">
            <Stat n="20+" l="Years designing" />
            <Stat n="4" l="Sectors served" />
            <Stat n="∞" l="Stories told" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-accent">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
