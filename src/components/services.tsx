import { serviceLists, site } from "@/lib/site";
import Reveal from "./reveal";
import { ArrowRightIcon, CheckIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-brand-blue-deep py-20 max-lg:py-14 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        {/* Left: heading + copy */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              Vision Clinic
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
              Complete Eye Care
              <br />
              <span className="text-brand-red">Under One Roof</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Our in-house vision clinic pairs modern diagnostic equipment with
              experienced optometrists. Whether it&apos;s a routine check-up, a
              first pair of glasses for your child, or advanced contact lens
              fitting — you&apos;re in expert hands.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <a
              href="#book"
              data-book-test
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-deep transition hover:bg-brand-red hover:text-white"
            >
              Book a Consultation
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={200} className="mt-12 max-lg:mt-8">
            <div className="rounded-xl border border-white/12 bg-white/5 p-6 backdrop-blur">
              <p className="font-display text-5xl text-white">
                {new Date().getFullYear() - site.since}
                <span className="text-brand-red">+</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                years of trusted eye care in {site.city} — three generations and
                counting.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: service checklists */}
        <div className="grid content-start gap-6 max-lg:gap-4 sm:grid-cols-2">
          {serviceLists.map((list, col) => (
            <Reveal key={col} delay={col * 120} className="rounded-xl border border-white/12 bg-white/5 p-7 max-lg:p-6 backdrop-blur">
              <p className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <span className="h-px w-6 bg-brand-red" aria-hidden />
                {col === 0 ? "Diagnostics" : "Dispensary & Care"}
              </p>
              <ul className="space-y-3.5">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
