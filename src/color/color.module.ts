import { ColorService } from './color.service';
import { ColorManagerService } from './color-manager.service';
import { asClass } from 'awilix';
import { Module } from '../app.container';

export const ColorModule: Module = {
  colorManagerService: asClass(ColorManagerService).singleton(),
  colorService: asClass(ColorService).singleton(),
};
