import { ColorOptions } from '../entities/color.entity';
import { DynamicColorService } from '../dynamic-color.service';
export type DynamicColorKey = 'background' | 'onBackground' | 'surface' | 'surfaceDim' | 'surfaceBright' | 'surfaceContainerLowest' | 'surfaceContainerLow' | 'surfaceContainer' | 'surfaceContainerHigh' | 'surfaceContainerHighest' | 'onSurface' | 'surfaceVariant' | 'onSurfaceVariant' | 'inverseSurface' | 'inverseOnSurface' | 'outline' | 'outlineVariant' | 'shadow' | 'scrim' | 'surfaceTint' | 'primary' | 'onPrimary' | 'primaryContainer' | 'onPrimaryContainer' | 'inversePrimary' | 'secondary' | 'onSecondary' | 'secondaryContainer' | 'onSecondaryContainer' | 'tertiary' | 'onTertiary' | 'tertiaryContainer' | 'onTertiaryContainer' | 'error' | 'onError' | 'errorContainer' | 'onErrorContainer' | 'primaryFixed' | 'primaryFixedDim' | 'onPrimaryFixed' | 'onPrimaryFixedVariant' | 'secondaryFixed' | 'secondaryFixedDim' | 'onSecondaryFixed' | 'onSecondaryFixedVariant' | 'tertiaryFixed' | 'tertiaryFixedDim' | 'onTertiaryFixed' | 'onTertiaryFixedVariant';
export declare class DefaultColorModel {
    private dynamicColorService;
    colors: Partial<Record<DynamicColorKey, Partial<Omit<ColorOptions, 'name'>>>>;
    constructor(dynamicColorService: DynamicColorService);
}
