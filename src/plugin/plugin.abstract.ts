import { AppService } from '../app.service';

export abstract class PluginAbstract {
  static dependencies: (new () => PluginAbstract)[];

  protected constructor(protected appService: AppService) {}
}
