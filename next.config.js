const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/website' : ''

module.exports = {
  /* exportPathMap: () => ({
    '/': { page: '/' },
    '/page1': { page: '/page1' },
  }), */
  assetPrefix: assetPrefix,
  env: {
    BASE_URL: assetPrefix,
  },
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}
