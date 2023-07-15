/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: '**', protocol: 'https' }],
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
