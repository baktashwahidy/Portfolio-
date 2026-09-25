"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const getArrowColor = (label: string) => {
    if (label === "Academy") {
      return "text-cobalt";
    }

    if (label === "Shop") {
      return "text-[#FF5833]";
    }

    if (label === "Hire me") {
      return "text-[#14A800]";
    }

    return "text-quiet";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled || isOpen ? "bg-canvas" : "bg-transparent"
      }`}
    >
      <div className="page-shell flex h-[72px] items-center justify-between border-b border-ink/15 lg:h-[84px]">
        <Link
          href="/"
          className="relative z-[60] text-[15px] font-bold uppercase tracking-[-0.06em]"
          onClick={closeMenu}
        >
          Baktash<span className="text-cobalt">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {siteConfig.nav.map((item) =>
            item.label === "Hire me" ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 border-l border-ink/20 pl-5 text-[10px] font-bold uppercase tracking-label transition-colors hover:text-cobalt xl:pl-7"
              >
                {item.label}

                <ArrowUpRight
                  aria-hidden
                  size={11}
                  strokeWidth={1.8}
                  className="text-[#14A800] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`group inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-label transition-colors hover:text-cobalt ${
                  item.ecosystem
                    ? "border-l border-ink/20 pl-5 xl:pl-7"
                    : ""
                }`}
              >
                {item.label}

                {item.ecosystem && (
                  <ArrowUpRight
                    aria-hidden
                    size={11}
                    strokeWidth={1.8}
                    className={`${getArrowColor(
                      item.label,
                    )} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                  />
                )}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-[60] -mr-2 grid h-10 w-10 place-items-center lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: -12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -12 }
            }
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-canvas px-5 pb-8 pt-28 sm:px-8"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col border-t border-ink/20"
            >
              {siteConfig.nav.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: -15 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduceMotion
                      ? 0
                      : 0.08 + index * 0.045,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {item.label === "Hire me" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-ink/20 py-4 text-[clamp(2.25rem,10vw,4rem)] font-bold tracking-display"
                    >
                      {item.label}

                      <ArrowUpRight
                        aria-hidden
                        className={getArrowColor(item.label)}
                        size={27}
                        strokeWidth={1.3}
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-ink/20 py-4 text-[clamp(2.25rem,10vw,4rem)] font-bold tracking-display"
                    >
                      {item.label}

                      {item.ecosystem ? (
                        <ArrowUpRight
                          aria-hidden
                          className={getArrowColor(item.label)}
                          size={27}
                          strokeWidth={1.3}
                        />
                      ) : (
                        <span className="h-[27px] w-[27px]" />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex items-end justify-between gap-6 pt-10">
              <p className="eyebrow max-w-36 leading-relaxed">
                Independent design practice
                <br />
                Dubai · Worldwide
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-link"
              >
                Email me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}