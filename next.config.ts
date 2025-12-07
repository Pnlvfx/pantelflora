import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { config } from './config/config';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  typedRoutes: config.NODE_ENV === 'development',
  reactCompiler: true,
  poweredByHeader: false,
  allowedDevOrigins: [config.HOST],
  transpilePackages: ['@coraline-ui/core'],
  reactStrictMode: config.NODE_ENV === 'development',
};

export default withVanillaExtract(nextConfig);
