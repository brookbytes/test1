/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export and Netlify deployment
  },
  trailingSlash: true, // Better for Netlify routing
  output: 'export', // Enable static export for Netlify
  // Add base path for Netlify deployment
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
