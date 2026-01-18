import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localist-images.azureedge.net",
      },
    ],
  },
};

export default nextConfig;
