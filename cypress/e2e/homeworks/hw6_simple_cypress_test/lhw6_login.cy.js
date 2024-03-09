describe("Register to eshop tredgate", () => {
  it("Open tredgate", () => {
    cy.visit("http://tredgate.com/eshop/index.php?route=account/register");
    cy.get("#input-firstname").type("Kateřina");
    cy.get("#input-lastname").type("Lučná");
    cy.get("#input-email").type("katerina.lucna@gmail.com");
    cy.get("#input-telephone").type("222 333 444");
    cy.get("#input-password").type("heslo");
    cy.get("#input-confirm").type("heslo");
    cy.get(".pull-right > .btn").click();
  });
});
