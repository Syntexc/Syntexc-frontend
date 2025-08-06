import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "blogs.synexc.com",
        pathname: "/wp-content/uploads/**", // Optional: more specific
      },
    ],
  },
};

export default nextConfig;
