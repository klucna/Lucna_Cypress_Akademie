import { customElement } from "../../helpers/custom_elements";
import { AddUser } from "./add_user";
import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = customElement("h3.page-title");
    // taky nemůže být tato kontrola :( cy.get(this.pageTitle).should("contain.text", "Users");
    this.addUserButton = customElement('[test_id="Add User"]');
  }

  clickAddUserButton() {
    this.addUserButton.get().click();
    return new AddUser();
  }

  titleIsVisible() {
    this.pageTitle.get().should("be.visible"); //předěláno na custom element//
    return this;
  }

  titleHaveText(titleText) {
    this.pageTitle.get().should("have.text", titleText);
    return this;
  }

  addUserButtonIsVisible() {
    this.addUserButton.get().should("be.visible");
    return this;
  }

  addUserButtonHaveText(addUserButtonText) {
    this.addUserButton.get().should("have.text", addUserButtonText);
    return this;
  }
}
