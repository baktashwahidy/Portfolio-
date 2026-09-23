import type { Metadata } from "next";

import { FutureDestination } from "@/components/ecosystem/FutureDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON Shop | Baktash Wahidy",
  description: "IMKON Shop is Baktash Wahidy's future collection of printed and personalized design goods.",
  alternates: {
    canonical: "https://www.baktashwahidy.com/shop",
  },
};

export default function ShopPage() {
  return <FutureDestination {...ecosystemDestinations.shop} />;
}
