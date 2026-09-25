"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { clientFeedback } from "@/data/feedback";

const AUTO_SPEED = 0.06;
const DRAG_FACTOR = 0.42;

export function ClientFeedbackSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  const isDraggingRef = useRef(false);
  const pointerStartRef = useRef(0);
  const positionStartRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  const loopedFeedback = [...clientFeedback, ...clientFeedback];

  useEffect(() => {
    const animate = (time: number) => {
      const track = trackRef.current;

      if (!track) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isDraggingRef.current) {
        positionRef.current += delta * AUTO_SPEED;

        const loopWidth = track.scrollWidth / 2;

        if (loopWidth > 0 && positionRef.current >= loopWidth) {
          positionRef.current -= loopWidth;
        }

        track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    if (!track) return;

    isDraggingRef.current = true;
    setIsDragging(true);

    pointerStartRef.current = event.clientX;
    positionStartRef.current = positionRef.current;

    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDraggingRef.current) return;

    const track = trackRef.current;

    if (!track) return;

    const movement =
      (event.clientX - pointerStartRef.current) * DRAG_FACTOR;

    const loopWidth = track.scrollWidth / 2;

    let nextPosition =
      positionStartRef.current - movement;

    if (loopWidth > 0) {
      while (nextPosition < 0) {
        nextPosition += loopWidth;
      }

      while (nextPosition >= loopWidth) {
        nextPosition -= loopWidth;
      }
    }

    positionRef.current = nextPosition;

    track.style.transform =
      `translate3d(${-positionRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    isDraggingRef.current = false;
    setIsDragging(false);

    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="client-feedback"
      className="scroll-mt-20 overflow-hidden bg-canvas pb-[clamp(4.5rem,5vw,5rem)] pt-[clamp(5.5rem,11vw,9rem)]"
    >
      <div className="page-shell">
        <div className="grid gap-8 border-t border-ink/20 pt-4 sm:grid-cols-[minmax(8rem,1fr)_minmax(0,3fr)] sm:gap-8">
          <p className="eyebrow">
            04 / Client feedback
          </p>

          <Reveal>
            <h2 className="heading-xl max-w-3xl">
              What clients say about working together.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14 overflow-hidden sm:mt-20">
          <div
            ref={trackRef}
            className={`flex w-max select-none gap-5 touch-pan-y ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              transform: "translate3d(0, 0, 0)",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {loopedFeedback.map((item, index) => (
              <article
                key={`${item.platform}-${item.client}-${index}`}
                className="w-[280px] shrink-0 sm:w-[330px] lg:w-[360px]"
              >
                <div className="relative aspect-[18/10] overflow-hidden rounded-[18px] bg-ink/5">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="360px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow text-cobalt">
                      Feedback from {item.platform}
                    </p>

                    {item.rating && (
                      <p className="eyebrow text-quiet">
                        {item.rating}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
                    <p className="text-[14px] font-bold">
                      {item.client}
                    </p>

                    {item.role && (
                      <p className="text-[12px] text-quiet">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}