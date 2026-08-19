"use client";

import { ArrowDown, Plus } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { MagneticLink } from "@/components/ui/MagneticLink";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        yPercent: 115,
        duration: 1.08,
        stagger: 0.1,
        delay: 0.16,
        ease: "power4.out",
      });
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 15,
        duration: 0.75,
        delay: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });

      const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      const onMove = (event: MouseEvent) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        parallaxItems.forEach((item) => {
          const depth = Number(item.dataset.parallax ?? 1);
          gsap.to(item, {
            x: x * depth * 20,
            y: y * depth * 20,
            duration: 1.1,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      hero.addEventListener("mousemove", onMove);
      return () => hero.removeEventListener("mousemove", onMove);
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="relative flex min-h-[760px] overflow-hidden pb-8 pt-28 sm:min-h-[840px] sm:pb-10 sm:pt-36 lg:min-h-screen lg:pt-40">
      <div aria-hidden className="absolute inset-y-0 left-[calc(50%-1px)] hidden w-px bg-ink/10 lg:block" />
      <div aria-hidden data-parallax="0.55" className="absolute -right-10 top-[20%] h-24 w-24 rounded-full border border-ink/50 sm:right-[16%] sm:h-36 sm:w-36" />
      <div aria-hidden data-parallax="1.35" className="absolute right-[8%] top-[40%] hidden h-4 w-4 bg-ember sm:block" />
      <div aria-hidden data-parallax="0.85" className="absolute bottom-[16%] left-[7%] hidden h-16 w-16 rotate-45 border border-cobalt sm:block" />
      <div aria-hidden data-parallax="1.4" className="absolute bottom-[28%] right-[20%] hidden text-[13px] font-bold tracking-[0.2em] text-cobalt lg:block">+</div>

      <div className="page-shell relative flex w-full flex-col">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <p data-hero-fade className="eyebrow max-w-48 leading-[1.55]">
            Independent designer<br />Dubai · Working worldwide
          </p>
          <p data-hero-fade className="eyebrow self-start leading-[1.55] lg:justify-self-end lg:text-right">
            Brand identity · Social design<br />Arabic × English brands
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-20 sm:pt-28">
          <h1 aria-label="Baktash" className="display-xl relative z-10">
            <span className="block overflow-hidden pb-[0.13em]"><span data-hero-reveal className="block">BAK</span></span>
            <span className="block overflow-hidden pb-[0.13em]"><span data-hero-reveal className="block pl-[0.23em]">TASH<span className="text-cobalt">.</span></span></span>
          </h1>

          <div data-parallax="0.4" className="absolute -right-1 top-[13%] hidden w-[28%] max-w-[330px] border border-ink bg-signal p-4 sm:block lg:right-[8%] lg:top-[3%] lg:p-5">
            <div className="flex items-start justify-between">
              <span className="eyebrow text-ink">01 / Identity</span>
              <Plus aria-hidden size={15} />
            </div>
            <p className="mt-14 text-[clamp(1.1rem,2vw,1.85rem)] font-bold leading-[0.95] tracking-display">Distinct by design.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-ink/25 pt-4 sm:mt-14 sm:grid-cols-[1fr_auto] sm:items-end lg:grid-cols-[1.1fr_1fr_auto]">
          <p data-hero-fade className="body-lg max-w-xl">I build distinctive brand identities and visual systems for Arabic and English brands.</p>
          <div data-hero-fade className="flex flex-wrap gap-x-7 gap-y-4 sm:justify-self-end">
            <MagneticLink href="#work">View selected work</MagneticLink>
            <MagneticLink href="#contact">Work with me</MagneticLink>
          </div>
          <Link data-hero-fade href="#work" aria-label="Scroll to selected work" className="hidden h-10 w-10 place-items-center border border-ink/30 transition-colors hover:bg-ink hover:text-canvas lg:grid">
            <ArrowDown aria-hidden size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
