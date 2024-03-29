const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
  },
}

module.exports = nextConfig
