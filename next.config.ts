import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
};

export default nextConfig;
