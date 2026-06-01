import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-12 flex flex-col justify-end pb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</span>
        <h1 className="font-display text-5xl md:text-7xl text-foreground mt-3 max-w-3xl leading-[1.05]">
          {title}
        </h1>
      </div>
    </section>
  );
}
