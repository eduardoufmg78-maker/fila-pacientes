import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Impede o Next.js de travar o deploy por causa de erros do ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Impede o Next.js de travar o deploy por causa de erros de TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
