import { ArrowUpRight } from "lucide-react";

import { MagneticLink } from "@/components/ui/MagneticLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ink pb-4 pt-[clamp(5.5rem,6vw,6rem)] text-canvas"
    >
      <div className="page-shell">
        <div>
          {/* Contact Heading */}
          <div className="grid gap-5 border-t border-canvas/25 pt-4 sm:grid-cols-[minmax(8rem,1fr)_minmax(0,3fr)] sm:gap-8">
            <p className="eyebrow text-canvas/55">
              05 / Contact
            </p>

            <Reveal>
              <h2 className="display-lg max-w-5xl">
                Let&apos;s build a brand people remember
                <span className="text-signal">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Contact Details */}
          <Reveal
            delay={0.12}
            className="mt-14 grid gap-8 sm:mt-18 lg:grid-cols-[1.2fr_1fr_auto] lg:items-end"
          >
            <div>
              <p className="eyebrow text-canvas/55">
                New projects & collaborations
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-[clamp(1.3rem,2.5vw,2.25rem)] font-bold tracking-display transition-colors hover:text-signal"
              >
                {siteConfig.email}
              </a>
            </div>

            <p className="max-w-sm text-[15px] leading-relaxed text-canvas/65">
              Have a project, an idea or a brand in need of direction? Tell me
              where you are now and where you want to go.
            </p>

            <MagneticLink
              href={`mailto:${siteConfig.email}`}
              className="w-fit text-canvas hover:text-signal"
            >
              Send an enquiry
            </MagneticLink>
          </Reveal>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 sm:mt-16">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label text-canvas/65 transition-colors hover:text-signal"
              >
                {social.label}
                <ArrowUpRight aria-hidden size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}