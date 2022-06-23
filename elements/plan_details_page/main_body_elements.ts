import { Selector } from 'testcafe';

export class PlanDetailsMainBodyElements {
  eSimBtn = Selector('#c_sh_11-0').nth(-1); // there are two buttons with the same id...
}
