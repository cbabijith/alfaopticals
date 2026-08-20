import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — builds to ./out, hostable anywhere (Vercel, Netlify, cPanel…)
  output: "export",
  trailingSlash: true,
  images: {
    // Images are pre-optimized as WebP in /public — no server optimizer needed
    unoptimized: true,
  },
};

export default nextConfig;
