"use client";

import { useEffect, useState } from "react";
import { navLinks, site, whatsappHref } from "@/lib/site";
import {
  ArrowRightIcon,
  CalendarCheckIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Shadow + shrink once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Top information bar ─────────────────────────────── */}
      <div className="bg-brand-blue text-white">
        <div className="mx-auto flex h-10 max-lg:h-11 max-w-7xl items-center justify-between gap-4 px-4 text-[13px] sm:px-6">
          <div className="flex min-w-0 items-center gap-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 transition hover:text-white/80"
            >
              <PhoneIcon className="size-3.5" />
              <span className="hidden sm:inline">{site.phoneDisplay}</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1.5 transition hover:text-white/80 min-[420px]:flex"
            >
              <MailIcon className="size-3.5" />
              {site.email}
            </a>
          </div>
          <p className="hidden font-medium tracking-wide text-white/85 md:block">
            Excellence since {site.since} · {site.city}, {site.region}
          </p>
        </div>
      </div>

      {/* ── Main navigation ─────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_24px_-8px_rgba(23,24,43,0.18)]" : "shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="#home" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt={`${site.name} logo`}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"
              }`}
              width={360}
              height={88}
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13.5px] font-semibold uppercase tracking-wider text-ink/80 transition hover:text-brand-blue"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#book"
              data-book-test
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_8px_20px_-8px_rgba(237,28,36,0.65)] transition hover:bg-brand-red-dark"
            >
              <CalendarCheckIcon className="size-4" />
              Book Eye Test
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={site.phoneHref}
              className="inline-flex size-10 items-center justify-center rounded-md bg-brand-red text-white transition active:scale-90"
              aria-label={`Call ${site.name}`}
            >
              <PhoneIcon className="size-4.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink transition active:scale-90 active:bg-brand-blue-soft"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ───────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-blue-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="h-11 w-auto" width={360} height={88} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition active:scale-90 active:bg-brand-red-soft"
              aria-label="Close menu"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile">
            <p className="px-4 pb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/70">
              Menu
            </p>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold uppercase tracking-wide text-ink transition-all duration-300 hover:bg-brand-blue-soft hover:text-brand-blue active:scale-[0.98] ${
                      open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                  >
                    <span className="flex items-center gap-3.5">
                      <span className="font-display text-xs tracking-widest text-brand-red/70">
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowRightIcon className="size-4 text-line transition-colors group-hover:text-brand-blue" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-line p-5 pb-6">
            <a
              href="#book"
              data-book-test
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-red text-sm font-semibold uppercase tracking-wider text-white shadow-[0_10px_24px_-10px_rgba(237,28,36,0.7)] transition active:scale-[0.98]"
            >
              <CalendarCheckIcon className="size-4.5" />
              Book an Eye Test
            </a>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-brand-blue/25 text-sm font-semibold text-brand-blue transition active:scale-[0.97] active:bg-brand-blue-soft"
              >
                <PhoneIcon className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 text-sm font-semibold text-[#1a9e4a] transition active:scale-[0.97] active:bg-[#25D366]/10"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              {site.phoneDisplay} · {site.city}, {site.region}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
