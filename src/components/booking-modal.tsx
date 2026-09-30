"use client";

import { useCallback, useEffect, useState } from "react";
import useModalDialog from "./use-modal-dialog";
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
  const closeBooking = useCallback(() => setOpen(false), []);
  const dialogRef = useModalDialog(open, closeBooking);

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

  const valid = name.trim().length >= 2;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    window.open(bookingWhatsappHref(name), "_blank", "noopener,noreferrer");
    setOpen(false);
    setName("");
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal-viewport items-end justify-center sm:items-center sm:[--dialog-padding:1rem]"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={(event) => { if (event.target === event.currentTarget) closeBooking(); }}
    >
      <div className="modal-sheet relative flex max-h-full w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-sm:max-w-none max-sm:rounded-b-none max-sm:rounded-t-3xl">
        <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-3 bg-brand-blue-deep px-5 py-3 text-white">
          <h2 id="booking-title" className="font-display text-2xl uppercase">Book an Eye Test</h2>
          <button type="button" onClick={closeBooking} className="flex size-11 shrink-0 items-center justify-center rounded-md text-white/80 hover:bg-white/10 hover:text-white" aria-label="Close booking form" autoFocus>
            <CloseIcon className="size-5" />
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom,0px)]">
          {/* Header band */}
          <div className="dot-grid flex items-start gap-3 bg-brand-blue-deep px-5 pb-5 text-white sm:px-7">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-red">
              <CalendarCheckIcon className="size-5" />
            </span>
            <p className="text-sm leading-relaxed text-white/70">
              Tell us your name — we&apos;ll continue on WhatsApp and confirm your
              slot right away.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="px-5 py-5 sm:px-7 sm:py-6" noValidate>
            <label htmlFor="booking-name" className="block text-sm font-semibold text-ink">
              Your name
            </label>
            <input
              id="booking-name"
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
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.7)] transition hover:bg-[#1fb957] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:active:scale-100 sm:text-sm"
            >
              <WhatsAppIcon className="size-5 shrink-0" />
              Continue to WhatsApp
            </button>

            <p className="mt-4 flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-muted">
              <MapPinIcon className="mt-0.5 size-3.5 shrink-0 text-brand-red" />
              {site.addressLines.slice(1).join(", ")} · {site.phoneDisplay}
            </p>
          </form>
        </div>
      </div>
    </dialog>
  );
}
