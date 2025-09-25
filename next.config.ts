import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 This tells Next.js to ignore ESLint errors during builds (on Vercel too)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
