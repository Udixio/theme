import { DynamicColor } from '../material-color-utilities/dynamic_color';
import { SchemeService } from '../theme/scheme-service';
import { ColorOptions } from './entities/color.entity';
export type DynamicColorKey = 'background' | 'onBackground' | 'surface' | 'surfaceDim' | 'surfaceBright' | 'surfaceContainerLowest' | 'surfaceContainerLow' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest' | 'onSurface' | 'surfaceVariant' | 'onSurfaceVariant' | 'inverseSurface' | 'inverseOnSurface' | 'outline' | 'outlineVariant' | 'shadow' | 'scrim' | 'surfaceTint' | 'primary' | 'onPrimary' | 'primaryContainer' | 'onPrimaryContainer' | 'inversePrimary' | 'secondary' | 'onSecondary' | 'secondaryContainer' | 'onSecondaryContainer' | 'tertiary' | 'onTertiary' | 'tertiaryContainer' | 'onTertiaryContainer' | 'error' | 'onError' | 'errorContainer' | 'onErrorContainer' | 'primaryFixed' | 'primaryFixedDim' | 'onPrimaryFixed' | 'onPrimaryFixedVariant' | 'secondaryFixed' | 'secondaryFixedDim' | 'onSecondaryFixed' | 'onSecondaryFixedVariant' | 'tertiaryFixed' | 'tertiaryFixedDim' | 'onTertiaryFixed' | 'onTertiaryFixedVariant';
export declare class DynamicColorService {
    private colorMap;
    createOrUpdate(key: string, args: Omit<ColorOptions, 'name'>): void;
    get(key: string): DynamicColor;
    highestSurface(s: SchemeService): DynamicColor;
    addFromPalette(key: string): void;
}
