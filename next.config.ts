import type { NextConfig } from "next";

/**
 * GitHub Pages static export config
 *
 * - output: 'export' generates a fully static site into /out
 * - basePath/assetPrefix ensure assets work when the site is hosted at:
 *   https://<user>.github.io/<repo>/
 *
 * You can override the computed basePath by setting:
 *   NEXT_PUBLIC_BASE_PATH=/my-basepath
 */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const computedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubActions && repo ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: computedBasePath,
  assetPrefix: computedBasePath,
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
  },
};

export default nextConfig;
