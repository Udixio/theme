import { ColorService } from './color/color.service';
import { ThemeService } from './theme/theme.service';
export declare class AppService {
    colorService: ColorService;
    themeService: ThemeService;
    constructor(colorService: ColorService, themeService: ThemeService);
}
