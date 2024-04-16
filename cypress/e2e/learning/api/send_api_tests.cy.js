import { faker } from "@faker-js/faker";

describe("Send HTTP Requests Tests", () => {
  it("POST registration TEG#B", () => {
    const username = faker.internet.userName();
    const password = "CypressJeSuper2024!";
    const email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);

    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      cy.wrap(response.body).should("exist"); //toto je trochu můj výmysl, dokumentace to neuvádí, ale funguje to//
      expect(response.body.userId).to.be.a("number");
      expect(response.body.username).to.be.eq(username);
    });
  });
});
