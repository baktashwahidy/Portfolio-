import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { CursorFollower } from "@/components/ui/CursorFollower";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Brand Identity Designer",
    "Arabic Branding",
    "English Branding",
    "Social Media Designer",
    "Logo Design",
    "Dubai",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <CursorFollower />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
