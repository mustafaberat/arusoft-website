/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/privacy.html', destination: '/privacy' }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/arusoft/**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
