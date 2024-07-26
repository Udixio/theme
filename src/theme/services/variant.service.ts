import { SchemeService } from './scheme.service';
import { VariantEntity } from '../entities/variant.entity';
import { Hct, TonalPalette } from '@material/material-color-utilities';

export class VariantService {
  public customPalettes: Record<string, string> = {};
  private variantEntity?: VariantEntity;

  private readonly schemeService: SchemeService;
  constructor({ schemeService }: { schemeService: SchemeService }) {
    this.schemeService = schemeService;
  }

  addCustomPalette(key: string, colorHex: string) {
    this.customPalettes[key] = colorHex;
    this.update();
  }

  set(variantEntity: VariantEntity) {
    this.variantEntity = variantEntity;
    if (!variantEntity.palettes.error) {
      variantEntity.palettes.error = () =>
        TonalPalette.fromHueAndChroma(25.0, 84.0);
    }
    this.update();
  }
  private update() {
    if (!this.variantEntity) return;
    const palettes: Record<
      string,
      {
        sourceColorkey?: string;
        tonalPalette: (sourceColorHct: Hct) => TonalPalette;
      }
    > = {};
    Object.keys(this.variantEntity.palettes).forEach((key) => {
      palettes[key] = { tonalPalette: this.variantEntity!.palettes[key] };
    });
    if (this.variantEntity.customPalettes) {
      Object.keys(this.customPalettes).forEach((key) => {
        palettes[key] = {
          sourceColorkey: key,
          tonalPalette: this.variantEntity!.customPalettes!,
        };
      });
    }
    this.schemeService.createOrUpdate({
      sourcesColorHex: this.customPalettes,
      palettes: palettes,
    });
  }
}
