import { AccountPage } from "../../../page-objects/automationteststore/account_page";
import { CreateAccount } from "../../../page-objects/automationteststore/create_account_page";
import { HomePage } from "../../../page-objects/automationteststore/home_page";
import { LoginPage } from "../../../page-objects/automationteststore/login_page";
import { faker } from "@faker-js/faker";

describe("Create Account in Automationteststore.com E2E Test", () => {
  beforeEach(() => {
    new HomePage().openAutomationTestStore().clickLoginOrRegisterButton();
    new LoginPage().clickContinueButton();
  });

  it("Create new account", () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const telephone = faker.phone.number();
    const company = faker.company.name();
    const address = faker.location.street();
    const city = faker.location.city();
    const zipcode = faker.location.zipCode();
    const login = faker.internet.userName();
    const password = faker.internet.password();
    new CreateAccount()
      .typeFirstName(firstname)
      .typeLastName(lastname)
      .typeEmail(email)
      .typeTelephone(telephone)
      .typeFax("961-770-7777")
      .typeCompany(company)
      .typeAddress(address)
      .typeCity(city)
      .selectCountry("Czech Republic");
    cy.wait(1000);
    new CreateAccount()
      .selectRegion("Vysocina")
      .typeZipcode(zipcode)
      .typeLoginName(login)
      .typePassword(password)
      .typePasswordConfirm(password)
      .checkUnSubscribe()
      .checkPolicyCheckbox()
      .clickContinue();
    new AccountPage().createdAccountConfirmationVisible();
  });
});
