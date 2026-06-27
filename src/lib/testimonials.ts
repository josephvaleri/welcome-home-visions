export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  draft?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jill understood our old Umbrian farmhouse in a way no local decorator had — she knew exactly how to honor the stone and beams while making it actually liveable.",
    name: "Sarah & Tom M.",
    location: "London, UK (property in Umbria)",
    draft: true,
  },
  {
    quote:
      "Working with Jill virtually was seamless. The 3D rendering was so accurate we ordered everything from the list without hesitation. The room looks exactly as she designed it.",
    name: "Claire D.",
    location: "New York, USA",
    draft: true,
  },
  {
    quote:
      "I wanted the warmth of an Italian home without it feeling like a theme restaurant. Jill got it immediately — the result is personal and beautiful.",
    name: "James R.",
    location: "Melbourne, Australia",
    draft: true,
  },
];
