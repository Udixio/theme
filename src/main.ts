import AppContainer from './app.container';
import { AppService } from './app.service';

export function bootstrap(): AppService {
  return AppContainer.resolve<AppService>('appService');
}

export async function bootstrapFromConfig(path?: string): Promise<AppService> {
  const app = AppContainer.resolve<AppService>('appService');
  if (path) app.configService.configPath = path;
  await app.configService.loadConfig();
  return app;
}
