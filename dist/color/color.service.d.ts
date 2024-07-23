import { DefaultColorModel } from './models/default-color.model';
import { DynamicColorService } from './dynamic-color.service';
import { Hct } from '@material/material-color-utilities';
import { SchemeService } from '../theme/scheme-service';
export declare class ColorService {
    private defaultColorModel;
    private dynamicColorService;
    private schemeService;
    constructor(defaultColorModel: DefaultColorModel, dynamicColorService: DynamicColorService, schemeService: SchemeService);
    addBaseColors(): void;
    getArgb(key: string): number;
    getHex(key: string): string;
    getHct(key: string): Hct;
}
