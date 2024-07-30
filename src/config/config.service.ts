import { ConfigInterface } from './config.interface';

import { resolve } from 'path';
import { defaultColors } from '../color';
import { VariantModel } from '../theme';
import { AppService } from '../app.service';
import { existsSync } from 'node:fs';

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
  configPath = './theme.config';

  private appService: AppService;

  constructor({ appService }: { appService: AppService }) {
    this.appService = appService;
  }

  public loadConfig(config?: ConfigInterface): void {
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
    } = config ?? this.getConfig();
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
      plugins.forEach((plugin) => {
        if (Array.isArray(plugin)) {
          pluginService.addPlugin(plugin[0], plugin[1]);
        } else {
          pluginService.addPlugin(plugin, {});
        }
      });
      pluginService.loadPlugins(this.appService);
    }
  }

  private getConfig(): ConfigInterface {
    const base = resolve(this.configPath);
    const extensions = ['.js', '.ts', '.jms', '.jcs'];
    let configImport = null;

    for (const ext of extensions) {
      const path = base + ext;
      if (existsSync(path)) {
        configImport = require(path);
        break;
      }
    }

    if (!configImport) {
      throw new Error('Configuration file not found');
    }

    let config: unknown;
    if ('default' in configImport) {
      config = configImport.default;
    } else {
      config = configImport;
    }

    return config as ConfigInterface;
  }
}
