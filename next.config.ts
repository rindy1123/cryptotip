import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_HOST,
  basePath: "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
