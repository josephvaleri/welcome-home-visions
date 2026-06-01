import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Welcome Home" },
      {
        name: "description",
        content: "Begin a project with Jill Valeri. Virtual interior design, worldwide.",
      },
      { property: "og:title", content: "Contact — The Welcome Home" },
      {
        property: "og:description",
        content: "Tell us about your space — Jill will be in touch.",
      },
      { property: "og:image", content: "/images/portfolio/image31.jpg" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  location: z.string().trim().max(120).optional(),
  project: z.string().trim().min(10, "Tell me a little about your project").max(2000),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      location: fd.get("location") || undefined,
      project: fd.get("project"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Local-only confirmation for now
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — I'll be in touch shortly.");
    }, 600);
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
                href="https://www.facebook.com/thewelcomehomeinteriordesignsolutions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent"
              >
                <Facebook size={16} /> Facebook
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
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send inquiry"}
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
