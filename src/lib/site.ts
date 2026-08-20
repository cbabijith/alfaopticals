/**
 * ─────────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit everything about the site from this one file
 *
 *  ⚠️  Items marked [PLACEHOLDER] must be replaced with real
 *      shop details before going live.
 * ─────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Alfa Opticals",
  tagline: "Advanced Vision Care & Contact Lens Clinic",
  since: 1930,
  city: "Kottayam",
  region: "Kerala",

  phoneDisplay: "+91 97455 56218",
  phoneHref: "tel:+919745556218",
  whatsappNumber: "919745556218", // country code + number, digits only
  whatsappMessage: "Hello Alfa Opticals! I would like to book an eye test.",
  email: "info@alfaopticals.in", // [PLACEHOLDER] real email if any
  addressLines: [
    "Alfa Opticals",
    "Lal Bahadur Shastri Rd, Baker Hill",
    "Kottayam, Kerala 686 001",
  ],

  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],

  // Google Maps share link of the shop
  mapsShareUrl: "https://maps.app.goo.gl/BFCFY8THQ6MJGR1C8",

  // Shop coordinates from the Maps listing — used for the embedded map pin
  mapsCoords: { lat: 9.5919223, lng: 76.5225964 },

  social: {
    facebook: "https://www.facebook.com/", // [PLACEHOLDER]
    instagram: "https://www.instagram.com/", // [PLACEHOLDER]
    youtube: "https://www.youtube.com/", // [PLACEHOLDER]
  },

  // [PLACEHOLDER] final domain — used for SEO / OpenGraph URLs
  domain: "https://alfaopticals.in",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

/** Personalised WhatsApp booking link used by the Book-an-Eye-Test modal */
export function bookingWhatsappHref(name: string): string {
  const message = `Hello Alfa Opticals! This is ${name.trim()}. I would like to book an eye test.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `Alfa Opticals, ${site.addressLines.slice(1).join(", ")}`,
)}&ll=${site.mapsCoords.lat},${site.mapsCoords.lng}&z=17&output=embed`;

export const mapsDirectionsHref = site.mapsShareUrl;

/* ── Navigation ─────────────────────────────────────────────── */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

/* ── Hero ───────────────────────────────────────────────────── */

export const heroStats = [
  { value: `${new Date().getFullYear() - site.since}+`, label: "Years of Trust" },
  { value: "500+", label: "Frame Styles" },
  { value: "1 Lakh+", label: "Happy Customers" },
  { value: "4.9★", label: "Google Rating" },
];

/* ── Collections ────────────────────────────────────────────── */

export const categories = [
  { name: "Eye Glasses", desc: "Precision lenses in designer frames", image: "/images/cat-eyeglasses.webp", alt: "Stylish eye glasses on a wooden table" },
  { name: "Contact Lenses", desc: "Daily, monthly & coloured lenses", image: "/images/cat-contacts.webp", alt: "Close-up of a human eye — contact lenses" },
  { name: "Sunglasses", desc: "UV protection with premium style", image: "/images/cat-sunglasses.webp", alt: "Premium sunglasses" },
  { name: "Frames", desc: "Acetate, metal & titanium frames", image: "/images/cat-frames.webp", alt: "Collection of eyeglass frames" },
  { name: "Men's Glasses", desc: "Bold, classic & contemporary", image: "/images/cat-men.webp", alt: "Man wearing eyeglasses" },
  { name: "Women's Glasses", desc: "Elegant styles for every look", image: "/images/cat-women.webp", alt: "Woman wearing eyeglasses" },
  { name: "Kids Glasses", desc: "Durable & fun young eyewear", image: "/images/cat-kids.webp", alt: "Child wearing glasses" },
  { name: "Multifocal", desc: "Progressive & bifocal solutions", image: "/images/cat-multifocal.webp", alt: "Multifocal progressive lenses" },
] as const;

/* ── Our Promise ────────────────────────────────────────────── */

export const promises = [
  {
    icon: "tag" as const,
    title: "Competitive Pricing",
    desc: "Honest prices across every budget — from everyday essentials to premium designer eyewear.",
  },
  {
    icon: "eye" as const,
    title: "Personalised Eye Exams",
    desc: "Comprehensive computerised vision testing by experienced optometrists, not a quick guess.",
  },
  {
    icon: "shield" as const,
    title: "100% Genuine Products",
    desc: "Authentic frames, lenses and contact lenses sourced directly from authorised brands.",
  },
  {
    icon: "sparkles" as const,
    title: "Tailored Recommendations",
    desc: "Frames and lenses matched to your face, lifestyle, profession and prescription.",
  },
];

/* ── Clinic services ────────────────────────────────────────── */

export const serviceLists = [
  [
    "Computerised Eye Testing",
    "Contact Lens Fitting & Training",
    "Fundus Photography",
    "Tonometry (Pressure Test)",
    "Retinoscopy",
    "Slit Lamp Examination",
    "Paediatric Vision Screening",
  ],
  [
    "Progressive Lens Counselling",
    "Dry Eye Management",
    "Spectacle Dispensing",
    "Lens Edging & Fitting",
    "Frame Styling & Adjustments",
    "Sunglass & Blue-Ray Consultation",
    "Home Vision Care Guidance",
  ],
];

/* ── Brands ─────────────────────────────────────────────────── */

export const brands = [
  "Ray-Ban",
  "Oakley",
  "ZEISS",
  "Essilor",
  "Johnson & Johnson",
  "Bausch + Lomb",
  "Titan Eye+",
  "Fastrack",
  "Vogue",
  "Crisil",
  "GKB",
  "Lenskart",
] as const;

/* ── Testimonials (real Google reviews) ─────────────────────── */

export const testimonials = [
  {
    name: "Capt. Noble Pereira",
    when: "a year ago",
    quote:
      "Just went to repair my spectacle and received a very warm welcome. The frame was repaired without any charges. Very pleasing staff and a beautiful showroom.",
  },
  {
    name: "Aravind Byju",
    when: "10 months ago",
    quote:
      "Amazing experience at Alfa Opticals! The staff were incredibly friendly and helpful, making the whole process smooth and enjoyable. Their pricing is aggressive…",
  },
  {
    name: "Anil Kumar",
    when: "9 months ago",
    quote:
      "For the first time in my life, I got the perfect pair of spectacles without any issues or need for adjustments afterward. They use modern machines to check and finalize the specs that fit perfectly. The experienced staff are very helpful…",
  },
  {
    name: "Nilas Nayna",
    when: "10 months ago",
    quote:
      "Shop offers a great selection of modern frames at reasonable prices. The staff are knowledgeable and provide accurate eye testing and fitting. Very satisfied with the service and product quality.",
  },
];
