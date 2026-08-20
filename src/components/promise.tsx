import { promises } from "@/lib/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { EyeIcon, ShieldCheckIcon, SparklesIcon, TagIcon } from "./icons";

const iconMap = {
  tag: TagIcon,
  eye: EyeIcon,
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
};

export default function OurPromise() {
  return (
    <section id="promise" className="scroll-mt-24 bg-white py-20 max-lg:py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Alfa Promise"
          title={
            <>
              Why <span className="text-brand-blue">Kottayam</span> Trusts Us
            </>
          }
          lead="Nine decades of care, four simple commitments."
        />

        <ul className="mt-14 max-lg:mt-9 grid gap-6 max-lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <Reveal as="li" key={p.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-line bg-white p-7 max-lg:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/30 hover:shadow-[0_24px_48px_-20px_rgba(237,28,36,0.35)]">
                  <span
                    className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-brand-red-soft transition-transform duration-300 group-hover:scale-[2.2]"
                    aria-hidden
                  />
                  <span className="relative flex size-12 items-center justify-center rounded-lg bg-brand-blue text-white shadow-[0_10px_22px_-10px_rgba(46,49,146,0.7)]">
                    <Icon className="size-5.5" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
