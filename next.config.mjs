/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'f62f330d-9f6d-4158-b5fe-74642e5b13a1.e1-us-cdp-2.choreoapps.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
