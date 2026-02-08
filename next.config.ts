import type { NextConfig } from "next";

/**
 * Root GitHub Pages repo config (<username>.github.io)
 *
 * This is served at the domain root:
 *   https://<username>.github.io/
 *
 * So we MUST NOT use a basePath like "/repo".
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
