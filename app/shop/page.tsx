import type { Metadata } from "next";

import { FutureDestination } from "@/components/ecosystem/FutureDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON Shop",
  description: "IMKON Shop is Baktash's future collection of thoughtfully made printed goods.",
};

export default function ShopPage() {
  return <FutureDestination {...ecosystemDestinations.shop} />;
}
