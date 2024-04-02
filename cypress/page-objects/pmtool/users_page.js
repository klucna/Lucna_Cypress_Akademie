import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = "h3.page-title";
    // taky nemůže být tato kontrola :( cy.get(this.pageTitle).should("contain.text", "Users");
  }
}
