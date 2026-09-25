import type { Metadata } from "next";

import { ShopDestination } from "@/components/ecosystem/ShopDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON Shop | Printed & Personalized Design Goods",
  description:
    "IMKON Shop offers printed and personalized design goods including metal prints, custom stickers, premium invitation cards, and future collections.",
  alternates: {
    canonical: "https://www.baktashwahidy.com/shop",
  },
  openGraph: {
    title: "IMKON Shop | Printed & Personalized Design Goods",
    description:
      "Printed and personalized design goods from IMKON Shop.",
    url: "https://www.baktashwahidy.com/shop",
    siteName: "Baktash Wahidy",
    type: "website",
  },
};

export default function ShopPage() {
  return <ShopDestination {...ecosystemDestinations.shop} />;
}