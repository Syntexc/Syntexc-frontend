import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // ← Disable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
