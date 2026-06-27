import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Journal" },
  { to: "/news", label: "News" },
] as const;

const workLinks = [
  { to: "/services", label: "Services & Pricing" },
  { to: "/renovating-in-italy", label: "Renovating in Italy" },
  { to: "/italian-style-at-home", label: "Italian Style at Home" },
] as const;

const mobileLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/renovating-in-italy", label: "Renovating in Italy" },
  { to: "/italian-style-at-home", label: "Italian Style at Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Journal" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-xl md:text-2xl tracking-wide text-foreground shrink-0"
        >
          Your Virtual Decorator
          <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
            Creating Authentic Spaces
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em]">
          {mainLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}

          {/* Work with me dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-foreground/80 hover:text-accent transition-colors uppercase tracking-[0.18em] text-sm cursor-default"
              aria-expanded={workOpen}
            >
              Work with me
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`}
              />
            </button>
            {workOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border shadow-md py-2 z-40">
                {workLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-accent hover:bg-muted/40 transition-colors"
                    onClick={() => setWorkOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Primary CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors shrink-0"
        >
          Begin a project
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm uppercase tracking-[0.18em]">
            {mobileLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-foreground/80 hover:text-accent border-b border-border/40 last:border-0"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
