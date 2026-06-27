export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://www.yourvirtualdecorator.com";

const DEFAULT_OG = "/images/portfolio/image40.jpg";

export function buildMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : `${SITE_URL}${DEFAULT_OG}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Your Virtual Decorator — Jill Valeri",
    description:
      "Virtual interior design for historic Italian homes and Italian-inspired interiors worldwide.",
    url: SITE_URL,
    areaServed: "Worldwide",
    knowsAbout: ["Interior design", "Italian interiors", "Historic home renovation"],
    founder: { "@type": "Person", name: "Jill Valeri" },
    address: { "@type": "PostalAddress", addressRegion: "Umbria", addressCountry: "IT" },
    sameAs: [
      "https://www.instagram.com/jill_e_valeri",
      "https://yourvirtualdecorator.substack.com",
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
