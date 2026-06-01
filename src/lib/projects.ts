export type Project = {
  slug: string;
  title: string;
  brief: string;
  solution: string;
  challenges?: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "confusing-condo-conquered",
    title: "Confusing Condo — Conquered",
    brief:
      "A small ground-floor condo with the patio as the primary entry. Zones needed for home office, dining, and television — with clear circulation throughout.",
    solution:
      "Distinct functional zones with uninterrupted flow. A compact footprint made to feel purposeful and calm.",
    cover: "/images/portfolio/image14.jpg",
    gallery: [
      "/images/portfolio/image14.jpg",
      "/images/portfolio/image15.jpg",
    ],
  },
  {
    slug: "bringing-a-great-room-into-scale",
    title: "Bringing a Great Room Into Scale",
    brief:
      "A very large family room — not the primary TV space — home to four young children, with the husband's turntable and record collection at its heart.",
    solution:
      "A grown-up retreat scaled with proportioned furnishings and layered textures. Media storage that celebrates the record collection.",
    cover: "/images/portfolio/image25.jpg",
    gallery: [
      "/images/portfolio/image25.jpg",
      "/images/portfolio/image22.jpg",
    ],
  },
  {
    slug: "a-family-affair",
    title: "A Family Affair",
    brief:
      "A multi-generational space for three generations. Quiet patterns, room for a beloved fish tank, a rocking recliner by the fireplace, and ample storage.",
    solution:
      "Quiet textures and timeless silhouettes balance comfort and simplicity. The fish tank stays as the focal element.",
    cover: "/images/portfolio/image23.jpg",
    gallery: [
      "/images/portfolio/image23.jpg",
      "/images/portfolio/image20.jpg",
    ],
  },
  {
    slug: "golfers-paradise",
    title: "Golfer's Paradise",
    brief:
      "Big gatherings for golf viewing — but also a room for two. Swivel seating, surfaces for drinks, layered lighting, and a tricky back corner to resolve.",
    solution:
      "Two connected seating zones anchored by swivel chairs unify the room and welcome both crowds and quiet evenings.",
    cover: "/images/portfolio/image20.jpg",
    gallery: [
      "/images/portfolio/image20.jpg",
      "/images/portfolio/image22.jpg",
    ],
  },
  {
    slug: "adding-character-to-new-construction",
    title: "Adding Character to New Construction",
    brief:
      "Fresh architectural details and tailored furnishings give a new home warmth, character, and a sense of history.",
    solution:
      "Board & batten paneling for a quiet reading and piano space; raised panel moulding in the dining room; hand-printed wallpaper in the powder room.",
    cover: "/images/portfolio/image31.jpg",
    gallery: [
      "/images/portfolio/image31.jpg",
      "/images/portfolio/image35.jpg",
      "/images/portfolio/image37.jpg",
    ],
  },
  {
    slug: "historic-ellicott-city-decorators-showhouse",
    title: "Historic Ellicott City Decorators' Showhouse",
    brief:
      "A jewel-box space celebrating the home's history while feeling fresh and contemporary.",
    solution:
      "Creative storage, custom botanical art, and a bold over-scaled mirror with integrated sconces create drama in a small footprint.",
    cover: "/images/portfolio/image41.jpg",
    gallery: [
      "/images/portfolio/image41.jpg",
      "/images/portfolio/image49.jpg",
    ],
  },
  {
    slug: "showhouse-teen-lounge",
    title: "Showhouse Teen Lounge",
    brief:
      "An attic bedroom with original slat ceilings and unusual window placement, transformed into a relaxed boho retreat.",
    solution:
      "Layered rugs, global textiles, and eclectic décor — a generous lounge area paired with a quiet workspace.",
    cover: "/images/portfolio/image27.jpg",
    gallery: [
      "/images/portfolio/image27.jpg",
      "/images/portfolio/image50.jpg",
    ],
  },
  {
    slug: "model-apartment-one-bedroom",
    title: "Model Apartment — One Bedroom",
    brief:
      "A contemporary one-bedroom model unit styled to appeal to prospective residents.",
    solution:
      "Cohesive finishes, efficient layouts, and warm, welcoming décor that lets the architecture lead.",
    cover: "/images/portfolio/image40.jpg",
    gallery: [
      "/images/portfolio/image40.jpg",
      "/images/portfolio/image45.jpg",
    ],
  },
  {
    slug: "model-apartment-two-bedroom",
    title: "Model Apartment — Two Bedroom",
    brief:
      "A two-bedroom model apartment highlighting smart space planning and lifestyle flexibility.",
    solution: "Inviting color palettes and considered layouts suited for modern renters.",
    cover: "/images/portfolio/image45.jpg",
    gallery: [
      "/images/portfolio/image45.jpg",
      "/images/portfolio/image27.jpg",
    ],
  },
  {
    slug: "primary-bedroom-with-dressing-area",
    title: "Primary Bedroom with Dressing Area",
    brief:
      "A primary suite refresh — refining the architectural envelope to harmonize bedroom and dressing area.",
    solution:
      "Soft materials and balanced proportions create a quiet connection between the two zones.",
    cover: "/images/portfolio/image50.jpg",
    gallery: [
      "/images/portfolio/image50.jpg",
      "/images/portfolio/image45.jpg",
    ],
  },
  {
    slug: "purple-passion-maryland-life-magazine",
    title: "Purple Passion — Maryland Life Magazine",
    brief: "A bold, expressive project featured in Maryland Life Magazine.",
    solution:
      "Layered purple tones, custom furnishings, and dynamic contrasts — drama meets livability with an editorial sensibility.",
    cover: "/images/portfolio/image55.jpg",
    gallery: [
      "/images/portfolio/image55.jpg",
      "/images/portfolio/image56.jpg",
    ],
  },
  {
    slug: "stainmaster-carpet-sweepstakes-winner",
    title: "Stainmaster Carpet Sweepstakes Winner",
    brief: "A vibrant, lifestyle-forward space for the winner of a national sweepstakes.",
    solution:
      "Saturated color, durable materials, and high-performing carpets — comfort that holds up to real life.",
    cover: "/images/portfolio/image2.jpg",
    gallery: [
      "/images/portfolio/image2.jpg",
      "/images/portfolio/image1.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
