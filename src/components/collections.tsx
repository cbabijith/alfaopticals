import { categories } from "@/lib/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowRightIcon } from "./icons";

export default function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 diag-lines bg-cloud py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Collections"
          title={
            <>
              Eyewear for <span className="text-brand-red">Every Style</span>
            </>
          }
          lead="From everyday essentials to statement designer frames — explore curated collections for the whole family."
        />

        <ul className="mt-14 max-lg:mt-9 grid grid-cols-2 gap-4 max-lg:gap-3 sm:gap-6 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal as="li" key={cat.name} delay={(i % 4) * 90}>
              <a
                href="#book"
                className="group relative block overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_-4px_rgba(23,24,43,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-16px_rgba(23,24,43,0.3)] max-lg:active:scale-[0.97]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95"
                    aria-hidden
                  />
                  {/* Bottom label */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <div>
                      <h3 className="font-display text-xl uppercase leading-tight text-white sm:text-2xl">
                        {cat.name}
                      </h3>
                      <p className="mt-0.5 hidden text-xs text-white/75 sm:block">{cat.desc}</p>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white opacity-0 transition-all duration-300 group-hover:opacity-100 sm:size-9">
                      <ArrowRightIcon className="size-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
