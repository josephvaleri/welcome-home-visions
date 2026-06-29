import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Instagram, Facebook, Mail, MapPin, Newspaper } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    segment: (search.segment as string | undefined) ?? "",
  }),
  head: () => ({
    ...buildMeta({
      title: "Contact — Your Virtual Decorator",
      description: "Begin a project with Jill Valeri. Virtual interior design, worldwide.",
      path: "/contact",
      image: "/images/portfolio/image31.jpg",
    }),
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  location: z.string().trim().max(120).optional(),
  segment: z.string().optional(),
  project: z.string().trim().min(10, "Tell me a little about your project").max(2000),
});

const SEGMENT_OPTIONS = [
  { value: "italy", label: "Renovating a home in Italy" },
  { value: "style", label: "Want Italian style where I live" },
  { value: "other", label: "Something else" },
] as const;

function Contact() {
  const { segment } = Route.useSearch();
  const defaultSegment =
    segment === "italy" ? "italy" : segment === "style" ? "style" : "other";
  const [selectedSegment, setSelectedSegment] = useState<string>(defaultSegment);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const segmentLabel =
      SEGMENT_OPTIONS.find((o) => o.value === selectedSegment)?.label ?? selectedSegment;
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      location: fd.get("location") || undefined,
      segment: segmentLabel,
      project: fd.get("project"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const { name, email, location, project } = parsed.data;
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLocation: ${location ?? "Not provided"}\nI am: ${segmentLabel}\n\nProject:\n${project}`
    );
    window.location.href = `mailto:jill@yourvirtualdecorator.com?subject=${subject}&body=${body}`;
    (e.target as HTMLFormElement).reset();
    toast.success("Your email client will open with the message ready to send.");
  };

  return (
    <PageShell>
      <Toaster richColors position="top-center" />
      <section className="mx-auto max-w-7xl px-6 lg:px-12 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Contact</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            Let's begin,
            <span className="block italic text-accent">together.</span>
          </h1>
          <p className="mt-6 text-foreground/80 leading-relaxed font-light">
            Tell me about your space, how you'd like to use it, and the feeling you want
            to come home to. I'll reply with next steps.
          </p>

          <div className="mt-10 overflow-hidden">
            <img
              src="/images/portfolio/image31.jpg"
              alt="A designed living and dining space"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-accent" /> Umbria, Italy · serving worldwide
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={16} className="text-accent" /> Use the form — replies within 1–2 days
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/jill_e_valeri"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent"
              >
                <Instagram size={16} /> @jill_e_valeri
              </a>
              <a
                href="https://www.facebook.com/search/top?q=your%20virtual%20decorator%3Acreating%20authentic%20spaces"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent"
              >
                <Facebook size={16} /> Facebook
              </a>
              <a
                href="mailto:jill@yourvirtualdecorator.com"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent"
              >
                <Mail size={16} /> Email Jill
              </a>
              <a
                href="https://substack.com/@jillvaleri"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent"
              >
                <Newspaper size={16} /> Substack
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 bg-card border border-border p-8 md:p-12 space-y-6"
        >
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Where is the project?" name="location" placeholder="City, Country" />

          {/* Segment selector */}
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-3">
              What best describes you?
            </label>
            <div className="flex flex-col gap-2">
              {SEGMENT_OPTIONS.map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="segment"
                    value={opt.value}
                    checked={selectedSegment === opt.value}
                    onChange={() => setSelectedSegment(opt.value)}
                    className="accent-[oklch(0.55_0.12_35)] w-4 h-4 shrink-0"
                  />
                  <span className="text-[15px] text-foreground/80 group-hover:text-foreground transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              About the project
            </label>
            <textarea
              name="project"
              required
              rows={6}
              maxLength={2000}
              className="mt-2 w-full bg-background border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors"
              placeholder="Which rooms, how you'd like to use them, the feeling you want..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Submit
          </button>
        </form>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="mt-2 w-full bg-background border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
