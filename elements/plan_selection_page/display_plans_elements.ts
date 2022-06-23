import { Selector } from 'testcafe';

export class DisplayPlansElements {
  selectThisPlan = (planName: string) =>
    Selector('p')
      .withExactText(planName)
      .parent('.main-plan')
      .nextSibling('.rktn-catalog-card-footer')
      .nth(-1) // skip the invisible element
      .find('button.primary');
}
