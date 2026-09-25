"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type ShopPurchaseProps = {
  paypalUrl: string;
  hesabPayUrl: string;
};

export function ShopPurchase({
  paypalUrl,
  hesabPayUrl,
}: ShopPurchaseProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-7">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 border-b border-current pb-1 text-[11px] font-bold uppercase tracking-label transition-colors duration-300 hover:text-[#FF5833]"
      >
        Buy now

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
            href={paypalUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-[#FF5833]"
            aria-label="Pay with PayPal"
          >
            Pay with PayPal

            <ArrowUpRight
              aria-hidden
              size={14}
              strokeWidth={1.8}
            />
          </a>

          <a
            href={hesabPayUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-[#FF5833]"
            aria-label="Pay with HesabPay"
          >
            Pay with HesabPay

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