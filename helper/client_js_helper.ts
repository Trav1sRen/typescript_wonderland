import { ClientFunction, t } from 'testcafe';
import { Logger } from '../logger/logger';

export class ClientJsHelper {
  static async checkPageRoute(route: string) {
    Logger.step(`Check page route conatins "${route}"`);

    await t
      .expect(ClientFunction(() => window.location.href)())
      .contains(route);
  }
}
