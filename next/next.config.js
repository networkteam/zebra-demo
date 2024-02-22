/** @type {import('next').NextConfig} */

const { withZebra } = require('@networkteam/zebra');

const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['de', 'en'],
  //   defaultLocale: 'de',
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: '127.0.0.1',
      },
    ],
  },
};

module.exports = withZebra(nextConfig);
