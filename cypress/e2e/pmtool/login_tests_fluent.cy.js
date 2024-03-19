import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });

  it("Open Lost Password page and return to LoginPage", () => {
    new LoginPage().clickLostPassword().clickBack();
  }); //toto je z lekce cvičení Mocha tests//
});
