import { heroStats, site, whatsappHref } from "@/lib/site";
import { ArrowRightIcon, CalendarCheckIcon, ChevronDownIcon, WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-20 overflow-hidden bg-brand-blue-deep">
      {/* Background photo (LCP) */}
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/hero-960.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-1920.webp"
          alt="Stylish eyeglasses resting on an open book"
          className="absolute inset-0 -z-10 size-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1280}
        />
      </picture>
      {/* Brand overlay: deep blue → transparent, red base glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-deep/95 via-brand-blue-dark/75 to-brand-blue/35"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-blue-deep/90 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-24 sm:pt-16 lg:pb-32">
        <div className="max-w-2xl">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <span className="size-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden />
            Excellence since {site.since} · {site.city}
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,10vw,6.5rem)] uppercase leading-[1.05] text-white sm:leading-[0.98]">
            Find Your{" "}
            <span className="relative inline-block text-brand-red">
              Perfect Pair
              <svg
                className="absolute -bottom-1 left-0 w-full text-white/70"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C60 3 150 2 298 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            of Glasses
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-xl">
            {site.tagline}. Premium frames, precision lenses and expert eye care —
            styled and fitted just for you.
          </p>

          <div className="mt-9 flex max-sm:flex-col max-sm:items-stretch max-sm:gap-3 flex-wrap items-center gap-4">
            <a
              href="#book"
              data-book-test
              className="group inline-flex max-sm:h-13 max-sm:justify-center items-center gap-2.5 rounded-md bg-brand-red px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_16px_36px_-12px_rgba(237,28,36,0.8)] transition hover:bg-brand-red-dark max-sm:active:scale-[0.98]"
            >
              <CalendarCheckIcon className="size-4.5" />
              Book an Eye Test
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#collections"
              className="inline-flex max-sm:h-13 max-sm:justify-center items-center gap-2.5 rounded-md border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:border-white/70 hover:bg-white/15 max-sm:active:scale-[0.98]"
            >
              Explore Collections
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 max-sm:justify-center items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-white hover:underline"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip — frosted tiles on mobile, hairline columns on desktop */}
      <div className="relative border-t border-white/12 bg-brand-blue-deep/55 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 p-3 px-4 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10 lg:p-0">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-white/5 px-2 py-4 text-center lg:rounded-none lg:bg-transparent lg:py-5"
            >
              <dt className="order-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:text-[11px] sm:tracking-[0.18em]">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-3xl text-white sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-white lg:block"
      >
        <ChevronDownIcon className="size-6 animate-float" />
      </a>
    </section>
  );
}
