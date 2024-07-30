import { PluginAbstract } from '../../plugin/plugin.abstract';
import { AppService } from '../../app.service';
import { Theme } from './main';
import { state } from './plugins-tailwind/state';
import { themer } from './plugins-tailwind/themer';
import { FontPlugin } from '../font/font.plugin';
import { font } from './plugins-tailwind/font';

interface TailwindPluginOptions {
  darkMode?: 'class' | 'media';
  responsiveBreakPoints?: Record<string, number>;
}

export class TailwindPlugin extends PluginAbstract {
  static dependencies = [FontPlugin];
  constructor(
    protected appService: AppService,
    protected options: TailwindPluginOptions
  ) {
    options.darkMode ??= 'class';
    options.responsiveBreakPoints ??= {
      lg: 1.125,
    };
    super();
  }
  static config(options: TailwindPluginOptions): TailwindPluginOptions {
    return options;
  }
  getTheme(): Theme {
    const colors: Record<
      string,
      {
        light: string;
        dark: string;
      }
    > = {};

    for (const isDark of [false, true]) {
      this.appService.themeService.update({ isDark: isDark });
      for (const [key, value] of this.appService.colorService
        .getColors()
        .entries()) {
        const newKey = key
          .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
          .toLowerCase();
        colors[newKey] ??= { light: '', dark: '' };
        colors[newKey][isDark ? 'dark' : 'light'] = value.getHex();
      }
    }

    const { fontStyles, fontFamily } = this.appService.pluginService
      .getPlugin(FontPlugin)
      .getFonts();
    return {
      colors: {},
      fontFamily: fontFamily,
      plugins: [
        state(Object.keys(colors)),
        themer(colors, this.options.darkMode!),
        font(fontStyles, this.options.responsiveBreakPoints!),
      ],
    };
  }
}
