/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/map',
        destination: '/map/UNF',
        permanent: true,
      },
    ]
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.unfospreytools.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
