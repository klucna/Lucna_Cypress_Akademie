import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Visibility, placeholders, texts Tests", () => {
    new LoginPage()
      .usernameHavePlacelhoder("Username")
      .passwordHavePlacelhoder("Password")
      .rememberMeHaveText("Remember Me")
      .loginButtonHaveText("Login")
      .passwordForgottenHaveText("Password forgotten?")
      .logoIsVisible();
  });
});
