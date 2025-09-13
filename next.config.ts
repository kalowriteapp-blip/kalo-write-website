import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kalo-write-website',
  assetPrefix: '/kalo-write-website/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
