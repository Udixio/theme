import { defineConfig } from './src';
import { TailwindPlugin } from './src/plugins/tailwind/Tailwind.plugin';

export default defineConfig({
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
