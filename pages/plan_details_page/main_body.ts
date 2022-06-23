import { t } from 'testcafe';
import { PlanDetailsMainBodyElements } from '../../elements/plan_details_page/main_body_elements';
import { SIM_TYPE_JP } from '../../enum/sim_type';
import { Logger } from '../../logger/logger';

export class PlanDetailsMainBodyObject {
  private mainBodyElements: PlanDetailsMainBodyElements;

  constructor() {
    this.mainBodyElements = new PlanDetailsMainBodyElements();
  }

  async changeSimType(simType: SIM_TYPE_JP) {
    Logger.step(`Change SIM type to "${simType}"`);

    if (simType !== SIM_TYPE_JP.SIM_CARD) {
      if (simType === SIM_TYPE_JP.E_SIM) {
        await t.click(this.mainBodyElements.eSimBtn);
      }
    }
  }
}
