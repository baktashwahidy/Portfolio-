import type { Metadata } from "next";

import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkSection } from "@/components/home/WorkSection";
import { JsonLd } from "@/components/seo/JsonLd";

const siteUrl = "https://www.baktashwahidy.com";

export const metadata: Metadata = {
  title: "Baktash Wahidy | Brand Identity Designer & Social Media Designer",
  description:
    "Baktash Wahidy is a Brand Identity Designer and Social Media Designer specializing in brand identity, logo systems, visual identity, Arabic and English branding, and social media design.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Baktash Wahidy | Brand Identity Designer & Social Media Designer",
    description:
      "Brand identity, visual identity, Arabic and English branding, logo systems, and social media design by Baktash Wahidy.",
    url: siteUrl,
    type: "website",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: "Baktash Wahidy | Brand Identity Designer",
  description:
    "Professional portfolio of Baktash Wahidy, a Brand Identity Designer and Social Media Designer.",
  inLanguage: "en",
  mainEntity: { "@id": `${siteUrl}/#person` },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
