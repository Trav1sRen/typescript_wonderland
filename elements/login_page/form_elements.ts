import { Selector } from 'testcafe';

export class LoginFormElements {
  usernameInput = Selector('#loginInner_u');
  pwInput = Selector('#loginInner_p');
  loginBtn = Selector('.loginButton');
}
