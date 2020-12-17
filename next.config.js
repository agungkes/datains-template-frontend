/* eslint-disable */

const nextBuildId = require('next-build-id');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    // Important: return the modified config
    return config;
  },
};
const plugins = [];
module.exports = withPlugins([...plugins], nextConfiguration);
