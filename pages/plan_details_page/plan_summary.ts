import { t } from 'testcafe';
import { PlanSummaryElements } from '../../elements/plan_details_page/plan_summary_elements';
import { SIM_TYPE_JP } from '../../enum/sim_type';
import { Logger } from '../../logger/logger';

export class PlanSummaryObject {
  private planSummaryElements: PlanSummaryElements;

  constructor() {
    this.planSummaryElements = new PlanSummaryElements();
  }

  async checkSimType(simType: SIM_TYPE_JP) {
    Logger.step(`Check SIM type on summary which displays ${simType}`);

    await t.expect(this.planSummaryElements.simType.innerText).eql(simType);
  }

  async deleteSelectedPlan(planName: string) {
    Logger.step(`Delete the selected plan with name "${planName}"`);

    await t.click(this.planSummaryElements.deletePlanBtn(planName));
  }
}
