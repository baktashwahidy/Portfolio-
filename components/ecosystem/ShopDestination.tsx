import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ShopPurchase } from "@/components/ecosystem/ShopPurchase";
import { Reveal } from "@/components/ui/Reveal";

type ShopItem = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type ShopDestinationProps = {
  index: string;
  name: string;
  descriptor: string;
  description: string;
  focus: readonly ShopItem[];
};

const PAYPAL_URLS = [
  "https://www.paypal.com/ncp/payment/NN9PYJGWQWA8W",
  "https://www.paypal.com/ncp/payment/SMUT3VE4UMQ86",
  "https://www.paypal.com/ncp/payment/G8QRNYWDAWVA4",
  "https://www.paypal.com/ncp/payment/T3AB6GYPK8RFW",
];

const HESABPAY_URL = "https://hesab.com/pay/BAKTASHWAHIDY/en";

export function ShopDestination({
  index,
  name,
  descriptor,
  description,
  focus,
}: ShopDestinationProps) {
  return (
    <main className="page-shell min-h-[calc(100svh-84px)] pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section>
        <div className="grid gap-6 pt-4 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <p className="eyebrow">
            {index} / Shop
          </p>

          <div>
            <p className="eyebrow text-[#FF5833]">
              Printed & Personalized
            </p>

            <h1 className="display-lg mt-6 max-w-5xl">
              {name}
              <span className="text-[#FF5833]">.</span>
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

      {/* What We Make */}
      <section className="mt-24 sm:mt-32">
        <div className="grid gap-10 border-t border-ink/20 pt-5 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <div>
            <p className="eyebrow">
              01 / What we make
            </p>

            <h2 className="display-md mt-6 max-w-3xl">
              Printed pieces made to feel personal.
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

                        <ShopPurchase
                          paypalUrl={PAYPAL_URLS[itemIndex]}
                          hesabPayUrl={HESABPAY_URL}
                        />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming to the Shop */}
      <section className="mt-24 border-t border-ink/20 pt-5 sm:mt-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <div>
            <p className="eyebrow">
              02 / Coming to the shop
            </p>
          </div>

          <div>
            <h2 className="display-md max-w-4xl">
              More products and personalized pieces are coming.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-quiet">
              IMKON SHOP is being developed as a separate destination for
              custom products, printed pieces, and future collections.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="mt-24 border-t border-ink/20 pt-5 pb-20 sm:mt-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(9rem,1fr)_minmax(0,3fr)] lg:gap-8">
          <p className="eyebrow">
            IMKON SHOP
          </p>

          <div>
            <h2 className="display-md max-w-4xl">
              Create something personal.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-quiet">
              Custom products and personalized designs are being prepared
              for the shop.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="/#contact"
                className="text-link hover:text-[#FF5833]"
              >
                Contact us
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