/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'mdbcdn.b-cdn.net',
      pathname: '/img/Photos/Horizontal/Nature/4-col/**',
    },
  ],
};

module.exports = nextConfig;
