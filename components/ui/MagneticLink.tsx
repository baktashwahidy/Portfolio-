"use client";

import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function MagneticLink({ href, children, className = "", external = false }: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const element = linkRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    gsap.to(element, {
      x: (event.clientX - bounds.left - bounds.width / 2) * 0.1,
      y: (event.clientY - bounds.top - bounds.height / 2) * 0.1,
      duration: 0.35,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleLeave = () => {
    if (linkRef.current) gsap.to(linkRef.current, { x: 0, y: 0, duration: 0.55, ease: "power3.out" });
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight aria-hidden size={15} strokeWidth={1.8} />
    </>
  );
  const classes = `text-link ${className}`;

  const useAnchor = external || href.startsWith("http") || href.startsWith("mailto:");

  if (useAnchor) {
    return (
      <a ref={linkRef} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={classes} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        {content}
      </a>
    );
  }

  return (
    <Link ref={linkRef} href={href} className={classes} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {content}
    </Link>
  );
}
