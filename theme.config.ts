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
    [
      TailwindPlugin,
      TailwindPlugin.config({
        darkMode: 'class',
      }),
    ],
  ],
});
