import { SIM_TYPE_JP } from '../enum/sim_type';
import { ClientJsHelper } from '../helper/client_js_helper';
import { LoginFormObject } from '../pages/login_page/login_form';
import { PlanDetailsMainBodyObject } from '../pages/plan_details_page/main_body';
import { PlanSummaryObject } from '../pages/plan_details_page/plan_summary';
import { DisplayPlansObject } from '../pages/plan_selection_page/display_plans';
import { PlanSelectionPageHeaderObject } from '../pages/plan_selection_page/header';
import { PlanSelectionPopUpObject } from '../pages/plan_selection_page/pop_up';

fixture('Demo scenario for user login and plan selection')
  .page('https://uat1-onboarding.rmb-lab.jp/')
  .beforeEach(async () => {
    const planSelectionPageHeader = new PlanSelectionPageHeaderObject();
    await planSelectionPageHeader.clickLoginBtn();

    const loginForm = new LoginFormObject();
    await loginForm.inputLoginInfo({
      username: 'uat_ag0023@uattest.com',
      pw: '#12345'
    });
    await loginForm.clickLoginBtn();
  });

test('Select the plan and proceed to plan details', async () => {
  const displayPlans = new DisplayPlansObject();
  await displayPlans.selectPlanByName('Rakuten UN-LIMIT VII');

  const planDetailsMainBody = new PlanDetailsMainBodyObject();
  await ClientJsHelper.checkPageRoute('/plan-details');
  await planDetailsMainBody.changeSimType(SIM_TYPE_JP.E_SIM);

  const planSummary = new PlanSummaryObject();
  await planSummary.checkSimType(SIM_TYPE_JP.E_SIM);
  await planSummary.deleteSelectedPlan('Rakuten UN-LIMIT VII');

  const popUp = new PlanSelectionPopUpObject();
  await popUp.checkSuccessPopup();
});
