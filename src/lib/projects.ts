export type Project = {
  slug: string;
  title: string;
  brief: string;
  solution: string;
  challenges?: string;
  cover?: string;
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
    cover: "/images/portfolio/confusing_condo.png",
    gallery: [
      "/images/portfolio/confusing_condo.png",
    ],
  },
  {
    slug: "bringing-a-great-room-into-scale",
    title: "Bringing a Great Room Into Scale",
    brief:
      "A very large family room — not the primary TV space — home to four young children, with the husband's turntable and record collection at its heart.",
    solution:
      "A grown-up retreat scaled with proportioned furnishings and layered textures. Media storage that celebrates the record collection.",
    cover: "/images/portfolio/great_room_1.png",
    gallery: [
      "/images/portfolio/great_room_1.png",
      "/images/portfolio/great_room_2.png",
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
    cover: "/images/portfolio/adding_character_1.png",
    gallery: [
      "/images/portfolio/adding_character_1.png",
      "/images/portfolio/adding_character_2.png",
      "/images/portfolio/adding_character_3.png",
      "/images/portfolio/adding_character_4.png",
      "/images/portfolio/adding_character_5.png",
      "/images/portfolio/adding_character_6.png",
    ],
  },
  {
    slug: "historic-ellicott-city-decorators-showhouse",
    title: "Historic Ellicott City Decorators' Showhouse",
    brief:
      "A jewel-box space celebrating the home's history while feeling fresh and contemporary.",
    solution:
      "Creative storage, custom botanical art, and a bold over-scaled mirror with integrated sconces create drama in a small footprint.",
    cover: "/images/portfolio/HEC_showhouse_1.png",
    gallery: [
      "/images/portfolio/HEC_showhouse_1.png",
      "/images/portfolio/HEC_showhouse_2.png",
      "/images/portfolio/HEC_showhouse_3.png",
      "/images/portfolio/HEC_showhouse_4.png",
    ],
  },
  {
    slug: "showhouse-teen-lounge",
    title: "Showhouse Teen Lounge",
    brief:
      "An attic bedroom with original slat ceilings and unusual window placement, transformed into a relaxed boho retreat.",
    solution:
      "Layered rugs, global textiles, and eclectic décor — a generous lounge area paired with a quiet workspace.",
    cover: "/images/portfolio/showhouse_teen_lounge_1.png",
    gallery: [
      "/images/portfolio/showhouse_teen_lounge_1.png",
      "/images/portfolio/showhouse_teen_lounge_2.png",
      "/images/portfolio/showhouse_teen_lounge_3.png",
    ],
  },
  {
    slug: "model-apartment-one-bedroom",
    title: "Model Apartment — One Bedroom",
    brief:
      "A contemporary one-bedroom model unit styled to appeal to prospective residents.",
    solution:
      "Cohesive finishes, efficient layouts, and warm, welcoming décor that lets the architecture lead.",
    cover: "/images/portfolio/model_apartment_1_bedroom_1.png",
    gallery: [
      "/images/portfolio/model_apartment_1_bedroom_1.png",
      "/images/portfolio/model_apartment_1_bedroom_2.png",
      "/images/portfolio/model_apartment_1_bedroom_3.png",
      "/images/portfolio/model_apartment_1_bedroom_4.png",
      "/images/portfolio/model_apartment_1_bedroom_5.png",
      "/images/portfolio/model_apartment_1_bedroom_6.png",
      "/images/portfolio/model_apartment_1_bedroom_7.png",
      "/images/portfolio/model_apartment_1_bedroom_8.png",
      "/images/portfolio/model_apartment_1_bedroom_9.png",
      "/images/portfolio/model_apartment_1_bedroom_10.png",
      "/images/portfolio/model_apartment_1_bedroom_11.png",
    ],
  },
  {
    slug: "model-apartment-two-bedroom",
    title: "Model Apartment — Two Bedroom",
    brief:
      "A two-bedroom model apartment highlighting smart space planning and lifestyle flexibility.",
    solution: "Inviting color palettes and considered layouts suited for modern renters.",
    cover: "/images/portfolio/model_apartment_2_bedroom_7.png",
    gallery: [
      "/images/portfolio/model_apartment_2_bedroom_1.png",
      "/images/portfolio/model_apartment_2_bedroom_2.png",
      "/images/portfolio/model_apartment_2_bedroom_3.png",
      "/images/portfolio/model_apartment_2_bedroom_4.png",
      "/images/portfolio/model_apartment_2_bedroom_5.png",
      "/images/portfolio/model_apartment_2_bedroom_6.png",
      "/images/portfolio/model_apartment_2_bedroom_7.png",
      "/images/portfolio/model_apartment_2_bedroom_8.png",
      "/images/portfolio/model_apartment_2_bedroom_9.png",
      "/images/portfolio/model_apartment_2_bedroom_10.png",
      "/images/portfolio/model_apartment_2_bedroom_11.png",
      "/images/portfolio/model_apartment_2_bedroom_12.png",
      "/images/portfolio/model_apartment_2_bedroom_13.png",
    ],
  },
  {
    slug: "primary-bedroom-with-dressing-area",
    title: "Primary Bedroom with Dressing Area",
    brief:
      "A primary suite refresh — refining the architectural envelope to harmonize bedroom and dressing area.",
    solution:
      "Soft materials and balanced proportions create a quiet connection between the two zones.",
    cover: "/images/portfolio/primary_bedroom_1.png",
    gallery: [
      "/images/portfolio/primary_bedroom_1.png",
      "/images/portfolio/primary_bedroom_2.png",
      "/images/portfolio/primary_bedroom_3.png",
    ],
  },
  {
    slug: "purple-passion-maryland-life-magazine",
    title: "Purple Passion — Maryland Life Magazine",
    brief: "A bold, expressive project featured in Maryland Life Magazine.",
    solution:
      "Layered purple tones, custom furnishings, and dynamic contrasts — drama meets livability with an editorial sensibility.",
    cover: "/images/portfolio/purple_passion_1.png",
    gallery: [
      "/images/portfolio/purple_passion_1.png",
      "/images/portfolio/purple_passion_2.png",
      "/images/portfolio/purple_passion_3.png",
      "/images/portfolio/purple_passion_4.png",
      "/images/portfolio/purple_passion_5.png",
      "/images/portfolio/purple_passion_6.png",
      "/images/portfolio/purple_passion_7.png",
      "/images/portfolio/purple_passion_8.png",
    ],
  },
  {
    slug: "stainmaster-carpet-sweepstakes-winner",
    title: "Stainmaster Carpet Sweepstakes Winner",
    brief: "A vibrant, lifestyle-forward space for the winner of a national sweepstakes.",
    solution:
      "Saturated color, durable materials, and high-performing carpets — comfort that holds up to real life.",
    cover: "/images/portfolio/stainmaster_1.png",
    gallery: [
      "/images/portfolio/stainmaster_1.png",
      "/images/portfolio/stainmaster_2.png",
      "/images/portfolio/stainmaster_3.png",
      "/images/portfolio/stainmaster_4.png",
    ],
  },
  {
    slug: "umbrian-wine-lounge-laundry-room",
    title: "Umbrian Wine Lounge / Laundry Room",
    brief:
      "A historic residence in Montefalco, Italy needed a single built-in piece to serve as a wine bar with storage, conceal a large washer and dryer, and evoke the warmth of a wine lounge and gaming area — all while respecting the ancient dwelling's traditional character.",
    solution:
      "Custom built-in cabinetry designed in collaboration with a local carpenter — wood species and stain matched to the original ceiling beams, open shelving for practical storage and display, finished to the quality of fine furniture. Modern conveniences disappear; the room reads as always having been there.",
    gallery: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
