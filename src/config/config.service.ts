import { ConfigInterface } from './config.interface';

import { resolve } from 'path';
import { ColorService, defaultColors } from '../color';
import { ThemeService, VariantModel } from '../theme';

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

  private colorService: ColorService;
  private themeService: ThemeService;

  constructor({
    colorService,
    themeService,
  }: {
    colorService: ColorService;
    themeService: ThemeService;
  }) {
    this.colorService = colorService;
    this.themeService = themeService;
  }

  public async loadConfig(): Promise<void> {
    const {
      sourceColor,
      contrastLevel = 0,
      isDark = false,
      variant = VariantModel.tonalSpot,
      palettes,
      colors,
      useDefaultColors = true,
    } = await this.getConfig();
    this.themeService.create({
      contrastLevel: contrastLevel,
      isDark: isDark,
      sourceColorHex: sourceColor,
      variant: variant,
    });
    if (palettes) {
      Object.entries(palettes).forEach(([key, value]) =>
        this.themeService.addCustomPalette(key, value)
      );
    }
    if (useDefaultColors) {
      this.colorService.addColors(defaultColors);
    }
    if (colors) {
      this.colorService.addColors(colors);
    }
  }

  private async getConfig(): Promise<ConfigInterface> {
    const path = resolve(this.configPath);
    const configImport = await import(path);
    const config: unknown = configImport.default;
    return config as ConfigInterface;
  }
}
