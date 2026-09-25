import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tools } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#dedbd2] py-[clamp(5.5rem,11vw,11.5rem)]"
    >
      <div className="page-shell">
        <SectionHeading index="01" label="About">
          <h2 className="heading-xl max-w-4xl">
            A design practice for brands with something meaningful to say.
          </h2>
        </SectionHeading>

        <div className="mt-16 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[6/5] overflow-hidden">
              <Image
                src="/images/projects/Baktash.jpg"
                alt="Baktash, Brand Identity Designer"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-5 lg:pl-[10%]">
            <Reveal>
              <p className="body-lg max-w-md">
                Baktash Wahidy is a Brand Identity Designer and Social Media
                Designer helping startups, growing businesses and personal
                brands become distinct, consistent and recognisable.
              </p>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-quiet">
                The work combines brand identity, logo systems, visual
                identity, brand guidelines, social media branding and marketing
                design into visual worlds that hold together wherever people
                meet a brand.
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="mt-14 border-t border-ink/20 pt-4 sm:mt-20"
            >
              <p className="eyebrow">Tools of the practice</p>

              <ul className="mt-5 space-y-3">
                {tools.map((tool, index) => (
                  <li
                    key={tool}
                    className="flex items-baseline justify-between text-[15px] font-bold"
                  >
                    <span>{tool}</span>
                    <span className="eyebrow text-quiet">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="text-link mt-10">
                Start a conversation
                <ArrowUpRight aria-hidden size={15} strokeWidth={1.8} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}