import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only use static export in production for GitHub Pages
  ...(isProduction && {
    output: 'export',
    trailingSlash: true,
    basePath: '/kalo-write-website',
    assetPrefix: '/kalo-write-website/',
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
