import { FontPlugin } from './src';

const defineConfig = require('./src').defineConfig;
const TailwindPlugin = require('./src').TailwindPlugin;

module.exports = defineConfig({
  sourceColor: '#68548E',
  plugins: [
    FontPlugin,
    [
      TailwindPlugin,
      TailwindPlugin.config({
        darkMode: 'class',
      }),
    ],
  ],
});
