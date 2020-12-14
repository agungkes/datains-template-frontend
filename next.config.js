/* eslint-disable */

const nextBuildId = require('next-build-id');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
};
const plugins = [
];
module.exports = withPlugins([...plugins], nextConfiguration);
