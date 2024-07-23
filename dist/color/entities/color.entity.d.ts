import { TonalPalette } from '@material/material-color-utilities';
import { SchemeService } from '../../theme/scheme-service';
import { DynamicColor } from '../../material-color-utilities/dynamic_color';
import { ContrastCurve } from '../../material-color-utilities';
export interface ColorOptions {
    name: string;
    palette: (scheme: SchemeService) => TonalPalette;
    tone: (scheme: SchemeService) => number;
    isBackground?: boolean;
    background?: (scheme: SchemeService) => DynamicColor;
    secondBackground?: (scheme: SchemeService) => DynamicColor;
    contrastCurve?: ContrastCurve;
    toneDeltaPair?: (scheme: SchemeService) => {
        roleA: DynamicColor;
        readonly roleB: DynamicColor;
        readonly delta: number;
        readonly polarity: 'darker' | 'lighter' | 'nearer' | 'farther';
        readonly stayTogether: boolean;
    };
}
export declare class ColorEntity {
    private option;
    constructor(option: ColorOptions);
    update(args: Partial<ColorOptions>): void;
    getHex(scheme: SchemeService): string;
    getArgb(scheme: SchemeService): number;
    getName(): string;
    getDynamicColor(): DynamicColor;
}
