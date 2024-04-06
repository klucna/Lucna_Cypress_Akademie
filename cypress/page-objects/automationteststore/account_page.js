export class AccountPage {
  constructor() {
    this.createdAccountMessage = ".maintext";
  }

  createdAccountConfirmationVisible() {
    cy.get(this.createdAccountMessage)
      .should("be.visible")
      .and("have.text", " Your Account Has Been Created!");
  }
}
