import Reveal from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
          align === "center" ? "justify-center" : ""
        } ${tone === "light" ? "text-brand-red" : "text-white/80"}`}
      >
        <span className="h-px w-8 bg-current opacity-60" aria-hidden />
        {eyebrow}
        <span className="h-px w-8 bg-current opacity-60" aria-hidden />
      </p>
      <h2
        className={`mt-4 font-display text-4xl uppercase sm:text-5xl ${
          tone === "light" ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-muted" : "text-white/75"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
