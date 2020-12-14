const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./'],
      alias: {
        '@components': './src/components/',
        '@pages': './src/pages/',
        '@utils': './src/utils/',
      },
    },
  ],
];

module.exports = {
  // presets: ['next/babel'],
  // plugins,
  env: {
    test: {
      presets: ['next/babel'],
      plugins,
    },
    development: {
      presets: ['next/babel'],
      plugins,
    },
    production: {
      presets: ['next/babel'],
      plugins: [...plugins],
    },
  },
};
