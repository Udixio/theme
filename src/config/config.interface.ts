import { VariantEntity } from '../theme';
import { AddColorsOptions } from '../color';
import { PluginConstructor } from '../plugin/plugin.service';

export interface ConfigInterface {
  sourceColor: string;
  contrastLevel?: 0;
  isDark?: boolean;
  variant?: VariantEntity;
  colors?: AddColorsOptions | AddColorsOptions[];
  useDefaultColors?: boolean;
  palettes?: Record<string, string>;
  plugins?: (PluginConstructor | [PluginConstructor, object])[];
}
