import type { NextConfig } from 'next';
import { config } from './config/config';

const nextConfig: NextConfig = {
  typedRoutes: config.NODE_ENV === 'development',
  reactCompiler: true,
  poweredByHeader: false,
  allowedDevOrigins: [config.HOST],
  reactStrictMode: config.NODE_ENV === 'development',
};

export default nextConfig;
