import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type FutureDestinationProps = {
  index: string;
  name: string;
  descriptor: string;
  description: string;
  next: readonly string[];
};

export function FutureDestination({ index, name, descriptor, description, next }: FutureDestinationProps) {
  return (
    <section className="page-shell min-h-[calc(100svh-84px)] pt-32 sm:pt-40 lg:pt-48">
      <div className="grid gap-6 border-t border-ink/20 pt-4 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
        <p className="eyebrow">{index} / Ecosystem</p>
        <div>
          <p className="eyebrow text-cobalt">In development</p>
          <h1 className="display-lg mt-6 max-w-4xl">{name}<span className="text-cobalt">.</span></h1>
          <p className="mt-6 max-w-lg text-[clamp(1.15rem,2vw,1.55rem)] font-bold leading-[1.2] tracking-[-0.035em]">{descriptor}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-quiet">{description}</p>
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-t border-ink/20 pt-5 sm:mt-28 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
        <p className="eyebrow">Planned focus</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {next.map((item, itemIndex) => (
            <li key={item} className="flex items-baseline justify-between border-b border-ink/15 py-3 text-[15px] font-bold"><span>{item}</span><span className="eyebrow text-quiet">0{itemIndex + 1}</span></li>
          ))}
        </ul>
      </div>

      <div className="mt-20 border-t border-ink/20 pt-5 sm:mt-28">
        <Link href="/#contact" className="text-link">Discuss a collaboration <ArrowUpRight aria-hidden size={15} strokeWidth={1.8} /></Link>
      </div>
    </section>
  );
}
