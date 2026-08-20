import { brands } from "@/lib/site";
import SectionHeading from "./section-heading";

export default function Brands() {
  // Duplicated list makes the infinite marquee seamless
  const track = [...brands, ...brands];

  return (
    <section id="brands" className="scroll-mt-24 overflow-hidden bg-white py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Brands"
          title="Stocked & Authentic"
          lead="Genuine frames and lenses from the world's most trusted eyewear houses."
        />
      </div>

      <div className="relative mt-14 max-lg:mt-9" role="presentation">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" aria-hidden />

        <div className="flex w-max animate-marquee gap-5 pr-5">
          {track.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex h-20 w-52 shrink-0 items-center justify-center rounded-xl border border-line bg-cloud px-6"
              aria-hidden={i >= brands.length}
            >
              <span className="select-none whitespace-nowrap font-display text-2xl uppercase tracking-wide text-ink/45 transition-colors hover:text-brand-blue">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        …and many more premium brands in store.{" "}
        <a href="#contact" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
          Ask us about a specific brand
        </a>
      </p>
    </section>
  );
}
