import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe(
  "Users Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    before(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      const username = Cypress.env("pmtool_username");
      const password = Cypress.env("pmtool_password");
      new LoginPage()
        .openPmtool()
        .typeUsername(username)
        .typePassword(password)
        .clickLogin();
      new UsersPage().visit();
    });

    context("Title tests", () => {
      it("Title is visible", () => {
        new UsersPage().pageTitle.isVisible(); //volám to na elementu (customelement), ne v metodě v PO//
      });

      it("Title have text", () => {
        new UsersPage().pageTitle.hasText("Users");
      });
    });
    context("Add user button tests", () => {
      it("Add user button is visible", () => {
        new UsersPage().addUserButton.isVisible();
      });

      it("Add user button have text", () => {
        new UsersPage().addUserButton.hasText("Add User");
      });
    });
  }
);
