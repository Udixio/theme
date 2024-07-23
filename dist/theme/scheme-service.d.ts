import { Hct, TonalPalette } from '@material/material-color-utilities';
export interface SchemeOptions {
    sourceColorArgb: number;
    contrastLevel: number;
    isDark: boolean;
    palettes: Map<string, TonalPalette>;
}
export declare class SchemeService {
    options?: SchemeOptions;
    get contrastLevel(): number;
    get isDark(): boolean;
    get sourceColorHct(): Hct;
    getPalette(key: string): TonalPalette;
}
