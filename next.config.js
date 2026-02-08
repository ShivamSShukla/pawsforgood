/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'images-na.ssl-images-amazon.com'],
    unoptimized: true,
  },
  // Disable telemetry to avoid the error you mentioned
  telemetry: {
    disabled: true,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
