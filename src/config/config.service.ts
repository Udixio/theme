import { ConfigInterface } from './config.interface';

import { resolve } from 'path';
import { defaultColors } from '../color';
import { VariantModel } from '../theme';
import { AppService } from '../app.service';

export function defineConfig(configObject: ConfigInterface): ConfigInterface {
  if (!configObject || typeof configObject !== 'object') {
    throw new Error('The configuration is missing or not an object');
  }
  if (!('sourceColor' in configObject)) {
    throw new Error('Invalid configuration');
  }
  return configObject as ConfigInterface;
}

export class ConfigService {
  configPath = './theme.config.ts';

  private appService: AppService;

  constructor({ appService }: { appService: AppService }) {
    this.appService = appService;
  }

  public async loadConfig(): Promise<void> {
    const { themeService, colorService, pluginService } = this.appService;
    const {
      sourceColor,
      contrastLevel = 0,
      isDark = false,
      variant = VariantModel.tonalSpot,
      palettes,
      colors,
      useDefaultColors = true,
      plugins,
    } = await this.getConfig();
    themeService.create({
      contrastLevel: contrastLevel,
      isDark: isDark,
      sourceColorHex: sourceColor,
      variant: variant,
    });
    if (palettes) {
      Object.entries(palettes).forEach(([key, value]) =>
        themeService.addCustomPalette(key, value)
      );
    }
    if (useDefaultColors) {
      colorService.addColors(defaultColors);
    }
    if (colors) {
      colorService.addColors(colors);
    }
    if (plugins) {
      plugins.forEach((plugin) => pluginService.addPlugin(plugin));
      pluginService.loadPlugins(this.appService);
    }
  }

  private async getConfig(): Promise<ConfigInterface> {
    const path = resolve(this.configPath);
    const configImport = await import(path);
    const config: unknown = configImport.default;
    return config as ConfigInterface;
  }
}
