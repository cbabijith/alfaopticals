import { categories, navLinks, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, YoutubeIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-deep text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        {/* Brand */}
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
          <div className="inline-block rounded-lg bg-white p-3 pr-5 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt={`${site.name} logo`} className="h-14 w-auto" width={360} height={88} />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {site.tagline}. Serving {site.city} with honest eye care, genuine
            products and fine eyewear since {site.since}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
              { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
              { icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${s.label}`}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-brand-red hover:bg-brand-red hover:text-white"
              >
                <s.icon className="size-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="font-display text-lg uppercase tracking-wide text-white">Quick Links</h3>
          <span className="mt-2 block h-0.5 w-8 bg-brand-red" aria-hidden />
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/65 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="font-semibold text-brand-red transition hover:text-white">
                Book an Eye Test
              </a>
            </li>
          </ul>
        </nav>

        {/* Collections */}
        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white">Collections</h3>
          <span className="mt-2 block h-0.5 w-8 bg-brand-red" aria-hidden />
          <ul className="mt-5 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.name}>
                <a href="#collections" className="text-white/65 transition hover:text-white">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg uppercase tracking-wide text-white">Contact</h3>
          <span className="mt-2 block h-0.5 w-8 bg-brand-red" aria-hidden />
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-4.5 shrink-0 text-brand-red" />
              <span>
                {site.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 transition hover:text-white">
                <PhoneIcon className="mt-0.5 size-4.5 shrink-0 text-brand-red" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition hover:text-white">
                <MailIcon className="mt-0.5 size-4.5 shrink-0 text-brand-red" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            © {year} {site.name}, {site.city}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white/80">Terms &amp; Conditions</a>
            <span aria-hidden>·</span>
            <a href="#" className="transition hover:text-white/80">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
