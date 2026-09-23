import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { CursorFollower } from "@/components/ui/CursorFollower";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

const siteUrl = "https://www.baktashwahidy.com";
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const socialProfiles = siteConfig.socialLinks.map((social) => social.href);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Baktash Wahidy | Brand Identity Designer & Social Media Designer",
    template: "%s | Baktash Wahidy",
  },
  description: siteConfig.description,
  applicationName: "Baktash Wahidy",
  authors: [{ name: "Baktash Wahidy", url: siteUrl }],
  creator: "Baktash Wahidy",
  publisher: "Baktash Wahidy",
  category: "Design",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Baktash Wahidy",
    title: "Baktash Wahidy | Brand Identity Designer & Social Media Designer",
    description: siteConfig.description,
    locale: "en_US",
    images: [
      {
        url: "/images/projects/Baktash.jpg",
        width: 1200,
        height: 1200,
        alt: "Baktash Wahidy, Brand Identity Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baktash Wahidy | Brand Identity Designer & Social Media Designer",
    description: siteConfig.description,
    images: ["/images/projects/Baktash.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: "Baktash Wahidy",
  alternateName: [
    "Baktash",
    "Baktash Wahedy",
    "Baktash Wahdy",
    "Baktash Wahidi",
    "Baktash Wahedi",
    "Baktash Wahidy",
    "بکتاش وحیدی",
    "بکتاش واحدی",
    "بکتاش وهیدی",
  ],
  url: siteUrl,
  image: `${siteUrl}/images/projects/Baktash.jpg`,
  jobTitle: "Brand Identity Designer & Social Media Designer",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  knowsAbout: [
    "Brand identity design",
    "Visual identity design",
    "Logo design",
    "Social media branding",
    "Arabic branding",
    "English branding",
    "Packaging design",
    "Pitch deck design",
    "Marketing design",
  ],
  sameAs: socialProfiles,
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Baktash Wahidy",
  alternateName: ["Baktash", "Baktash Wahidy Portfolio"],
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": personId },
};

const rootSchema = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <JsonLd data={rootSchema} />
        <CursorFollower />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
