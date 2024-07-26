import { ColorService } from './color/services/color.service';
import { ThemeService } from './theme/services/theme.service';
import { ConfigService } from './config';

export class AppService {
  public colorService: ColorService;
  public themeService: ThemeService;
  public configService: ConfigService;

  constructor({
    colorService,
    themeService,
    configService,
  }: {
    colorService: ColorService;
    themeService: ThemeService;
    configService: ConfigService;
  }) {
    this.configService = configService;
    this.colorService = colorService;
    this.themeService = themeService;
  }
}
