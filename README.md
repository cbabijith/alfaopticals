# Alfa Opticals — Website

Premium single-page static website for **Alfa Opticals**, Kottayam — Advanced
Vision Care & Contact Lens Clinic. Built with Next.js (App Router) + Tailwind
CSS, exported as a fully static site. Uses [Bun](https://bun.sh) as the
package manager.

## Quick start

```bash
bun install     # first time only
bun run dev     # develop at http://localhost:3000
bun run build   # production build → static files in ./out
```

The `out/` folder is 100% static — host it anywhere (Vercel, Netlify,
Cloudflare Pages, cPanel/shared hosting via FTP).

## ⚠️ Before going live — remaining placeholders

Everything editable lives in **one file: `src/lib/site.ts`**. Already set with
real details: phone/WhatsApp (+91 97455 56218), address (Lal Bahadur Shastri
Rd, Baker Hill, Kottayam) and the Google Maps link. Still to update:

- `email` — real email address (currently a plausible placeholder)
- `social.facebook` / `instagram` / `youtube` — real profile URLs
- `domain` — the final website domain (used for SEO / OpenGraph / sitemap)

Also review the marketing copy in the same file (`heroStats`, `brands`,
`serviceLists`) and adjust numbers/claims to reality.

## Brand assets

- `public/logo.svg` — vector logo extracted from the original PDF (transparent)
- `public/icons/*` — favicons & app icons generated from the logo emblem
- `public/images/*` — optimized WebP stock photos (hero, about, 8 categories)

Brand colors: red `#ed1c24`, blue `#2e3192`, white — defined in
`src/app/globals.css` under `@theme`.

## Structure

```
src/
├── app/               # layout, page, fonts, manifest, robots, sitemap
├── components/        # header, hero, about, collections, promise, services,
│                      # brands, testimonials, book-cta, contact, footer,
│                      floating-actions, reveal (scroll animation), icons
└── lib/site.ts        # ← ALL content & shop details (edit this)
```

## Performance notes

- Static export, ~105 kB first-load JS (mostly React runtime)
- All photos pre-optimized WebP (~490 kB total), lazy-loaded below the fold
- Self-hosted fonts (Bebas Neue + Inter variable) via `next/font/local`
- Scroll-reveal via a tiny IntersectionObserver component — no animation libs

## Environment quirk (this machine)

The newest Rust-based native binaries (Next 16 SWC, Tailwind oxide ≥ 4.1)
crash with SIGBUS on the current Linux 7.0 kernel. The project therefore pins:

- `next@15.5.23` (patched, SWC works)
- `tailwindcss@4.0.0` + matching `@tailwindcss/oxide*` / `lightningcss*`

All of these are pinned **exact** in `package.json` on purpose — caret ranges
let the package manager drift to 4.3.x, whose native binaries crash on this
kernel. If you upgrade Next/Tailwind later and the build dies with "Bus
error" or `Missing field 'negated'`, the native binaries are the reason —
keep these pins or upgrade on a machine where the new binaries load
(`node -e "require('@next/swc-linux-x64-gnu')"`).
