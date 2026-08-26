import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  typescript: { tsconfigPath: "./tsconfig.github.json" },
  ...(isGitHubPages
    ? {
      output: "export",
      trailingSlash: true,
      basePath: githubBasePath,
      assetPrefix: githubBasePath,
      images: { unoptimized: true },
    }
    : {}),
};

export default nextConfig;
