/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
}
