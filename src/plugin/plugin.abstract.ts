import { AppService } from '../app.service';
import { PluginConstructor } from './plugin.service';

export abstract class PluginAbstract {
  static dependencies: PluginConstructor[] = [];

  protected abstract appService: AppService;
  protected abstract options: object;
}
