const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";

// if hosting on gitlab, uncomment this line
// const assetPrefix = isProd ? "/website" : "";
const assetPrefix = "";

module.exports = {
  /* exportPathMap: () => ({
    '/': { page: '/' },
    '/page1': { page: '/page1' },
  }), */
  assetPrefix: assetPrefix,
  env: {
    BASE_URL: assetPrefix,
  },
  webpack: (config) => {
    config.plugins.concat([
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix),
      }),
    ]);

    return config;
  },
};
