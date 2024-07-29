import { PluginAbstract } from './plugin.abstract';
import { AppService } from '../app.service';

export type PluginConstructor = (new (
  appService: AppService,
  options: any
) => PluginAbstract) & { dependencies: PluginConstructor[] };

export class PluginService {
  private pluginInstances = new Map<string, PluginAbstract>();
  private pluginConstructors = new Map<string, [PluginConstructor, object]>();

  public addPlugin(plugin: PluginConstructor, config: object) {
    this.pluginConstructors.set(plugin.name, [plugin, config]);
  }

  public loadPlugins(appService: AppService) {
    const plugins = new Map(this.pluginConstructors);

    let size = 0;
    do {
      size = plugins.size;
      plugins.forEach(([plugin, option], key) => {
        const deps = plugin.dependencies.filter(
          (dep) => !this.pluginInstances.has(dep.name)
        );
        if (deps.length === 0) {
          this.pluginInstances.set(plugin.name, new plugin(appService, option));
          plugins.delete(key);
        }
      });
    } while (plugins.size != 0 && plugins.size < size);

    if (plugins.size > 0)
      console.log(
        "Some plugins couldn't be loaded due to missing dependencies: ",
        Array.from(plugins.keys())
      );
  }

  public getPlugin<T extends PluginAbstract>(
    plugin: new (appService: AppService, options: any) => T
  ): T {
    const pluginInstance = this.pluginInstances.get(plugin.name);
    if (!pluginInstance) throw new Error(`Plugin ${plugin.name} not found`);
    return pluginInstance as T;
  }
}
