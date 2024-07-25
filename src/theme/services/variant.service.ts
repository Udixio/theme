import { SchemeService } from './scheme.service';
import { VariantEntity } from '../entities/variant.entity';
import { TonalPalette } from '@material/material-color-utilities';

export class VariantService {
  private readonly schemeService: SchemeService;
  constructor({ schemeService }: { schemeService: SchemeService }) {
    this.schemeService = schemeService;
  }

  set(variantEntity: VariantEntity) {
    if (!variantEntity.palettes.error) {
      variantEntity.palettes.error = () =>
        TonalPalette.fromHueAndChroma(25.0, 84.0);
    }
    this.schemeService.createOrUpdate(variantEntity);
  }
}
