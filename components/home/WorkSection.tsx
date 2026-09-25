import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectThumbnailCarousel } from "@/components/home/ProjectThumbnailCarousel";

export function WorkSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="work"
      className="scroll-mt-20 bg-ink py-[clamp(5.5rem,11vw,11.5rem)] text-canvas"
    >
      <div className="page-shell">
        <SectionHeading
          index="02"
          label="Selected work"
          className="border-canvas/25"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-xl max-w-3xl">
              Visual systems made to be recognised.
            </h2>

            <p className="eyebrow text-canvas/55">2024 — 2025</p>
          </div>
        </SectionHeading>

        <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-32 lg:mt-32">
          {featuredProjects.map((project, index) => {
            const isOffset = index % 2 !== 0;

            return (
              <Reveal key={project.slug}>
                <article className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
                  <div
                    className={
                      isOffset
                        ? "lg:order-2 lg:col-span-7"
                        : "lg:col-span-8"
                    }
                  >
                    <ProjectThumbnailCarousel project={project} />
                  </div>

                  <div
                    className={`flex flex-col gap-5 lg:pb-1 ${
                      isOffset
                        ? "lg:order-1 lg:col-span-5 lg:pr-[12%]"
                        : "lg:col-span-4 lg:pl-[8%]"
                    }`}
                  >
                    <div className="flex items-center justify-between border-t border-canvas/25 pt-3 lg:border-none lg:pt-0">
                      <p className="eyebrow text-canvas/55">
                        0{index + 1} / {project.category}
                      </p>

                      <p className="eyebrow text-canvas/55 lg:hidden">
                        {project.year}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[clamp(2rem,3.4vw,4rem)] font-bold leading-[0.9] tracking-display">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-canvas/70">
                        {project.shortDescription}
                      </p>
                    </div>

                    <a
                      href={`/work/${project.slug}`}
                      className="text-link w-fit text-canvas hover:text-signal"
                    >
                      View project
                      <span aria-hidden className="inline-flex">
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}