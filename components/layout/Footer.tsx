import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-8 text-canvas">
      <div className="page-shell">
        <div className="grid gap-8 border-t border-canvas/25 pt-4 md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-label">
            <Link href="/" className="transition-colors hover:text-signal">Baktash Wahidy</Link>
            <Link href="/imkon" className="inline-flex items-center gap-1 text-canvas/65 transition-colors hover:text-signal">IMKON <ArrowUpRight size={11} /></Link>
            <Link href="/shop" className="inline-flex items-center gap-1 text-canvas/65 transition-colors hover:text-signal">IMKON Shop <ArrowUpRight size={11} /></Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-label text-canvas/65">
            {siteConfig.socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-signal">{social.label}</a>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 sm:mt-24 sm:flex-row sm:items-end">
          <p className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-none tracking-display">Baktash Wahidy<span className="text-signal">.</span></p>
          <p className="eyebrow text-canvas/55">© {new Date().getFullYear()} Baktash · Brand identity & social design</p>
        </div>
      </div>
    </footer>
  );
}
