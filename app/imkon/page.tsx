import type { Metadata } from "next";

import { FutureDestination } from "@/components/ecosystem/FutureDestination";
import { ecosystemDestinations } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "IMKON Academy | Practical Design & Digital Education",
  description:
    "IMKON Academy offers practical courses, programs, workshops, masterclasses, seminars, and bootcamps in design, freelancing, AI, and digital skills.",
  keywords: [
    "IMKON Academy",
    "Graphic Design Academy",
    "Graphic Design Courses",
    "Branding Courses",
    "Freelancing Academy",
    "Freelancing Courses",
    "AI for Designers",
    "Design Workshops",
    "Design Seminars",
    "Digital Skills",
  ],
  alternates: {
    canonical: "https://www.baktashwahidy.com/imkon",
  },
  openGraph: {
    title: "IMKON Academy | Practical Design & Digital Education",
    description:
      "Practical learning for designers, freelancers, creators, and digital professionals.",
    url: "https://www.baktashwahidy.com/imkon",
    siteName: "IMKON Academy",
    type: "website",
  },
};

export default function ImkonPage() {
  return <FutureDestination {...ecosystemDestinations.imkon} />;
}