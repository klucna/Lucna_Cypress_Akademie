describe("Keyboard arguments", () => {
  it("Confirm form by pressing enter key", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress{enter}");
  });
});

/*
Možná verze (Petr)
describe("Keyboard arguments", () => {
  it("Confirm form by pressing enter key", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type(Cypress.env("pmtool_password") + "{enter}");
  });
});*/
