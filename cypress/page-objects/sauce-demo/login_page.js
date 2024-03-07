export class LoginPage {
  constructor() {
    this.sauceDemoURL = "https://www.saucedemo.com/";
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
  }
  openSauceDemo() {
    cy.visit(this.sauceDemoURL);
    return this;
  }
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickButton() {
    cy.get(this.loginButton).click();
    // TODO: add return statement
  }
}
