import { ColorService } from './color.service';
import { Module } from '@nestjs/common';
import { ColorManagerService } from './color-manager.service';
import { ThemeModule } from '../theme/theme.module';

@Module({
  imports: [ThemeModule],
  providers: [ColorService, ColorManagerService],
  exports: [ColorService],
})
export class ColorModule {}
