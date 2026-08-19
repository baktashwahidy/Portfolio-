import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <div className="mt-16 border-t border-ink/20 sm:mt-24">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 0.025}>
          <article className="group grid gap-4 border-b border-ink/20 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6 sm:py-6 lg:grid-cols-[5.5rem_1.35fr_0.7fr_0.6fr_auto]">
            <p className="eyebrow text-quiet">0{index + 1}</p>
            <Link href={`/work/${project.slug}`} className="flex items-center gap-4 sm:gap-6">
              <div className="relative hidden h-16 w-20 shrink-0 overflow-hidden bg-[#ddd9cf] sm:block">
                <Image src={project.coverImage.src} alt="" fill sizes="80px" className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-110" />
              </div>
              <div>
                <h2 className="text-[clamp(1.85rem,3vw,3.3rem)] font-bold leading-none tracking-display transition-colors group-hover:text-cobalt">{project.title}</h2>
                <p className="mt-2 text-[12px] leading-relaxed text-quiet sm:hidden">{project.shortDescription}</p>
              </div>
            </Link>
            <p className="hidden text-[12px] leading-relaxed text-quiet lg:block">{project.category}</p>
            <p className="hidden text-[12px] text-quiet sm:block">{project.year}</p>
            <Link href={`/work/${project.slug}`} className="flex h-9 w-9 place-items-center border border-ink/30 transition-colors group-hover:bg-ink group-hover:text-canvas"><ArrowUpRight aria-hidden size={15} strokeWidth={1.7} /></Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
