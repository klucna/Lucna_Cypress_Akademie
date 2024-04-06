import { CreateAccount } from "./create_account_page";

export class LoginPage {
  constructor() {
    this.continueButton =
      'button[class="btn btn-orange pull-right"] [class="fa fa-check fa"]';
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return CreateAccount;
  }
}
