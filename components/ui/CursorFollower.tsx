"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");

    if (!cursor || !media.matches) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power3.out" });
    const show = () => cursor.classList.add("is-visible");
    const move = (event: MouseEvent) => {
      show();
      xTo(event.clientX);
      yTo(event.clientY);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden className="cursor-follower pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal mix-blend-difference opacity-0 transition-opacity duration-200 [&.is-visible]:opacity-100" />;
}
