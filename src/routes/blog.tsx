import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — The Welcome Home" },
      {
        name: "description",
        content:
          "Design thinking, project stories, and inspiration from The Welcome Home — an interior design journal.",
      },
      { property: "og:title", content: "Journal — The Welcome Home" },
    ],
  }),
  component: Blog,
});

// Posts will be added here as the blog grows.
// Each entry: { slug, title, date, category, excerpt, cover }
const posts: {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  cover: string;
}[] = [];

function Blog() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Journal</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05] max-w-3xl">
          Design thinking,
          <span className="block italic text-accent">in words.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl font-light">
          Stories behind the spaces, lessons from the field, and ideas worth sharing.
        </p>
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-32">
          <div className="border border-border p-16 text-center max-w-xl mx-auto">
            <p className="font-display text-2xl text-foreground/70">First post coming soon.</p>
            <p className="mt-4 text-sm text-muted-foreground font-light">
              In the meantime, browse the{" "}
              <Link to="/portfolio" className="text-accent hover:underline">
                portfolio
              </Link>{" "}
              or get in touch about a project.
            </p>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">
                    {post.category}
                  </span>
                  <h2 className="font-display text-2xl mt-2 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-foreground/75 font-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-xs text-muted-foreground">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
