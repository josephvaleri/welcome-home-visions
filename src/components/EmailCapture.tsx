import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;
const SUBSTACK_SUBSCRIBE = "https://yourvirtualdecorator.substack.com/subscribe";

const MAGNETS = {
  "italian-home-starter": {
    title: "Free guide: 10 things to get right before you buy a single piece",
    pitch:
      "Furnishing a historic Italian home? Get the free starter guide — 10 things to get right before you buy a single piece.",
    pdf: "/downloads/italian-home-starter.pdf",
  },
  "italian-style-lookbook": {
    title: "Free lookbook: Authentic Italian Style at Home",
    pitch:
      "Want that Italian feeling at home? Get the free starter lookbook — real Italian style, no clichés.",
    pdf: "/downloads/italian-style-lookbook.pdf",
  },
} as const;

type MagnetKey = keyof typeof MAGNETS;

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
});

interface Props {
  variant?: "band" | "card";
  magnet: MagnetKey;
}

export function EmailCapture({ variant = "card", magnet }: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const info = MAGNETS[magnet];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please enter a valid email");
      return;
    }

    if (!LEAD_ENDPOINT) {
      window.open(SUBSTACK_SUBSCRIBE, "_blank", "noreferrer");
      setDone(true);
      toast.success("Redirecting to subscribe — your guide will be sent there.");
      return;
    }

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: parsed.data.email,
          magnet,
          source: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("submission failed");
      setDone(true);
      toast.success("Check your inbox — and here's your guide.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (variant === "band") {
    return (
      <section className="bg-secondary text-secondary-foreground">
        <Toaster richColors position="top-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Free guide</span>
            <p className="mt-3 font-display text-2xl md:text-3xl leading-snug">{info.pitch}</p>
          </div>
          <div>
            {done ? (
              <div className="text-center">
                <p className="font-display text-xl">Thank you.</p>
                <a
                  href={info.pdf}
                  className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-accent hover:underline"
                >
                  Download your guide →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-background border border-border px-4 py-3 text-[15px] text-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors whitespace-nowrap"
                >
                  Get the guide
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
      <Toaster richColors position="top-center" />
      <div className="border border-border bg-card p-10 md:p-14 max-w-2xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Free guide</span>
        <h3 className="font-display text-3xl mt-4 leading-snug">{info.title}</h3>
        {done ? (
          <div className="mt-8">
            <p className="text-foreground/80 font-light">Thank you — check your inbox.</p>
            <a
              href={info.pdf}
              className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-accent hover:underline"
            >
              Download now →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-background border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors whitespace-nowrap"
            >
              Get it free
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
