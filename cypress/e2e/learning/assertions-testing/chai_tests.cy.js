import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it('Login header has text "Login"', () => {
    cy.get("h3.form-title")
      .should("have.text", "Login")
      .should("contain.text", "Login");
  });

  it.skip('Failing: Login header has text "Login2"', () => {
    cy.get("h3.form-title").should("have.text", "Login2");
  });
  //skip znamená, že tento test přeskočí, používat místo it.only//

  it("Lost password anchor has text", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Username valid value", () => {
    cy.get("#username").type("Test").should("have.value", "Test");
  });

  it("Email in LostPassword page has text", () => {
    cy.get("#forget_password")
      .click()
      .get(":nth-child(3) > .input-icon > .form-control")
      .type("katerina.lucna@gmail.com")
      .should("have.value", "katerina.lucna@gmail.com");
  });

  //Petrova verze//
  it("E-mail in Lost Password page has text", () => {
    new LoginPage().clickLostPassword();
    const validationText = "TestEmail";
    cy.get('[name="email"]')
      .type(validationText)
      .should("have.value", validationText);
  });

  it("Password input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Button has class btn-info class", () => {
    cy.get(".btn").should("have.class", "btn-info");
  });

  it("Login button is visible and exists", () => {
    cy.get(".btn").should("be.visible").should("exist");
  });

  it("TEG Project Management logo is visible", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Password forgotten anchor exists", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username has placeholder Username", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password has placeholder Password", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
