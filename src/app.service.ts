import { ColorService } from './color/color.service';
import { ThemeService } from './theme/services/theme.service';

export class AppService {
  public colorService: ColorService;
  public themeService: ThemeService;
  constructor({
    colorService,
    themeService,
  }: {
    colorService: ColorService;
    themeService: ThemeService;
  }) {
    this.colorService = colorService;
    this.themeService = themeService;
  }
}
