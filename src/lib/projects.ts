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
    cover: "/images/portfolio/condo_1.jpg",
    gallery: [
      "/images/portfolio/condo_1.jpg",
      "/images/portfolio/condo_2.jpg",
    ],
  },
  {
    slug: "bringing-a-great-room-into-scale",
    title: "Bringing a Great Room Into Scale",
    brief:
      "A very large family room — not the primary TV space — home to four young children, with the husband's turntable and record collection at its heart.",
    solution:
      "A grown-up retreat scaled with proportioned furnishings and layered textures. Media storage that celebrates the record collection.",
    cover: "/images/portfolio/great_room_1.jpg",
    gallery: [
      "/images/portfolio/great_room_1.jpg",
      "/images/portfolio/great_room_2.jpg",
    ],
  },
  {
    slug: "a-family-affair",
    title: "A Family Affair",
    brief:
      "A multi-generational space for three generations. Quiet patterns, room for a beloved fish tank, a rocking recliner by the fireplace, and ample storage.",
    solution:
      "Quiet textures and timeless silhouettes balance comfort and simplicity. The fish tank stays as the focal element.",
    cover: "/images/portfolio/extended_family_1.jpg",
    gallery: [
      "/images/portfolio/extended_family_1.jpg",
      "/images/portfolio/extended_family_2.jpg",
    ],
  },
  {
    slug: "golfers-paradise",
    title: "Golfer's Paradise",
    brief:
      "Big gatherings for golf viewing — but also a room for two. Swivel seating, surfaces for drinks, layered lighting, and a tricky back corner to resolve.",
    solution:
      "Two connected seating zones anchored by swivel chairs unify the room and welcome both crowds and quiet evenings.",
    cover: "/images/portfolio/golfer_1.jpg",
    gallery: [
      "/images/portfolio/golfer_1.jpg",
      "/images/portfolio/golfer_2.jpg",
    ],
  },
  {
    slug: "adding-character-to-new-construction",
    title: "Adding Character to New Construction",
    brief:
      "Fresh architectural details and tailored furnishings give a new home warmth, character, and a sense of history.",
    solution:
      "Board & batten paneling for a quiet reading and piano space; raised panel moulding in the dining room; hand-printed wallpaper in the powder room.",
    cover: "/images/portfolio/adding_character_1.jpg",
    gallery: [
      "/images/portfolio/adding_character_1.jpg",
      "/images/portfolio/adding_characer_2.jpg",
      "/images/portfolio/adding_character_3.jpg",
      "/images/portfolio/adding_character_4.jpg",
      "/images/portfolio/adding_character_5.jpg",
      "/images/portfolio/adding_character_6.jpg",
    ],
  },
  {
    slug: "historic-ellicott-city-decorators-showhouse",
    title: "Historic Ellicott City Decorators' Showhouse",
    brief:
      "A jewel-box space celebrating the home's history while feeling fresh and contemporary.",
    solution:
      "Creative storage, custom botanical art, and a bold over-scaled mirror with integrated sconces create drama in a small footprint.",
    cover: "/images/portfolio/EC_Showhouse_powder_1.jpg",
    gallery: [
      "/images/portfolio/EC_Showhouse_powder_1.jpg",
      "/images/portfolio/EC_Showhouse_powder_2.jpg",
      "/images/portfolio/EC_Showhouse_powder_3.jpg",
      "/images/portfolio/EC_Showhouse_powder_4.jpg",
      "/images/portfolio/EC_Showhouse_powder_5.jpg",
      "/images/portfolio/EC_Showhouse_powder_6.jpg",
    ],
  },
  {
    slug: "showhouse-teen-lounge",
    title: "Showhouse Teen Lounge",
    brief:
      "An attic bedroom with original slat ceilings and unusual window placement, transformed into a relaxed boho retreat.",
    solution:
      "Layered rugs, global textiles, and eclectic décor — a generous lounge area paired with a quiet workspace.",
    cover: "/images/portfolio/EC_Showhouse_teen_1.jpg",
    gallery: [
      "/images/portfolio/EC_Showhouse_teen_1.jpg",
      "/images/portfolio/EC_Showhouse_teen_2.jpg",
      "/images/portfolio/EC_Showhouse_teen_3.jpg",
    ],
  },
  {
    slug: "model-apartment-one-bedroom",
    title: "Model Apartment — One Bedroom",
    brief:
      "A contemporary one-bedroom model unit styled to appeal to prospective residents.",
    solution:
      "Cohesive finishes, efficient layouts, and warm, welcoming décor that lets the architecture lead.",
    cover: "/images/portfolio/glen_burnie_1.jpg",
    gallery: [
      "/images/portfolio/glen_burnie_1.jpg",
      "/images/portfolio/glen_burnie_2.jpg",
      "/images/portfolio/glen_burnie_3.jpg",
      "/images/portfolio/glen_burnie_4.jpg",
      "/images/portfolio/glen_burnie_5.jpg",
      "/images/portfolio/glen_burnie_6.jpg",
      "/images/portfolio/glen_burnie_7.jpg",
      "/images/portfolio/glen_burnie_8.jpg",
      "/images/portfolio/glen_burnie_9.jpg",
      "/images/portfolio/glen_burnie_10.jpg",
      "/images/portfolio/glen_burnie_11.jpg",
      "/images/portfolio/glen_burnie_12.jpg",
    ],
  },
  {
    slug: "model-apartment-two-bedroom",
    title: "Model Apartment — Two Bedroom",
    brief:
      "A two-bedroom model apartment highlighting smart space planning and lifestyle flexibility.",
    solution: "Inviting color palettes and considered layouts suited for modern renters.",
    cover: "/images/portfolio/glen_burnie_13.jpg",
    gallery: [
      "/images/portfolio/glen_burnie_13.jpg",
      "/images/portfolio/glen_burnie_14.jpg",
      "/images/portfolio/glen_burnie_15.jpg",
      "/images/portfolio/glen_burnie_16.jpg",
      "/images/portfolio/glen_burnie_17.jpg",
      "/images/portfolio/glen_burnie_18.jpg",
      "/images/portfolio/glen_burnie_19.jpg",
      "/images/portfolio/glen_burnie_20.jpg",
      "/images/portfolio/glen_burnie_21.jpg",
      "/images/portfolio/glen_burnie_22.jpg",
      "/images/portfolio/glen_burnie_23.jpg",
      "/images/portfolio/glen_burnie_24.jpg",
    ],
  },
  {
    slug: "primary-bedroom-with-dressing-area",
    title: "Primary Bedroom with Dressing Area",
    brief:
      "A primary suite refresh — refining the architectural envelope to harmonize bedroom and dressing area.",
    solution:
      "Soft materials and balanced proportions create a quiet connection between the two zones.",
    cover: "/images/portfolio/primary_suite_1.jpg",
    gallery: [
      "/images/portfolio/primary_suite_1.jpg",
      "/images/portfolio/primary_suite_2.jpg",
      "/images/portfolio/primary_suite_3.jpg",
    ],
  },
  {
    slug: "purple-passion-maryland-life-magazine",
    title: "Purple Passion — Maryland Life Magazine",
    brief: "A bold, expressive project featured in Maryland Life Magazine.",
    solution:
      "Layered purple tones, custom furnishings, and dynamic contrasts — drama meets livability with an editorial sensibility.",
    cover: "/images/portfolio/purple_mood_1.jpg",
    gallery: [
      "/images/portfolio/purple_mood_1.jpg",
      "/images/portfolio/purple_mood_2.jpg",
      "/images/portfolio/purple_mood_3.jpg",
      "/images/portfolio/purple_mood_4.jpg",
      "/images/portfolio/purple_mood_5.jpg",
      "/images/portfolio/purple_mood_6.jpg",
      "/images/portfolio/purple_mood_7.jpg",
      "/images/portfolio/purple_mood_8.jpg",
      "/images/portfolio/purple_mood_9.jpg",
      "/images/portfolio/purple_mood_10.jpg",
      "/images/portfolio/purple_mood_11.jpg",
      "/images/portfolio/purple_mood_12.jpg",
    ],
  },
  {
    slug: "stainmaster-carpet-sweepstakes-winner",
    title: "Stainmaster Carpet Sweepstakes Winner",
    brief: "A vibrant, lifestyle-forward space for the winner of a national sweepstakes.",
    solution:
      "Saturated color, durable materials, and high-performing carpets — comfort that holds up to real life.",
    cover: "/images/portfolio/stainmaster_1.jpg",
    gallery: [
      "/images/portfolio/stainmaster_1.jpg",
      "/images/portfolio/stainmaster_2.jpg",
      "/images/portfolio/stainmaster_3.jpg",
      "/images/portfolio/stainmaster_4.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
