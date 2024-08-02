import { AddColorsOptions } from '../color';
import { VariantEntity } from '../theme';
import { PluginAbstract } from '../plugin';

export interface ConfigInterface {
  sourceColor: string;
  contrastLevel?: number;
  isDark?: boolean;
  variant?: VariantEntity;
  colors?: AddColorsOptions | AddColorsOptions[];
  useDefaultColors?: boolean;
  palettes?: Record<string, string>;
  plugins?: PluginAbstract<any, any>[];
}
