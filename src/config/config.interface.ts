import { AddColorsOptions } from '../color';
import { VariantEntity } from '../theme';
import { PluginConstructor } from '../plugin';

export interface ConfigInterface {
  sourceColor: string;
  contrastLevel?: number;
  isDark?: boolean;
  variant?: VariantEntity;
  colors?: AddColorsOptions | AddColorsOptions[];
  useDefaultColors?: boolean;
  palettes?: Record<string, string>;
  plugins?: (PluginConstructor | [PluginConstructor, object])[];
}
