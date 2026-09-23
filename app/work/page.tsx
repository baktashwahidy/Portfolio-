import type { Metadata } from "next";

import { ProjectIndex } from "@/components/work/ProjectIndex";
import { getPublishedProjects } from "@/lib/projects";
import { JsonLd } from "@/components/seo/JsonLd";

const siteUrl = "https://www.baktashwahidy.com";

export const metadata: Metadata = {
  title: "Selected Work | Baktash Wahidy",
  description:
    "Selected brand identity, logo design, visual identity, packaging, Arabic and English branding, and social media design projects by Baktash Wahidy.",
  alternates: {
    canonical: `${siteUrl}/work`,
  },
};

export default function WorkPage() {
  const projects = getPublishedProjects();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/work#page`,
    url: `${siteUrl}/work`,
    name: "Selected Work | Baktash Wahidy",
    description:
      "Selected brand identity, visual identity, packaging, and social media design projects by Baktash Wahidy.",
    inLanguage: "en",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
  };

  return (
    <>
      <JsonLd data={schema} />
    <section className="page-shell pb-[clamp(5.5rem,11vw,11.5rem)] pt-32 sm:pt-40 lg:pt-48">
      <div className="grid gap-5 border-t border-ink/20 pt-4 sm:grid-cols-[minmax(8rem,1fr)_minmax(0,3fr)] sm:gap-8">
        <p className="eyebrow">01 / Archive</p>
        <div>
          <h1 className="display-lg">Selected work<span className="text-cobalt">.</span></h1>
          <p className="mt-7 max-w-xl body-lg text-quiet">A selection of identity systems, bilingual brand worlds and social-first design frameworks.</p>
        </div>
      </div>
      <ProjectIndex projects={projects} />
    </section>
    </>
  );
}
