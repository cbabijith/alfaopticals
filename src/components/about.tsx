import Reveal from "./reveal";
import { site } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/alfa-kottayam-storefront-enhanced.webp"
              alt="Alfa Opticals storefront on Sastri Road in Kottayam"
              className="aspect-[3/2] w-full object-cover"
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
            />
          </div>
          {/* Keep the badge below the photograph on narrow screens. */}
          <div className="mt-3 flex w-fit items-center gap-3 rounded-xl bg-brand-red px-4 py-3 text-white shadow-[0_18px_40px_-14px_rgba(237,28,36,0.7)] sm:absolute sm:-bottom-6 sm:right-4 sm:mt-0 sm:block sm:px-6 sm:py-4">
            <p className="font-display text-3xl leading-none sm:text-4xl">{site.since}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 sm:mt-1 sm:text-[11px] sm:tracking-[0.2em]">
              Excellence since
            </p>
          </div>
          {/* Decorative corner */}
          <div className="absolute -left-2 -top-2 -z-10 size-20 rounded-tl-2xl border-l-4 border-t-4 border-brand-blue/25 sm:-left-4 sm:-top-4 sm:size-24" aria-hidden />
        </Reveal>

        {/* Text side */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              About {site.name}
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase text-ink sm:text-5xl">
              Your Vision,
              <br />
              <span className="text-brand-blue">Our Expertise</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              For over nine decades, {site.name} has been {site.city}&apos;s trusted
              destination for honest eye care and fine eyewear. From comprehensive
              computerised eye testing to perfectly fitted contact lenses and
              handpicked designer frames, we blend old-school care with modern
              precision.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every pair we dispense is checked against your prescription, your face
              and your life — because seeing well should also mean looking great.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#collections"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-blue px-4 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-brand-blue-dark sm:w-auto sm:px-6 sm:text-sm sm:tracking-wider"
            >
              Discover Our Collections
              <ArrowRightIcon className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/75">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-red" aria-hidden /> Certified Optometrists
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-red" aria-hidden /> In-house Lens Lab
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
