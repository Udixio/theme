import { AppService } from '../app.service';

export abstract class PluginAbstract {
  static dependencies: (new () => PluginAbstract)[];

  protected abstract appService: AppService;
  protected abstract options: object;
}
