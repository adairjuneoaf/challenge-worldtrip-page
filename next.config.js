/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    ssr: false,
    styledComponents: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
