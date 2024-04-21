import { customElement } from "../../helpers/custom_elements";
import { BasePage } from "./common/base_page";

export class MyAccountPage extends BasePage {
  constructor() {
    super("module=users/account");
    this.firstName = customElement(
      'input[class="form-control input-medium required noSpace"]'
    );
    this.lastName = customElement(
      'input[class="form-control input-medium noSpace required"]'
    );
  }

  firstNameHaveText(firstname) {
    this.firstName.get().should("have.value", firstname);
    return this;
  }

  lastNameHaveText(lastname) {
    this.lastName.get().should("have.value", lastname);
    return this;
  }
}
