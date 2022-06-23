import { t } from 'testcafe';
import { DisplayPlansElements } from '../../elements/plan_selection_page/display_plans_elements';
import { Logger } from '../../logger/logger';

export class DisplayPlansObject {
  private plansElement: DisplayPlansElements;

  constructor() {
    this.plansElement = new DisplayPlansElements();
  }

  async selectPlanByName(planName: string) {
    Logger.step(`Select the plan with name "${planName}"`);

    await t.click(this.plansElement.selectThisPlan(planName));
  }
}
