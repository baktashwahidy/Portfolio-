import type { Metadata } from "next";

import { ProjectIndex } from "@/components/work/ProjectIndex";
import { getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Selected brand identity, packaging and social media design work by Baktash.",
};

export default function WorkPage() {
  const projects = getPublishedProjects();

  return (
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
  );
}
