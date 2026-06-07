import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Welcome Home — Authentic Design Solutions" },
      {
        name: "description",
        content:
          "Interior design by Jill Valeri. From Umbria, Italy — helping clients worldwide live authentically in spaces that reflect their story.",
      },
      { property: "og:title", content: "The Welcome Home — Authentic Design Solutions" },
      {
        property: "og:description",
        content: "Wherever you live, live authentically. Virtual interior design with Jill Valeri.",
      },
      { property: "og:image", content: "/images/portfolio/image40.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <img
          src="/images/portfolio/image40.jpg"
          alt="Interior designed by Jill Valeri"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] mt-6 text-foreground">
              Wherever you live,
              <span className="block italic text-accent">live authentically.</span>
            </h1>
            <p className="mt-10 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl font-light">
              Wherever you call home should be your haven — a place that reflects your
              personal story. I can help you through defining functions for rooms and
              areas within rooms, careful space planning to create the desired
              functionality and mood, and the use of each of the layers of design to
              create a space that functions well and supports your needs while
              establishing the mood that reflects your personal style and using elements
              that help tell your story.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl font-light">
              I am able to work with clients all over the world through the use of modern
              technology to create compelling designs virtually.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-foreground/40 text-foreground px-7 py-3.5 text-sm uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-20 text-center">
          <p className="font-display italic text-3xl md:text-4xl leading-snug">
            “Your home should tell the story of who you are,
            <br className="hidden md:block" />
            and be a collection of what you love.”
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] opacity-70">
            — Designed from Umbria, Italy · Available worldwide
          </p>
        </div>
      </section>

      {/* THREE COLUMN VALUES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24 grid md:grid-cols-3 gap-12">
        {[
          {
            n: "01",
            t: "Define the function",
            d: "Every space starts with how you live. We map the rooms — and the rooms within rooms — to the rhythms of your day.",
          },
          {
            n: "02",
            t: "Plan the space",
            d: "Careful, considered space planning establishes circulation, scale, and the mood that will carry the room.",
          },
          {
            n: "03",
            t: "Layer the design",
            d: "Light, texture, color, and meaningful objects come together to tell your story — beautifully and quietly.",
          },
        ].map((c) => (
          <div key={c.n} className="border-t border-border pt-6">
            <span className="font-display text-accent text-lg">{c.n}</span>
            <h3 className="font-display text-2xl mt-2">{c.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
