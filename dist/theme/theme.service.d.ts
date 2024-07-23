import { SchemeOptions, SchemeService } from './scheme-service';
type ThemeOptions = SchemeOptions;
export declare class ThemeService {
    private schemeService;
    constructor(schemeService: SchemeService);
    create(options: ThemeOptions): void;
    update(options: ThemeOptions): void;
}
export {};
