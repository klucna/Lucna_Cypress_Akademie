import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password"); //ze souboru cypress.env.json, kde jsou hesla//
    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("Open Lost Password page and return to LoginPage", () => {
    new LoginPage().clickLostPassword().clickBack();
  }); //toto je z lekce cvičení Mocha tests//
});
