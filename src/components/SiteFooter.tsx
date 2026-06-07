import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <div className="font-display text-2xl">The Welcome Home</div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
            Authentic Design Solutions
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
            Interior design from Umbria, Italy — for clients wherever they call home.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Explore</span>
          <Link to="/about" className="hover:text-accent w-fit">About Jill</Link>
          <Link to="/services" className="hover:text-accent w-fit">Services & Pricing</Link>
          <Link to="/portfolio" className="hover:text-accent w-fit">Portfolio</Link>
          <Link to="/contact" className="hover:text-accent w-fit">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Follow</span>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/jill_e_valeri"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 grid place-items-center border border-border rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=your%20virtual%20decorator%3Acreating%20authentic%20spaces"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 grid place-items-center border border-border rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Welcome Home · Jill Valeri
      </div>
    </footer>
  );
}
