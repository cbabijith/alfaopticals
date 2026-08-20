import { site, whatsappHref } from "@/lib/site";
import Reveal from "./reveal";
import { CalendarCheckIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function BookCta() {
  return (
    <section id="book" className="scroll-mt-24 bg-brand-blue-deep py-20 max-lg:py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="dot-grid relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-red to-brand-red-dark px-6 max-lg:px-5 py-14 max-lg:py-11 text-center shadow-[0_32px_64px_-28px_rgba(237,28,36,0.6)] sm:px-12 sm:py-16">
          {/* Decorative glasses watermark */}
          <svg
            className="absolute -right-10 -top-10 size-56 rotate-12 text-white/10"
            viewBox="0 0 100 40"
            fill="none"
            aria-hidden
          >
            <circle cx="22" cy="20" r="16" stroke="currentColor" strokeWidth="4" />
            <circle cx="78" cy="20" r="16" stroke="currentColor" strokeWidth="4" />
            <path d="M38 20c3-4 8-4 11 0M62 20c3-4 8-4 11 0M6 16l-4-3M94 16l4-3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
            Walk-ins welcome · Appointments preferred
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl uppercase leading-tight text-white sm:text-6xl">
            Book an Eye Test at {site.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Comprehensive computerised eye testing by experienced optometrists —
            quick, painless and honest. {site.city}, {site.region}.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 max-sm:flex-col max-sm:items-stretch">
            <a
              href={site.phoneHref}
              className="inline-flex max-sm:h-13 max-sm:justify-center items-center gap-2.5 rounded-md bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-red-deep shadow-lg transition hover:bg-white/90 max-sm:active:scale-[0.98]"
            >
              <PhoneIcon className="size-4.5" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-sm:h-13 max-sm:justify-center items-center gap-2.5 rounded-md border-2 border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10 max-sm:active:scale-[0.98]"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
            <CalendarCheckIcon className="size-4" />
            Open {site.hours[0].days}: {site.hours[0].time}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
