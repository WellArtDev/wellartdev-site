import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s0.wp.com",
        pathname: "/mshots/v1/**",
      },
    ],
  },
};

export default nextConfig;
