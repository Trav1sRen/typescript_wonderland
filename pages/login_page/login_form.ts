import { t } from 'testcafe';
import { LoginFormElements } from '../../elements/login_page/form_elements';
import { Logger } from '../../logger/logger';

interface ILoginFormInput {
  username: string;
  pw: string;
}

export class LoginFormObject {
  private loginFormElements: LoginFormElements;

  constructor() {
    this.loginFormElements = new LoginFormElements();
  }

  async inputLoginInfo({ username, pw }: ILoginFormInput) {
    Logger.step('Input the necessary information into user login form');

    await t
      .typeText(this.loginFormElements.usernameInput, username)
      .typeText(this.loginFormElements.pwInput, pw);
  }

  async clickLoginBtn() {
    Logger.step('Click login button');

    await t.click(this.loginFormElements.loginBtn);
  }
}
