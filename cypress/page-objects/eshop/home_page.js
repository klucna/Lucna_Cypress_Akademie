export class HomePage {
  constructor() {
    this.esopURL = "https://tredgate.com/eshop/";
    this.myAccountButton = ".dropdown > .dropdown-toggle > .fa";
    this.registerButton = ".dropdown-menu > :nth-child(1) > a";
  }

  openEshop() {
    cy.visit(this.esopURL);
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
