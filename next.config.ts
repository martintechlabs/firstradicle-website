import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export", // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    // Resolve tw-animate-css CSS imports
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "tw-animate-css": path.resolve(
          process.cwd(),
          "node_modules/tw-animate-css/dist/tw-animate.css"
        ),
      };
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      "tw-animate-css": path.resolve(
        process.cwd(),
        "node_modules/tw-animate-css/dist/tw-animate.css"
      ),
    },
  },
};

export default nextConfig;
