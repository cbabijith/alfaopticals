import { site, whatsappHref } from "@/lib/site";
import { CalendarCheckIcon, PhoneIcon, WhatsAppIcon } from "./icons";

/**
 * Mobile-only sticky action bar (replaces the floating buttons on phones).
 * Desktop keeps the floating WhatsApp/call buttons — this bar is lg:hidden.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="safe-bottom border-t border-line bg-white/95 shadow-[0_-12px_32px_-16px_rgba(23,24,43,0.35)] backdrop-blur-md">
        <div className="mx-auto grid max-w-md grid-cols-[1fr_auto_auto] items-center gap-2.5 px-4 py-3">
          <a
            href="#book"
            data-book-test
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-red px-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_10px_22px_-10px_rgba(237,28,36,0.7)] transition active:scale-[0.97]"
          >
            <CalendarCheckIcon className="size-4.5" />
            Book Eye Test
          </a>
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name}`}
            className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-blue text-white shadow-[0_10px_22px_-10px_rgba(46,49,146,0.7)] transition active:scale-[0.93]"
          >
            <PhoneIcon className="size-5" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex size-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_10px_22px_-10px_rgba(37,211,102,0.7)] transition active:scale-[0.93]"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
