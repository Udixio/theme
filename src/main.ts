import AppContainer from './app.container';
import { AppService } from './app.service';

export function main(): AppService {
  return AppContainer.resolve<AppService>('appService');
}
