import { ColorManagerService } from './color-manager.service';
import { ColorInterface } from './color.interface';
import { ColorEntity, ColorOptions } from './entities/color.entity';
import { defaultColors, DynamicColorKey } from './models/default-color.model';

export class ColorService implements ColorInterface {
  private readonly colorManagerService: ColorManagerService;
  constructor({
    colorManagerService,
  }: {
    colorManagerService: ColorManagerService;
  }) {
    this.colorManagerService = colorManagerService;
  }

  getAllColors() {
    return this.colorManagerService.getAll();
  }

  // getColors() {
  //   const colors: Record<string, string> = {};
  //
  //   for (const [key, value] of this.colorManagerService.getAll()) {
  //     colors[key] = hexFromArgb(value.getArgb(this.schemeService.get()));
  //   }
  //
  //   return colors;
  // }

  addBaseColors() {
    this.colorManagerService.addFromPalette('primary');
    this.colorManagerService.addFromPalette('secondary');
    this.colorManagerService.addFromPalette('tertiary');

    const colors = defaultColors(this.colorManagerService);
    Object.keys(colors).map((key) => {
      const color: Partial<ColorOptions> | undefined =
        colors[key as DynamicColorKey];
      if (!color) return;
      return this.colorManagerService.createOrUpdate(key, color);
    });
  }

  addColor(key: string, color: ColorOptions): ColorEntity {
    return this.colorManagerService.createOrUpdate(key, color);
  }

  addColors(colors: Record<string, ColorOptions>): ColorEntity[] {
    return Object.keys(colors).map((key) => this.addColor(key, colors[key]));
  }

  getColor(key: string): ColorEntity {
    return this.colorManagerService.get(key);
  }

  removeColor(key: string): boolean {
    return this.colorManagerService.remove(key);
  }

  updateColor(key: string, newColor: Partial<ColorOptions>): ColorEntity {
    return this.colorManagerService.createOrUpdate(key, newColor);
  }
}
