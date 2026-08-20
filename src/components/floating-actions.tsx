import { site, whatsappHref } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 lg:flex">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition-all hover:pr-4"
      >
        <WhatsAppIcon className="size-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-28">
          WhatsApp
        </span>
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.name}`}
        className="group flex items-center gap-0 rounded-full bg-brand-red p-3.5 text-white shadow-[0_14px_30px_-10px_rgba(237,28,36,0.8)] transition-all hover:pr-4"
      >
        <PhoneIcon className="size-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-28">
          Call Now
        </span>
      </a>
    </div>
  );
}
