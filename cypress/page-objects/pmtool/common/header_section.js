import { LoginPage } from "../login_page";
import { MyAccountPage } from "../my_account_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout > a";
    this.myAccountButton = ".dropdown-menu > :nth-child(1) > a";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  profileButtonContainsText(profiletext) {
    cy.get(this.profileButton).should("contain", profiletext);
    return this;
  }

  clickMyAccountButton() {
    cy.get(this.myAccountButton).click();
    return new MyAccountPage();
  }
}
