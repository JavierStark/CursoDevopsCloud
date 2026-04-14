/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "CursoDevopsCloud";
const isProd = process.env.NODE_ENV === "production";

// On GitHub Pages, the site is usually served from /repository-name/
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath: basePath,
  // assetPrefix is handled by basePath in most cases, 
  // but we keep the logic consistent with your requirement
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;