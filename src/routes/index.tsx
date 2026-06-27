import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import { fetchSubstackPosts, formatPostDate, type SubstackPost } from "@/lib/substack";
import { buildMeta } from "@/lib/seo";
import { EmailCapture } from "@/components/EmailCapture";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildMeta({
      title: "Italian Interior Design, Virtually — Your Virtual Decorator",
      description:
        "Furnish and lay out a historic Italian home from anywhere — or bring authentic Italian style to the home you have. Virtual design with Jill Valeri, from Umbria.",
      path: "/",
    }),
  }),
  loader: async (): Promise<{ recentPosts: SubstackPost[] }> => {
    const recentPosts = await fetchSubstackPosts(3);
    return { recentPosts };
  },
  component: Home,
});

function Home() {
  const { recentPosts } = Route.useLoaderData();
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent/80 font-light">
              Virtual interior design for historic Italian homes — and Italian style anywhere
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] mt-6 text-foreground">
              Bring an Italian home
              <span className="block italic text-accent">to life.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl font-light">
              You've fallen for a stone farmhouse in Umbria, a village apartment in Tuscany, or
              simply the way an Italian home <em>feels</em>. I help you make it real — laying out
              rooms that work for modern life, choosing finishes and furnishings that honor the
              building's history, and sourcing every piece — entirely online, wherever you and the
              house happen to be.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl font-light">
              I work with clients all over the world, entirely virtually.
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
            "Your home should tell the story of who you are,
            <br className="hidden md:block" />
            and be a collection of what you love."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] opacity-70">
            — Designed from Umbria, Italy · Available worldwide
          </p>
        </div>
      </section>

      {/* WHO I HELP — TWO PATH SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Who I help</span>
          <h2 className="font-display text-4xl mt-4">Two paths,<span className="italic text-accent"> one designer.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border bg-card p-10 flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-accent">Renovating in Italy</span>
            <h3 className="font-display text-3xl mt-4 leading-snug">
              You bought the house.<br />Now make it a home.
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 font-light flex-1">
              For expats and second-home owners furnishing a historic Italian property — from abroad,
              with someone who lives here.
            </p>
            <Link
              to="/renovating-in-italy"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
            >
              How it works <ArrowRight size={14} />
            </Link>
          </div>
          <div className="border border-border bg-card p-10 flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-accent">Italian style, anywhere</span>
            <h3 className="font-display text-3xl mt-4 leading-snug">
              Want that Italian<br />feeling at home?
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 font-light flex-1">
              Bring the warmth, light, and soul of an Italian interior to the home you already love —
              wherever in the world it is.
            </p>
            <Link
              to="/italian-style-at-home"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
            >
              Get the look <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* THREE COLUMN VALUES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 grid md:grid-cols-3 gap-12">
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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* LEAD CAPTURE BAND */}
      <EmailCapture variant="band" magnet="italian-home-starter" />

      {/* FROM THE JOURNAL */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">From the Journal</span>
              <h2 className="font-display text-3xl mt-4 leading-snug">
                Design ideas,<span className="block italic text-accent"> in words.</span>
              </h2>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground/70 hover:text-accent transition-colors"
              >
                See all posts <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="md:col-span-8 flex flex-col divide-y divide-border">
              {recentPosts.map((post) => (
                <li key={post.link}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-6 py-6 hover:text-accent transition-colors"
                  >
                    <span className="font-display text-xl leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </span>
                    <div className="shrink-0 text-right">
                      <span className="block text-xs text-muted-foreground whitespace-nowrap">
                        {formatPostDate(post.pubDate)}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
