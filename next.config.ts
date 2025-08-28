import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Fix for GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/my-page" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-page" : "",
};

export default nextConfig;
