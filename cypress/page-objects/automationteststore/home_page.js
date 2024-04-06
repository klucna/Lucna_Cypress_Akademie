import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.automationTestStoreUrl = "https://automationteststore.com/";
    this.loginOrRegisterButton = "#customernav";
  }

  openAutomationTestStore() {
    cy.visit(this.automationTestStoreUrl);
    return this;
  }

  clickLoginOrRegisterButton() {
    cy.get(this.loginOrRegisterButton).click();
    return LoginPage;
  }
}
