import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/ui/Reveal";
import { getNextProject, getProjectBySlug, getPublishedProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  return (
    <article className="pb-[clamp(5.5rem,11vw,11.5rem)] pt-28 sm:pt-36 lg:pt-40">
      <div className="page-shell">
        <Link href="/work" className="text-link"><ArrowLeft aria-hidden size={14} strokeWidth={1.7} />All work</Link>
        <div className="mt-12 grid gap-7 border-t border-ink/20 pt-4 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow">{project.category} / {project.year}</p>
            <h1 className="display-lg mt-7">{project.title}<span className="text-cobalt">.</span></h1>
          </div>
          <p className="body-lg self-end text-quiet lg:col-span-4">{project.shortDescription}</p>
        </div>

        <div className="project-image-wrap mt-14 aspect-[16/10] sm:mt-20 sm:aspect-[16/10]">
          <Image src={project.coverImage.src} alt={project.coverImage.alt} fill priority sizes="(min-width: 1536px) 1440px, 100vw" className="object-cover" />
        </div>

        <div className="mt-12 grid gap-10 border-t border-ink/20 pt-5 md:grid-cols-[0.7fr_1.3fr] md:gap-16 lg:mt-20 lg:grid-cols-[0.55fr_1.1fr_0.85fr] lg:gap-20">
          <p className="eyebrow">Project details</p>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {Object.entries(project.details).map(([label, value]) => (
              <div key={label}>
                <p className="eyebrow text-quiet">{label}</p>
                <p className="mt-2 text-[14px] font-bold capitalize">{value}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow text-quiet">Services</p>
            <ul className="mt-3 space-y-2 text-[14px] font-bold">
              {project.services.map((service) => <li key={service}>{service}</li>)}
            </ul>
            <p className="eyebrow mt-8 text-quiet">Tools</p>
            <ul className="mt-3 space-y-2 text-[14px] font-bold">
              {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-16 lg:mt-32 lg:gap-28">
          {Object.entries(project.caseStudy).map(([heading, body], index) => (
            <Reveal key={heading} className="grid gap-5 border-t border-ink/20 pt-4 lg:grid-cols-12 lg:gap-8">
              <p className="eyebrow lg:col-span-3">0{index + 1} / {heading}</p>
              <p className="max-w-3xl text-[clamp(1.4rem,2.7vw,2.8rem)] font-bold leading-[1.08] tracking-display lg:col-span-9">{body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-5 sm:mt-32 sm:grid-cols-2">
          {project.images.map((image) => (
            <div key={image.src} className="project-image-wrap aspect-[16/10] last:sm:mt-[16%]">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-ink/20 pt-5 sm:mt-32 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-quiet">Next project</p>
            <Link href={`/work/${nextProject.slug}`} className="mt-3 inline-flex items-center gap-3 text-[clamp(2rem,4vw,4.5rem)] font-bold leading-none tracking-display transition-colors hover:text-cobalt">{nextProject.title}<ArrowUpRight aria-hidden size={24} strokeWidth={1.5} /></Link>
          </div>
          <Link href="/work" className="text-link">Browse archive</Link>
        </div>
      </div>
    </article>
  );
}
