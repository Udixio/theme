module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
