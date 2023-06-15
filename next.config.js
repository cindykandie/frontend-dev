/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const withPWA = require("next-pwa")({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  register: true
});

module.exports = withPWA(nextConfig);
