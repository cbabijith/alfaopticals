import { mapsDirectionsHref, mapsEmbedSrc, site } from "@/lib/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ClockIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from "./icons";

export default function Contact() {
  const cards = [
    {
      icon: MapPinIcon,
      title: "Visit Us",
      lines: site.addressLines,
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      lines: [site.phoneDisplay, "Quick bookings & enquiries"],
      href: site.phoneHref,
    },
    {
      icon: MailIcon,
      title: "Email Us",
      lines: [site.email, "We reply within a day"],
      href: `mailto:${site.email}`,
    },
    {
      icon: ClockIcon,
      title: "Opening Hours",
      lines: site.hours.map((h) => `${h.days}: ${h.time}`),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Visit Our Store"
          title={
            <>
              Find Us in <span className="text-brand-blue">{site.city}</span>
            </>
          }
          lead="Drop in for an eye test, browse the latest collections, or just say hello."
        />

        <div className="mt-14 max-lg:mt-9 grid gap-6 max-lg:gap-4 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Info cards */}
          <div className="grid content-start gap-5 max-lg:gap-3.5 sm:grid-cols-2">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const Body = card.href ? "a" : "div";
              return (
                <Reveal key={card.title} delay={i * 80}>
                  <Body
                    {...(card.href ? { href: card.href } : {})}
                    className="group block h-full rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_20px_44px_-20px_rgba(46,49,146,0.35)] max-lg:active:scale-[0.98] max-lg:transition-all"
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg bg-brand-blue-soft text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl uppercase text-ink">{card.title}</h3>
                    <p className="mt-2 space-y-0.5 text-sm leading-relaxed text-muted">
                      {card.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </Body>
                </Reveal>
              );
            })}
          </div>

          {/* Map */}
          <Reveal delay={140} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-line shadow-[0_2px_12px_-4px_rgba(23,24,43,0.12)]">
            <iframe
              title={`Map — ${site.name}, ${site.city}`}
              src={mapsEmbedSrc}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_28px_-10px_rgba(237,28,36,0.7)] transition hover:bg-brand-red-dark"
            >
              <NavigationIcon className="size-4" />
              Get Directions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
