import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/monkeyjeremy-portfolio',
  assetPrefix: '/monkeyjeremy-portfolio/',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
