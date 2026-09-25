import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { AcademyPeople } from "@/components/ecosystem/AcademyPeople";
import { Reveal } from "@/components/ui/Reveal";

type AcademyItem = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type AcademyPerson = {
  name: string;
  role: string;
  experience?: string;
  verified?: boolean;
  image: {
    src: string;
    alt: string;
  };
};

type FutureDestinationProps = {
  index: string;
  name: string;
  descriptor: string;
  description: string;
  focus: readonly AcademyItem[];
  formats: readonly AcademyItem[];
  instructors?: readonly AcademyPerson[];
  students?: readonly AcademyPerson[];
};

export function FutureDestination({
  index,
  name,
  descriptor,
  description,
  focus,
  formats,
  instructors = [],
  students = [],
}: FutureDestinationProps) {
  return (
    <main className="page-shell min-h-[calc(100svh-84px)] pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section>
        <div className="grid gap-6 pt-4 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <p className="eyebrow">
            {index} / Academy
          </p>

          <div>
            <p className="eyebrow text-cobalt">
              Practical Education
            </p>

            <h1 className="display-lg mt-6 max-w-5xl">
              {name}
              <span className="text-cobalt">.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-[clamp(1.2rem,2.2vw,1.7rem)] font-bold leading-[1.15] tracking-[-0.035em]">
              {descriptor}
            </p>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-quiet">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Learn */}
      <section className="mt-24 sm:mt-32">
        <div className="grid gap-10 border-t border-ink/20 pt-5 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <div>
            <p className="eyebrow">
              01 / What you can learn
            </p>

            <h2 className="display-md mt-6 max-w-3xl">
              Build practical skills for modern creative work.
            </h2>
          </div>

          <div className="space-y-20 sm:space-y-32">
            {focus.map((item, itemIndex) => {
              const isOffset = itemIndex % 2 !== 0;

              return (
                <Reveal key={item.title}>
                  <article className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-[24px] bg-ink/5 ${
                        isOffset
                          ? "lg:order-2 lg:col-span-7"
                          : "lg:col-span-8"
                      }`}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 65vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div
                      className={`flex flex-col gap-5 lg:pb-1 ${
                        isOffset
                          ? "lg:order-1 lg:col-span-5 lg:pr-[12%]"
                          : "lg:col-span-4 lg:pl-[8%]"
                      }`}
                    >
                      <div className="flex items-center justify-between border-t border-ink/20 pt-3">
                        <p className="eyebrow text-quiet">
                          0{itemIndex + 1}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-[clamp(2rem,3.4vw,4rem)] font-bold leading-[0.9] tracking-display">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-quiet">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="mt-24 sm:mt-32">
        <div className="grid gap-10 border-t border-ink/20 pt-5 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <div>
            <p className="eyebrow">
              02 / Learning formats
            </p>

            <h2 className="display-md mt-6 max-w-3xl">
              Choose the format that fits how you learn.
            </h2>
          </div>

          <div className="space-y-20 sm:space-y-32">
            {formats.map((item, itemIndex) => {
              const isOffset = itemIndex % 2 !== 0;

              return (
                <Reveal key={item.title}>
                  <article className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-[24px] bg-ink/5 ${
                        isOffset
                          ? "lg:order-2 lg:col-span-7"
                          : "lg:col-span-8"
                      }`}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 65vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div
                      className={`flex flex-col gap-5 lg:pb-1 ${
                        isOffset
                          ? "lg:order-1 lg:col-span-5 lg:pr-[12%]"
                          : "lg:col-span-4 lg:pl-[8%]"
                      }`}
                    >
                      <div className="flex items-center justify-between border-t border-ink/20 pt-3">
                        <p className="eyebrow text-quiet">
                          0{itemIndex + 1}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-[clamp(2rem,3.4vw,4rem)] font-bold leading-[0.9] tracking-display">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-quiet">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Instructors + Top Students */}
      {(instructors.length > 0 || students.length > 0) && (
        <AcademyPeople
          instructors={instructors}
          students={students}
        />
      )}

      {/* Registration */}
      <section className="mt-24 border-t border-ink/20 pt-5 pb-20 sm:mt-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <p className="eyebrow">
            IMKON Academy
          </p>

          <div>
            <h2 className="display-md max-w-4xl">
              Start Learning with IMKON Academy.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-quiet">
              Learn. Create. Build your career.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="https://forms.gle/b5AS38hrymwzqdr68"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Register now
                <ArrowUpRight
                  aria-hidden
                  size={15}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}