import { customElement } from "../../helpers/custom_elements";

export class AccountsPage {
  constructor() {
    this.accountsTitle = customElement('[data-testid="title"]');
  }

  titleHasText(titleText) {
    this.accountsTitle.hasText(titleText);
  }
}
