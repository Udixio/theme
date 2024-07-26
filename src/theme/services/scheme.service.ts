import { SchemeEntity, SchemeOptions } from '../entities/scheme.entity';
import {
  argbFromHex,
  Hct,
  TonalPalette,
} from '@material/material-color-utilities';

export type SchemeServiceOptions = Omit<
  SchemeOptions,
  'palettes' | 'sourceColorArgb'
> & {
  sourcesColorHex: Record<string, string> & { primary?: string };
  palettes: Record<
    string,
    {
      sourceColorkey?: string;
      tonalPalette: (sourceColorHct: Hct) => TonalPalette;
    }
  >;
};

export class SchemeService {
  private schemeEntity?: SchemeEntity;
  private options?: SchemeServiceOptions;

  createOrUpdate(options: Partial<SchemeServiceOptions>) {
    this.options = {
      ...this.options,
      ...options,
      sourcesColorHex: {
        ...this.options?.sourcesColorHex,
        ...options.sourcesColorHex,
      },
      palettes: {
        ...this.options?.palettes,
        ...options.palettes,
      },
    } as SchemeServiceOptions;
    const palettes = new Map<string, TonalPalette>();

    if (!this.options.sourcesColorHex.primary) {
      throw new Error('Primary source color is not set');
    }

    const sourceColorArgb = argbFromHex(this.options.sourcesColorHex.primary);
    const sourceColorHct: Hct = Hct.fromInt(sourceColorArgb);

    if (!this.options.palettes) {
      return;
    }
    for (const [
      key,
      { sourceColorkey, tonalPalette: paletteFunction },
    ] of Object.entries(this.options.palettes)) {
      let palette: TonalPalette;
      if (!sourceColorkey) {
        palette = paletteFunction(sourceColorHct);
      } else {
        const sourceColorArgb = argbFromHex(
          this.options.sourcesColorHex[sourceColorkey]
        );
        const sourceColorHct: Hct = Hct.fromInt(sourceColorArgb);
        palette = paletteFunction(sourceColorHct);
      }
      palettes.set(key, palette);
    }
    this.schemeEntity = new SchemeEntity({
      ...this.options,
      palettes: palettes,
      sourceColorArgb: sourceColorArgb,
    });
  }

  get(): SchemeEntity {
    if (!this.schemeEntity) {
      throw new Error('Scheme is not created');
    }
    return this.schemeEntity;
  }
}
