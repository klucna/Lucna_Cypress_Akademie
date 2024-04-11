import { customElement } from "../../helpers/custom_elements";
import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.accountsButton = customElement(
      '[data-testid="accounts_section_link"]'
    );
    cy.intercept("/accounts/user/**").as("accounts_api"); //* znamená jeden znak za /, ** jakýkoilv počet znaků za lomítkem//
  }

  clickAccountButton() {
    this.accountsButton.get().click();
    cy.wait("@accounts_api");
    return new AccountsPage();
  }
}
