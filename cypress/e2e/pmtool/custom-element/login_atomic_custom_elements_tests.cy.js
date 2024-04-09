import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe(
  "Login Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage(); //vyčištění cookies kvůli test izolaci//
      new LoginPage().openPmtool();
    });

    context("Username input tests", () => {
      it("Username is visible", () => {
        new LoginPage().usernameInput.isVisible(); //volám to na elementu (customelement), ne v metodě v PO//
      });

      it("Username have placeholder", () => {
        new LoginPage().usernameInput.hasPlaceholder("Username");
      });

      it("Username has value after type", () => {
        new LoginPage().typeUsername("test").usernameInput.hasValue("test");
      });
    });
  }
);
