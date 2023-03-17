/** @type {import('next').NextConfig} */

const { withZebra } = require('@networkteam/zebra');

const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['de', 'en'],
  //   defaultLocale: 'de',
  // },
  images: {
    domains: ['localhost'],
  },
};

module.exports = withZebra(nextConfig);
