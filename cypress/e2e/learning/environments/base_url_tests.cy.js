describe("Base URL Tests", () => {
  it("Using baseUrl in visit", () => {
    cy.visit("/"); //lomítko lze využít jen na jednu adresu - u dalších je nutné vypsat//
    cy.get("#username").should("be.visible");
  });
});
