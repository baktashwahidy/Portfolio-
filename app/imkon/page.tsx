import type { Metadata } from "next";

import { FutureDestination } from "@/components/ecosystem/FutureDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON | Baktash Wahidy",
  description: "IMKON is Baktash Wahidy's future creative agency for branding, visual identity, and social design.",
  alternates: {
    canonical: "https://www.baktashwahidy.com/imkon",
  },
};

export default function ImkonPage() {
  return <FutureDestination {...ecosystemDestinations.imkon} />;
}
