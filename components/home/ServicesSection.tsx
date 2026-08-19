import { Minus, Plus } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceGroups } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 py-[clamp(5.5rem,11vw,11.5rem)]">
      <div className="page-shell">
        <SectionHeading index="02" label="Services">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="heading-xl">Built for the whole brand, not just the first impression.</h2>
            <p className="body-lg max-w-md text-quiet">From a founding mark to the daily language of a social channel, every touchpoint works as part of one clear system.</p>
          </div>
        </SectionHeading>

        <div className="mt-16 border-t border-ink/20 sm:mt-24">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.04}>
              <details className="group border-b border-ink/20" open={index === 0}>
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] gap-3 py-5 sm:grid-cols-[5.5rem_1fr_auto] sm:py-7">
                  <span className="eyebrow pt-1">{group.number}</span>
                  <span className="text-[clamp(1.65rem,3vw,3.3rem)] font-bold leading-none tracking-display">{group.title}</span>
                  <span className="mt-1 grid h-7 w-7 place-items-center border border-ink/30 transition-transform duration-300 group-open:rotate-45"><Plus aria-hidden size={14} /></span>
                </summary>
                <div className="grid gap-8 pb-8 pl-[2.5rem] sm:grid-cols-[minmax(12rem,0.85fr)_minmax(0,1.15fr)] sm:gap-12 sm:pl-[5.5rem] lg:pb-10">
                  <p className="max-w-sm text-[15px] leading-relaxed text-quiet">{group.description}</p>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {group.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-[13px] leading-snug"><Minus aria-hidden className="mt-[2px] shrink-0 text-cobalt" size={13} strokeWidth={1.8} />{service}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
