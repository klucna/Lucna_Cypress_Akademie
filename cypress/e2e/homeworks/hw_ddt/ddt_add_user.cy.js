import { faker } from "@faker-js/faker";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import newUserData from "../../../fixtures/new_user_data.json";
import { AddUser } from "../../../page-objects/pmtool/add_user";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Data Driven Tests Homework", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers()
      .clickAddUserButton();
  });

  newUserData.forEach((userData) => {
    it(`DDT Add User: ${userData.description}`, () => {
      const userName = userData.username_prefix + faker.internet.userName();
      const accessGroup = userData.access_group;
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const userEmail = faker.internet.email();

      cy.log(userName);
      cy.log(accessGroup);

      new AddUser()
        .selectAccessGroup(userData.access_group)
        .typeUsername(userName)
        .typePassword(userData.password)
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .typeUserEmail(userEmail)
        .clickSave();

      new UsersPage().clickProfile().clickLogout();

      new LoginPage()
        .typeUsername(userName)
        .typePassword(userData.password)
        .clickLogin()
        .clickProfile()
        .profileButtonContainsText(firstName + " " + lastName)
        .clickMyAccountButton()
        .firstNameHaveText(firstName)
        .lastNameHaveText(lastName);
    });
  });
});
