import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds for development
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during builds for development
    ignoreBuildErrors: true,
  },
}

export default nextConfig
