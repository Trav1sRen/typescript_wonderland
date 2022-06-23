import { SIM_TYPE } from '../enum/sim_type';
import { LoginFormObject } from '../pages/login_page/login_form';
import { PlanDetailsMainBodyObject } from '../pages/plan_details_page/main_body';
import { DisplayPlansObject } from '../pages/plan_selection_page/display_plans';
import { PlanSelectionPageHeaderObject } from '../pages/plan_selection_page/header';

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
  await planDetailsMainBody.changeSimType(SIM_TYPE.E_SIM);
});
