import { FontPlugin } from './src/plugins/font/font.plugin';

const defineConfig = require('./src').defineConfig;
const TailwindPlugin = require('./src').TailwindPlugin;

module.exports = defineConfig({
  sourceColor: '#0965EC',
  colors: {
    fromPalettes: 'success',
  },
  palettes: {
    success: '#4CAF50',
  },
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
