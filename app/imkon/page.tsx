import type { Metadata } from "next";

import { FutureDestination } from "@/components/ecosystem/FutureDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON",
  description: "IMKON is Baktash's future creative agency for branding, visual identity and social design.",
};

export default function ImkonPage() {
  return <FutureDestination {...ecosystemDestinations.imkon} />;
}
