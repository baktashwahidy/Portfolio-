"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Person = {
  name: string;
  role: string;
  experience?: string;
  image: {
    src: string;
    alt: string;
  };
};

type Student = Person & {
  verified?: boolean;
};

type AcademyPeopleProps = {
  instructors: readonly Person[];
  students: readonly Student[];
};

type PeopleTrackProps = {
  people: readonly (Person | Student)[];
  type: "instructor" | "student";
  speed: number;
  direction: "left-to-right" | "right-to-left";
};

const DRAG_FACTOR = 0.5;

function PeopleTrack({
  people,
  type,
  speed,
  direction,
}: PeopleTrackProps) {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const groupRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const pointerStartX = useRef(0);
  const positionStartX = useRef(0);

  const [loopWidth, setLoopWidth] = useState(0);

  const isRightToLeft = direction === "right-to-left";

  const cardSize =
    type === "student"
      ? "w-[58vw] max-w-[230px] sm:w-[215px] lg:w-[240px]"
      : "w-[78vw] max-w-[340px] sm:w-[320px] lg:w-[350px]";

  const imageSizes =
    type === "student"
      ? "(min-width: 1024px) 240px, (min-width: 640px) 215px, 58vw"
      : "(min-width: 1024px) 350px, (min-width: 640px) 320px, 78vw";

  useEffect(() => {
    const element = groupRef.current;

    if (!element) {
      return;
    }

    const updateWidth = () => {
      setLoopWidth(element.offsetWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [people.length, type]);

  useEffect(() => {
    if (!loopWidth) {
      return;
    }

    x.set(isRightToLeft ? 0 : -loopWidth);
  }, [loopWidth, isRightToLeft, x]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || isDragging.current || !loopWidth) {
      return;
    }

    const distance = (speed * delta) / 1000;
    const current = x.get();

    let next = isRightToLeft
      ? current - distance
      : current + distance;

    if (isRightToLeft && next <= -loopWidth) {
      next += loopWidth;
    }

    if (!isRightToLeft && next >= 0) {
      next -= loopWidth;
    }

    x.set(next);
  });

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    isDragging.current = true;
    pointerStartX.current = event.clientX;
    positionStartX.current = x.get();

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDragging.current || !loopWidth) {
      return;
    }

    const pointerDelta =
      event.clientX - pointerStartX.current;

    let next =
      positionStartX.current +
      pointerDelta * DRAG_FACTOR;

    if (isRightToLeft) {
      while (next <= -loopWidth) {
        next += loopWidth;
      }

      while (next > 0) {
        next -= loopWidth;
      }
    } else {
      while (next >= 0) {
        next -= loopWidth;
      }

      while (next < -loopWidth) {
        next += loopWidth;
      }
    }

    x.set(next);
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    isDragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      className="relative overflow-hidden touch-pan-y select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <motion.div
        className="flex w-max cursor-grab active:cursor-grabbing"
        style={{ x }}
      >
        {/* First group */}
        <div
          ref={groupRef}
          className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6"
        >
          {people.map((person) => {
            const student =
              type === "student"
                ? (person as Student)
                : null;

            return (
              <article
                key={`${type}-${person.name}`}
                className={cardSize}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-ink/5">
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    sizes={imageSizes}
                    draggable={false}
                    className="pointer-events-none object-cover"
                  />

                  {/* Verified badge */}
                  {student?.verified && (
                    <span className="absolute bottom-3 right-3 z-10">
                      <Image
                        src="/imkon/verified.svg"
                        alt=""
                        width={50}
                        height={50}
                        draggable={false}
                        className="pointer-events-none h-50px w-50px"
                      />
                    </span>
                  )}
                </div>

                {/* Information */}
                <div className="mt-5">
                  <p className="text-sm text-quiet">
                    {person.role}

                    {person.experience && (
                      <>
                        <span className="mx-1.5">,</span>
                        {person.experience}
                      </>
                    )}
                  </p>

                  <h3 className="mt-1 text-[clamp(1.35rem,2vw,1.9rem)] font-medium leading-tight tracking-[-0.03em]">
                    {person.name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        {/* Second group for seamless loop */}
        <div className="flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6">
          {people.map((person) => {
            const student =
              type === "student"
                ? (person as Student)
                : null;

            return (
              <article
                key={`${type}-duplicate-${person.name}`}
                aria-hidden="true"
                className={cardSize}
              >
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-ink/5">
                  <Image
                    src={person.image.src}
                    alt=""
                    fill
                    sizes={imageSizes}
                    draggable={false}
                    className="pointer-events-none object-cover"
                  />

                  {student?.verified && (
                    <span className="absolute bottom-3 right-3 z-10">
                      <Image
                        src="/imkon/verified.svg"
                        alt=""
                        width={50}
                        height={50}
                        draggable={false}
                        className="pointer-events-none h-50px w-50px"
                      />
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-sm text-quiet">
                    {person.role}

                    {person.experience && (
                      <>
                        <span className="mx-1.5">,</span>
                        {person.experience}
                      </>
                    )}
                  </p>

                  <h3 className="mt-1 text-[clamp(1.35rem,2vw,1.9rem)] font-medium leading-tight tracking-[-0.03em]">
                    {person.name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export function AcademyPeople({
  instructors,
  students,
}: AcademyPeopleProps) {
  return (
    <>
      {/* Meet the Instructors */}
      <section className="mt-24 sm:mt-32">
        <div className="border-t border-ink/20 pt-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
            <div>
              <p className="eyebrow">
                03 / Meet the instructors
              </p>
            </div>

            <div>
              <h2 className="display-md max-w-4xl">
                Learn from people with real experience.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-quiet">
                Meet the instructors bringing practical knowledge,
                creative experience, and professional skills into the
                classroom.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <PeopleTrack
              people={instructors}
              type="instructor"
              speed={48}
              direction="left-to-right"
            />
          </div>
        </div>
      </section>

      {/* Top Students */}
      <section className="mt-24 sm:mt-32">
        <div className="border-t border-ink/20 pt-5">
          <div className="grid gap-8 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
            <div>
              <p className="eyebrow">
                04 / Top students
              </p>
            </div>

            <div>
              <h2 className="display-md max-w-4xl">
                See the people building with their skills.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-quiet">
                A selection of students developing creative, digital,
                and professional skills through IMKON Academy.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <PeopleTrack
              people={students}
              type="student"
              speed={72}
              direction="right-to-left"
            />
          </div>
        </div>
      </section>
    </>
  );
}