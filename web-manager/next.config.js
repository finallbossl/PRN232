/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // For Docker production
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1',
    NEXT_PUBLIC_GATEWAY_PORT: process.env.NEXT_PUBLIC_GATEWAY_PORT || '3000',
  },
  // Transpile shared package
  transpilePackages: ['@goride/shared'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
