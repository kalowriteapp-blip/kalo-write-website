import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove export configuration for development
  // Uncomment these lines when you're ready to build for production:
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/kalo-write-website',
  // assetPrefix: '/kalo-write-website/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
