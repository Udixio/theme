import { VariantEntity } from '../theme';
import { AddColorsOptions } from '../color';
import { PluginAbstract } from '../plugin/plugin.abstract';
import { AppService } from '../app.service';

export interface ConfigInterface {
  sourceColor: string;
  contrastLevel?: 0;
  isDark?: boolean;
  variant?: VariantEntity;
  colors?: AddColorsOptions | AddColorsOptions[];
  useDefaultColors?: boolean;
  palettes?: Record<string, string>;
  plugins?: (new (appService: AppService) => PluginAbstract)[];
}
