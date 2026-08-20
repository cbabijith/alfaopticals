"use client";

import { useEffect, useRef, useState } from "react";
import { bookingWhatsappHref, site } from "@/lib/site";
import { CalendarCheckIcon, CloseIcon, MapPinIcon, WhatsAppIcon } from "./icons";

/**
 * Global "Book an Eye Test" modal. Any element with the `data-book-test`
 * attribute opens this dialog (event delegation — works from server
 * components too). Collects the customer's name, then redirects to
 * WhatsApp with a personalised booking message.
 *
 * Links keep `href="#book"` as a no-JS fallback (scrolls to the CTA band).
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Intercept clicks on any [data-book-test] trigger
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement | null)?.closest?.("[data-book-test]");
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Lock body scroll + focus the name field while open
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const valid = name.trim().length >= 2;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    window.open(bookingWhatsappHref(name), "_blank", "noopener,noreferrer");
    setOpen(false);
    setName("");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 max-sm:items-end max-sm:p-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div
        className="absolute inset-0 bg-brand-blue-deep/65 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="modal-sheet relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl max-sm:max-w-none max-sm:rounded-b-none max-sm:rounded-t-3xl">
        {/* Header band */}
        <div className="dot-grid bg-brand-blue-deep px-7 pb-6 pt-7 max-sm:px-6 max-sm:pb-5 text-white">
          <span
            className="absolute left-1/2 top-2 hidden h-1 w-10 -translate-x-1/2 rounded-full bg-white/25 max-sm:block"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-md text-white/70 transition hover:bg-white/10 hover:text-white active:scale-90"
            aria-label="Close"
          >
            <CloseIcon className="size-5" />
          </button>
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-red shadow-[0_10px_24px_-8px_rgba(237,28,36,0.8)]">
            <CalendarCheckIcon className="size-6" />
          </span>
          <h2 id="booking-title" className="mt-4 font-display text-3xl uppercase leading-tight">
            Book an Eye Test
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-white/70">
            Tell us your name — we&apos;ll continue on WhatsApp and confirm your
            slot right away.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="px-7 py-6" noValidate>
          <label htmlFor="booking-name" className="block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="booking-name"
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aravind"
            autoComplete="name"
            maxLength={60}
            className="mt-2 w-full rounded-lg border border-line bg-cloud px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/15"
          />

          <button
            type="submit"
            disabled={!valid}
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3.5 max-sm:h-13 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.7)] transition hover:bg-[#1fb957] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:active:scale-100"
          >
            <WhatsAppIcon className="size-5" />
            Continue to WhatsApp
          </button>

          <p className="mt-4 flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-muted">
            <MapPinIcon className="mt-0.5 size-3.5 shrink-0 text-brand-red" />
            {site.addressLines.slice(1).join(", ")} · {site.phoneDisplay}
          </p>
        </form>
      </div>
    </div>
  );
}
