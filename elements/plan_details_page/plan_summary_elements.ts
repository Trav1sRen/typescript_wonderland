import { Selector } from 'testcafe';

export class PlanSummaryElements {
  simType = Selector('.rktn-sales-order-items__section')
    .nth(1)
    .find('.ta_param_name');

  deletePlanBtn = (planName: string) =>
    Selector('.rktn-sales-order-items__section')
      .nth(0)
      .find('.ta_param_name')
      .withExactText(planName)
      .nextSibling(0)
      .find('button');
}
