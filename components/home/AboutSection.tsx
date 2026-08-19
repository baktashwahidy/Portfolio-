import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tools } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#dedbd2] py-[clamp(5.5rem,11vw,11.5rem)]">
      <div className="page-shell">
        <SectionHeading index="03" label="About">
          <h2 className="heading-xl max-w-4xl">A design practice for brands with something meaningful to say.</h2>
        </SectionHeading>

        <div className="mt-16 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-cobalt p-6 text-canvas sm:p-9">
              <p className="eyebrow text-canvas/70">Arabic × English</p>
              <p className="absolute bottom-6 left-5 text-[clamp(6rem,19vw,15rem)] font-bold leading-[0.68] tracking-display sm:bottom-9 sm:left-8">A<span className="text-signal">/</span></p>
              <p lang="ar" dir="rtl" className="absolute right-5 top-[31%] text-[clamp(5rem,15vw,12rem)] font-bold leading-none sm:right-9">ب</p>
              <div aria-hidden className="absolute bottom-[27%] right-[14%] h-[23%] w-[1px] bg-canvas/60" />
              <div aria-hidden className="absolute right-[14%] top-[27%] h-3 w-3 bg-ember" />
              <p className="absolute bottom-7 right-6 max-w-[9rem] text-right text-[11px] font-bold uppercase leading-relaxed tracking-label sm:bottom-10 sm:right-9">One coherent system, across every language.</p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-5 lg:pl-[10%]">
            <Reveal>
              <p className="body-lg max-w-md">Baktash is a Brand Identity Designer and Social Media Designer helping startups, growing businesses and personal brands become distinct, consistent and recognisable.</p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-quiet">The work combines brand identity, logo systems, visual identity, brand guidelines, social media branding and marketing design into visual worlds that hold together wherever people meet a brand.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-14 border-t border-ink/20 pt-4 sm:mt-20">
              <p className="eyebrow">Tools of the practice</p>
              <ul className="mt-5 space-y-3">
                {tools.map((tool, index) => (
                  <li key={tool} className="flex items-baseline justify-between text-[15px] font-bold"><span>{tool}</span><span className="eyebrow text-quiet">0{index + 1}</span></li>
                ))}
              </ul>
              <a href="#contact" className="text-link mt-10">Start a conversation <ArrowUpRight aria-hidden size={15} strokeWidth={1.8} /></a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
