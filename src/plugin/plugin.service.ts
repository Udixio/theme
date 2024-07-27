import { PluginAbstract } from './plugin.abstract';
import { AppService } from '../app.service';

export class PluginService {
  private pluginInstances = new Map<string, PluginAbstract>();
  private pluginConstructors = new Map<
    string,
    new (appService: AppService) => PluginAbstract
  >();

  public addPlugin(plugin: new (appService: AppService) => PluginAbstract) {
    this.pluginConstructors.set(plugin.name, plugin);
  }

  public loadPlugins(appService: AppService) {
    this.pluginConstructors.forEach((plugin) => {
      this.pluginInstances.set(plugin.name, new plugin(appService));
    });
  }

  public getPlugin<T extends PluginAbstract>(
    plugin: new (appService: AppService) => T
  ): T | undefined {
    return this.pluginInstances.get(plugin.name) as T;
  }
}
