import { PluginAbstract } from './plugin.abstract';
import { AppService } from '../app.service';

export type PluginConstructor = new (
  appService: AppService,
  options: any
) => PluginAbstract;

export class PluginService {
  private pluginInstances = new Map<string, PluginAbstract>();
  private pluginConstructors = new Map<string, [PluginConstructor, object]>();

  public addPlugin(plugin: PluginConstructor, config: object) {
    this.pluginConstructors.set(plugin.name, [plugin, config]);
  }

  public loadPlugins(appService: AppService) {
    this.pluginConstructors.forEach(([plugin, option]) => {
      this.pluginInstances.set(plugin.name, new plugin(appService, option));
    });
  }

  public getPlugin<T extends PluginAbstract>(
    plugin: new (appService: AppService, options: any) => T
  ): T {
    const pluginInstance = this.pluginInstances.get(plugin.name);
    if (!pluginInstance) throw new Error(`Plugin ${plugin.name} not found`);
    return pluginInstance as T;
  }
}
