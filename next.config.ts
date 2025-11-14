import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configured for GitHub Pages deployment
  basePath: '/MayurTanna-Portfolio',
};

export default nextConfig;
