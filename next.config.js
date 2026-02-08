/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-eu.ssl-images-amazon.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Disable telemetry
  telemetry: {
    disabled: true,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  // Ensure proper environment variable access
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US,
    NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },
}

module.exports = nextConfig
