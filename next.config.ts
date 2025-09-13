import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath: '/kalo-write-website',
  assetPrefix: '/kalo-write-website/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
