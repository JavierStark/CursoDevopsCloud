import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "CursoDevopsCloud";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Ensure turbopack only runs if necessary, or remove this block 
  // if you encounter further issues with production builds.
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;