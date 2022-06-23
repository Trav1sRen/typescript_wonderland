import { t } from 'testcafe';
import { PlanSelectionPopUpElements } from '../../elements/plan_selection_page/pop_up_elements';
import { Logger } from '../../logger/logger';

export class PlanSelectionPopUpObject {
  private popUpElement: PlanSelectionPopUpElements;

  constructor() {
    this.popUpElement = new PlanSelectionPopUpElements();
  }

  async checkSuccessPopup() {
    Logger.step(`Verify the pop up indicating success`);

    await t.expect(this.popUpElement.successMsg.exists).ok();
  }
}
