import { HomePage } from "../../../page-objects/eshop/home_page";
import { Registration } from "../../../page-objects/eshop/registration_page";

describe("Open eshop and Fill in Registration Form", () => {
  it("Open eshop and click My Account", () => {
    const homePage = new HomePage();
    homePage.openEshop();
    homePage.clickMyAccountButton();
    homePage.clickRegisterButton();
  });

  it.only("Fill in Registration Details", () => {
    const homePage = new HomePage();
    const registration = new Registration();
    homePage.openEshop();
    homePage.clickMyAccountButton();
    homePage.clickRegisterButton();
    registration.typeFirstName("Kateřina");
    registration.typeLastName("Lučná");
    registration.typeEmail("katerina.lucna@gmail.com");
    registration.typePhoneNumber("723799381");
    registration.typePassword("jsembezpecneheslo");
    registration.typePassowrdConfirm("jsembezpecneheslo");
    registration.clickContinueButton();
  });
});
