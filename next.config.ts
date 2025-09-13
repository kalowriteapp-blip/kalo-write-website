import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Only use basePath in production for GitHub Pages
  ...(isProduction && {
    basePath: '/kalo-write-website',
    assetPrefix: '/kalo-write-website/',
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
