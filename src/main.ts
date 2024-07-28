import AppContainer from './app.container';
import { AppService } from './app.service';
import { ConfigService } from './config';

export function bootstrap(): AppService {
  return AppContainer.resolve<AppService>('appService');
}

export function bootstrapFromConfig(path?: string): AppService {
  const configService = AppContainer.resolve<ConfigService>('configService');
  if (path) configService.configPath = path;
  configService.loadConfig();
  return AppContainer.resolve<AppService>('appService');
}
