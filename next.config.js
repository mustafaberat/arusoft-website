/** @type {import('next').NextConfig} */
const nextConfig = {
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
