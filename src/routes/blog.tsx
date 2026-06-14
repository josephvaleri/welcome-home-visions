import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { fetchSubstackPosts, formatPostDate, type SubstackPost } from "@/lib/substack";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Your Virtual Decorator" },
      {
        name: "description",
        content:
          "Design thinking, project stories, and inspiration from Your Virtual Decorator — an interior design journal by Jill Valeri.",
      },
      { property: "og:title", content: "Journal — Your Virtual Decorator" },
    ],
  }),
  loader: async (): Promise<{ posts: SubstackPost[] }> => {
    const posts = await fetchSubstackPosts();
    return { posts };
  },
  component: Blog,
});

function Blog() {
  const { posts } = Route.useLoaderData();

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
              <article key={post.link} className="group flex flex-col">
                {post.thumbnail && (
                  <div className="overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className={`flex flex-col flex-1 border-t border-border pt-6 ${post.thumbnail ? "mt-5" : ""}`}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col flex-1"
                  >
                    <h2 className="font-display text-2xl leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 text-sm text-foreground/75 font-light leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{formatPostDate(post.pubDate)}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-accent">
                        Read on Substack →
                      </span>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-16 text-center text-xs text-muted-foreground">
            Published on{" "}
            <a
              href="https://yourvirtualdecorator.substack.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Substack
            </a>
          </p>
        </section>
      )}
    </PageShell>
  );
}
