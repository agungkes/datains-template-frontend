/* eslint-disable */

const nextBuildId = require('next-build-id');
const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');

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
const plugins = [
  [
    withOffline,
    {
      workboxOpts: {
        swDest: process.env.NEXT_EXPORT
          ? 'service-worker.js'
          : 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      },
      async rewrites() {
        return [
          {
            source: '/service-worker.js',
            destination: '/_next/static/service-worker.js',
          },
        ];
      },
    },
  ],
];
module.exports = withPlugins([...plugins], nextConfiguration);
