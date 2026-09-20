export const siteConfig = {
  name: "Baktash",
  title: "Brand Identity Designer | Social Media Designer",
  description:
    "Baktash builds distinctive brand identities and visual systems for Arabic and English brands.",
  email: "baktashwahidy@outlook.com",
  location: "Dubai · Working worldwide",
  nav: [
    { label: "Work", href: "/#work", ecosystem: false },
    { label: "Services", href: "/#services", ecosystem: false },
    { label: "About", href: "/#about", ecosystem: false },
    { label: "IMKON", href: "/imkon", ecosystem: true },
    { label: "Shop", href: "/shop", ecosystem: true },
    { label: "Hire me", href: "https://www.upwork.com/freelancers/baktash", ecosystem: true },
    { label: "Contact", href: "/#contact", ecosystem: false },
  ],
  // Replace these destination URLs with Baktash's live profiles before launch.
  socialLinks: [
    { label: "Upwork", href: "https://upwork.com/freelancers/baktash" },
    { label: "Fiverr", href: "https://www.fiverr.com/baktashwahidy" },
    { label: "Freelancer", href: "https://www.freelancer.com/u/baktashwahidy" },
    { label: "Contra", href: "https://contra.com/baktashwahidy" },
    { label: "Preply", href: "https://preply.com/en/tutor/7711340" },
    { label: "Behance", href: "https://www.behance.net/baktashwahidy" },
    { label: "Instagram", href: "https://www.instagram.com/baktashwahidy/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/baktashwahidy/" },
  ],
} as const;

export const services = [
  "Brand Identity Design",
  "Brand Strategy & Visual Branding",
  "Logo Design & Logo Systems",
  "Visual Identity Design",
  "Brand Guidelines & Brand Style Guides",
  "Social Media Design",
  "Social Media Branding",
  "Social Media Templates",
  "Instagram & LinkedIn Design",
  "Meta Ads Design",
  "Arabic Branding & English Branding",
  "Marketing & Promotional Design",
  "Business Cards & Stationery Design",
  "Packaging Design",
  "Print & Digital Design",
  "Pitch Deck Design",
] as const;

export const serviceGroups = [
  {
    number: "01",
    title: "Brand foundations",
    description: "The strategic and visual core that makes a business feel clear, credible and distinct.",
    services: services.slice(0, 5),
  },
  {
    number: "02",
    title: "Social presence",
    description: "A recognisable content system designed to move consistently across fast-changing platforms.",
    services: services.slice(5, 10),
  },
  {
    number: "03",
    title: "Bilingual systems",
    description: "Arabic and English visual languages created as one coherent, considered brand experience.",
    services: services.slice(10, 11),
  },
  {
    number: "04",
    title: "Campaigns & touchpoints",
    description: "The materials that carry a brand from first impression to daily interaction.",
    services: services.slice(11),
  },
] as const;

export const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Figma",
  "Canva",
] as const;
