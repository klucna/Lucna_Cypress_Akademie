export class HomePage {
  constructor() {
    this.eshopURL = "https://tredgate.com/eshop/";
    this.myAccountButton = ".dropdown > .dropdown-toggle > .fa";
    this.registerButton = ".dropdown-menu > :nth-child(1) > a";
  }

  openEshop() {
    cy.visit(this.eshopURL);
    return this;
  }

  clickMyAccountButton() {
    cy.get(this.myAccountButton).click();
    return this;
  }

  clickRegisterButton() {
    cy.get(this.registerButton).click();
    return this;
  }
}
