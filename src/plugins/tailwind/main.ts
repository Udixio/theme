import { PluginsConfig } from 'tailwindcss/types/config';
import { bootstrapFromConfig } from '../../main';
import { TailwindPlugin } from './tailwind.plugin';
import { AppService } from '../../app.service';

export type Theme = {
  colors: Record<string, string>;
  fontFamily: { expressive: string[]; neutral: string[] };
  plugins: Partial<PluginsConfig>;
};

export const createTheme = (): Theme & { appService: AppService } => {
  const app = bootstrapFromConfig();
  const plugin = app.pluginService.getPlugin(TailwindPlugin);
  if (!plugin) {
    throw new Error('Tailwind plugin not found');
  }
  return { ...plugin.getTheme(), appService: app };
};
