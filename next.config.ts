import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rudy-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
