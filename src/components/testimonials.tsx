import { testimonials } from "@/lib/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { QuoteIcon, StarIcon } from "./icons";

const avatarTones = [
  "bg-brand-red",
  "bg-brand-blue",
  "bg-brand-red-dark",
  "bg-brand-blue-dark",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 diag-lines bg-cloud py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <span className="text-brand-red">Our Customers</span>
            </>
          }
          lead="Real reviews from real neighbours — the reason we've been here for generations."
        />

        <ul className="mt-14 max-lg:mt-9 grid gap-6 max-lg:gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 4) * 90} className="h-full">
              <figure className="relative flex h-full flex-col rounded-xl bg-white p-7 shadow-[0_2px_12px_-4px_rgba(23,24,43,0.1)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-18px_rgba(23,24,43,0.28)]">
                <QuoteIcon className="absolute right-6 top-6 size-8 text-brand-red-soft" aria-hidden />
                <div className="flex gap-1 text-brand-red" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="size-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full font-display text-lg text-white ${avatarTones[i % avatarTones.length]}`}
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">Google Review · {t.when}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
