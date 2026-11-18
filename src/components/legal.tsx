import Link from "next/link";
import Reveal from "./reveal";
import { ArrowLeftIcon } from "./icons";
import { site } from "@/lib/site";

/* ── Shared layout pieces for legal pages (Privacy / Terms) ──── */

export function LegalHero({
  eyebrow,
  title,
  updated,
}: {
  eyebrow: string;
  title: string;
  updated: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-deep py-16 text-white sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 46%, currentColor 46%, currentColor 54%, transparent 54%), linear-gradient(225deg, transparent 46%, currentColor 46%, currentColor 54%, transparent 54%)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            <span className="h-px w-8 bg-current opacity-60" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/70">
            Last updated: {updated} · {site.name}, {site.city}, {site.region}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="scroll-mt-28 py-8 first:pt-10 sm:py-10">
      <h2 className="flex items-baseline gap-4 font-display text-3xl uppercase tracking-wide text-ink">
        <span className="text-xl text-brand-red/70 sm:text-2xl">
          {String(index).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted sm:text-base [&_a]:font-semibold [&_a]:text-brand-blue [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:text-ink">
        {children}
      </div>
    </Reveal>
  );
}

export function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
      <div className="divide-y divide-line rounded-2xl border border-line bg-white px-6 py-2 shadow-[0_18px_50px_-30px_rgba(23,24,43,0.25)] sm:px-10">
        {children}
      </div>
      <LegalCrossNav />
    </div>
  );
}

function LegalCrossNav() {
  return (
    <Reveal className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-cloud px-6 py-6 text-center sm:flex-row sm:text-left">
      <p className="max-w-sm text-sm text-muted">
        Questions about this page? Call us on{" "}
        <a href={site.phoneHref} className="font-semibold text-brand-blue">
          {site.phoneDisplay}
        </a>{" "}
        or write to{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">
          {site.email}
        </a>
        .
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_8px_20px_-8px_rgba(237,28,36,0.65)] transition hover:bg-brand-red-dark"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Home
      </Link>
    </Reveal>
  );
}
