import { t } from 'testcafe';
import { PlanSelectionPageHeaderElements } from '../../elements/plan_selection_page/header_elements';
import { Logger } from '../../logger/logger';

export class PlanSelectionPageHeaderObject {
  private headerElements: PlanSelectionPageHeaderElements;

  constructor() {
    this.headerElements = new PlanSelectionPageHeaderElements();
  }

  async clickLoginBtn() {
    Logger.step('Click "Login" button on plan selection page');
    await t.click(this.headerElements.loginBtn);
  }
}
