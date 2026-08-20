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
              src="/images/about-900.webp"
              alt="Optometrist at Alfa Opticals performing an eye examination"
              className="aspect-[3/2] w-full object-cover"
              loading="lazy"
              decoding="async"
              width={900}
              height={600}
            />
          </div>
          {/* Floating since badge */}
          <div className="absolute -bottom-6 -right-3 rounded-xl bg-brand-red px-6 py-4 text-white shadow-[0_18px_40px_-14px_rgba(237,28,36,0.7)] sm:-right-6">
            <p className="font-display text-4xl leading-none">{site.since}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
              Excellence since
            </p>
          </div>
          {/* Decorative corner */}
          <div className="absolute -left-4 -top-4 -z-10 size-24 rounded-tl-2xl border-l-4 border-t-4 border-brand-blue/25" aria-hidden />
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
              className="group inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-blue-dark"
            >
              Discover Our Collections
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
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
