import { customElement } from "../../helpers/custom_elements";
import { UsersPage } from "./users_page";

export class AddUser {
  constructor() {
    this.accessGroup = customElement("div[data-testid='Access Group'] select");
    this.username = customElement("div[data-testid='Username'] input");
    this.password = customElement("#password");
    this.firstName = customElement("div[data-testid='First Name'] input");
    this.lastName = customElement("div[data-testid='Last Name'] input");
    this.userEmail = customElement("div[data-testid='User Email'] input");
    this.saveUserButon = customElement("button[type='submit']");
  }

  selectAccessGroup(accessGroup) {
    this.accessGroup.get().select(accessGroup);
    return this;
  }

  typeUsername(username) {
    this.username.get().type(username);
    return this;
  }

  typePassword(password) {
    this.password.get().type(password);
    return this;
  }

  typeFirstName(firstName) {
    this.firstName.get().type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastName.get().type(lastName);
    return this;
  }

  typeUserEmail(userEmail) {
    this.userEmail.get().type(userEmail);
    return this;
  }

  clickSave() {
    this.saveUserButon.get().click();
    return UsersPage;
  }
}
