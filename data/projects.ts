export const projectCategories = [
  "Brand Identity",
  "Logo Design",
  "Visual Identity",
  "Social Media Branding",
  "Packaging",
  "Pitch Deck",
  "Marketing Design",
  "Arabic & English Branding",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  shortDescription: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
  services: string[];
  tools: string[];
  details: {
    sector: string;
    scope: string;
    languages: string;
  };
  caseStudy: {
    overview: string;
    challenge: string;
    approach: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "meridian-house",
    title: "Meridian House",
    category: "Brand Identity",
    client: "Meridian House",
    year: "2025",
    shortDescription:
      "An assured visual identity for a hospitality concept where local ritual meets contemporary living.",
    coverImage: {
      src: "/images/projects/meridian-cover.svg",
      alt: "Meridian House brand identity composition",
    },
    images: [
      { src: "/images/projects/meridian-cover.svg", alt: "Meridian House wordmark study" },
      { src: "/images/projects/meridian-detail.svg", alt: "Meridian House menu and stationery" },
    ],
    services: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Print Design"],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
    details: { sector: "Hospitality", scope: "Identity system", languages: "English · Arabic" },
    caseStudy: {
      overview:
        "Meridian House is a destination built around slow hospitality, expressive food and shared rituals. The identity needed to feel polished without losing its warmth.",
      challenge:
        "Create a recognisable system that could move naturally from an architectural setting to intimate printed moments, in both English and Arabic.",
      approach:
        "We paired an elegant high-contrast wordmark with a modular monogram and a tightly controlled field of colour. Bilingual typography was treated as one composition rather than a translation.",
      outcome:
        "The resulting system gives the team a clear, flexible visual language across menus, packaging, social content and environmental touchpoints.",
    },
  },
  {
    slug: "noura-studio",
    title: "Noura Studio",
    category: "Arabic & English Branding",
    client: "Noura Studio",
    year: "2025",
    shortDescription:
      "A bilingual identity that brings clarity, rhythm and quiet confidence to a modern beauty studio.",
    coverImage: {
      src: "/images/projects/noura-cover.svg",
      alt: "Noura Studio bilingual identity artwork",
    },
    images: [
      { src: "/images/projects/noura-cover.svg", alt: "Noura Studio typography" },
      { src: "/images/projects/noura-detail.svg", alt: "Noura Studio social layout" },
    ],
    services: ["Arabic Branding", "English Branding", "Logo System", "Social Media Branding"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
    details: { sector: "Beauty", scope: "Bilingual launch", languages: "Arabic · English" },
    caseStudy: {
      overview:
        "Noura Studio wanted an identity with the sensitivity of a personal recommendation and the precision of an established editorial brand.",
      challenge:
        "The Arabic and English identities had to carry equal weight while remaining adaptable for a fast-moving social content calendar.",
      approach:
        "The system uses a generous typographic cadence, a signature warm red and image framing rules that create recognisable rhythm across languages and formats.",
      outcome:
        "Noura launched with a cohesive presence that feels considered on a storefront, a story sequence and a small-format appointment card.",
    },
  },
  {
    slug: "kivo-objects",
    title: "Kivo Objects",
    category: "Packaging",
    client: "Kivo Objects",
    year: "2024",
    shortDescription:
      "A tactile packaging and visual system for everyday objects made to be kept, shared and collected.",
    coverImage: {
      src: "/images/projects/kivo-cover.svg",
      alt: "Kivo Objects packaging design artwork",
    },
    images: [
      { src: "/images/projects/kivo-cover.svg", alt: "Kivo Objects package design" },
      { src: "/images/projects/kivo-detail.svg", alt: "Kivo Objects colour system" },
    ],
    services: ["Packaging Design", "Visual Identity", "Art Direction", "Print Design"],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    details: { sector: "Lifestyle", scope: "Packaging range", languages: "English" },
    caseStudy: {
      overview:
        "Kivo makes useful objects with a playful point of view. The new system needed to make a growing range feel immediately related.",
      challenge:
        "Design a compact toolkit that could scale across shapes and sizes without relying on disposable trend language.",
      approach:
        "We created a bold wordmark, a coded colour sequence and an oversized graphic device that shifts in crop and scale across each pack.",
      outcome:
        "The packaging is confident from a distance and rich in detail up close, giving the range a clear shelf presence and a collectible feel.",
    },
  },
  {
    slug: "maraq-labs",
    title: "Maraq Labs",
    category: "Social Media Branding",
    client: "Maraq Labs",
    year: "2024",
    shortDescription:
      "A sharp social-first visual language for a food innovation company communicating complex ideas simply.",
    coverImage: {
      src: "/images/projects/maraq-cover.svg",
      alt: "Maraq Labs social media identity composition",
    },
    images: [
      { src: "/images/projects/maraq-cover.svg", alt: "Maraq Labs campaign direction" },
      { src: "/images/projects/maraq-detail.svg", alt: "Maraq Labs content templates" },
    ],
    services: ["Social Media Branding", "Content Templates", "Marketing Design", "Pitch Deck Design"],
    tools: ["Figma", "Adobe Photoshop", "Canva"],
    details: { sector: "Food innovation", scope: "Social launch system", languages: "English · Arabic" },
    caseStudy: {
      overview:
        "Maraq Labs turns research into food experiences. Its audience ranges from curious consumers to potential partners and investors.",
      challenge:
        "Build a social system that can explain nuanced ideas while feeling energetic, human and immediately recognisable.",
      approach:
        "An adaptable grid, oversized data points and vivid image treatments create a set of rules that any campaign can inhabit.",
      outcome:
        "The team gained a practical content kit that brings consistency to organic social, paid campaigns and investor-facing materials.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
