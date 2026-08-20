import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.woff2",
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | ${site.tagline} — ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name}, ${site.city} — advanced vision care since ${site.since}. Computerised eye testing, contact lens fitting, designer frames, sunglasses & progressive lenses under one roof.`,
  keywords: [
    "opticals Kottayam",
    "eye test Kottayam",
    "contact lenses Kottayam",
    "eyeglasses Kottayam",
    "Alfa Opticals",
    "vision care Kerala",
  ],
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: `Advanced vision care since ${site.since}. Eye testing, contact lenses, designer frames & more in ${site.city}, ${site.region}.`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2e3192",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: site.name,
  slogan: site.tagline,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLines[1],
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: "686001",
    addressCountry: "IN",
  },
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.domain,
  openingHours: ["Mo-Sa 09:30-20:00", "Su 10:00-18:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
