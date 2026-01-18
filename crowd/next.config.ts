import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localist-images.azureedge.net",
      },
      {
        protocol: "https",
        hostname: "posh.vip",
      },
      {
        protocol: "https",
        hostname: "posh-images-alts-production.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
