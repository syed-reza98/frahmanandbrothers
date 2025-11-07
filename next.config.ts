import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/frahmanandbrothers',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
