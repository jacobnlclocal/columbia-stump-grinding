import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable trailing slashes for consistent URLs (prevents temporary redirects)
  trailingSlash: false,
  images: {
    // Enable modern image formats - AVIF is even more efficient than WebP
    formats: ['image/avif', 'image/webp'],
    // Optimize for common device sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize quality loss while maintaining file size optimization
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },
};

export default nextConfig;
