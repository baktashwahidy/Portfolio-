"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const FREE_REGISTRATION_URL =
  "https://forms.gle/b5AS38hrymwzqdr68";

const PAID_REGISTRATION_URL =
  "https://hesab.com/pay/BAKTASHWAHIDY/en";

export function AcademyRegistration() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 border-b border-current pb-1 text-[11px] font-bold uppercase tracking-label transition-colors duration-300 hover:text-cobalt"
      >
        Register now

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "mt-4 max-h-40 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={FREE_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label="Free Registration"
          >
            Free Registration
            <ArrowUpRight
              aria-hidden
              size={14}
              strokeWidth={1.8}
            />
          </a>

          <a
            href={PAID_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label="Paid Enrollment"
          >
            Paid Enrollment
            <ArrowUpRight
              aria-hidden
              size={14}
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </div>
  );
}