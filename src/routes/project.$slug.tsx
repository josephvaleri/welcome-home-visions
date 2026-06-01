import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — The Welcome Home` },
      {
        name: "description",
        content: loaderData?.brief ?? "",
      },
      {
        property: "og:title",
        content: `${loaderData?.title ?? "Project"} — The Welcome Home`,
      },
      { property: "og:image", content: loaderData?.cover ?? "" },
    ],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-32 text-center">
        <h1 className="font-display text-4xl">Project not found</h1>
        <Link to="/portfolio" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors">
          ← Back to portfolio
        </Link>
      </div>
    </PageShell>
  ),
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);

  return (
    <PageShell>
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-4 pb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-[480px] md:h-[580px] object-cover"
          />
        </div>
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Brief / Solution / Challenges */}
      <section className="bg-muted/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent block mb-3">
              Brief
            </span>
            <p className="text-[15px] leading-relaxed text-foreground/85 font-light">
              {project.brief}
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent block mb-3">
              Solution
            </span>
            <p className="text-[15px] leading-relaxed text-foreground/85 font-light">
              {project.solution}
            </p>
          </div>
          {project.challenges && (
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent block mb-3">
                Challenges
              </span>
              <p className="text-[15px] leading-relaxed text-foreground/85 font-light">
                {project.challenges}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
          <h2 className="font-display text-3xl mb-10">Gallery</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`${project.title} — image ${i + 1}`}
                className={`w-full object-cover ${
                  i === 0 && project.gallery.length % 2 !== 0
                    ? "sm:col-span-2 h-[480px]"
                    : "h-[360px]"
                }`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next navigation */}
      <nav className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex justify-between items-center">
          {index > 0 ? (
            <Link
              to="/project/$slug"
              params={{ slug: projects[index - 1].slug }}
              className="group flex flex-col"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
                ← Previous
              </span>
              <span className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
                {projects[index - 1].title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {index < projects.length - 1 ? (
            <Link
              to="/project/$slug"
              params={{ slug: projects[index + 1].slug }}
              className="group flex flex-col text-right"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
                Next →
              </span>
              <span className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
                {projects[index + 1].title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </PageShell>
  );
}
