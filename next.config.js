/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
