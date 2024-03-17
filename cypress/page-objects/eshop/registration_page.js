export class Registration {
  constructor() {
    this.firstName = "#input-firstname";
    this.lastName = "#input-lastname";
    this.email = "#input-email";
    this.telephone = "#input-telephone";
    this.password = "#input-password";
    this.passwordConfirm = "#input-confirm";
    this.continueButton = ".pull-right > .btn";
  }
  typeFirstName(firstname) {
    cy.get(this.firstName).type(firstname);
    return this;
  }
  typeLastName(lastname) {
    cy.get(this.lastName).type(lastname);
    return this;
  }

  typeEmail(email) {
    cy.get(this.email).type(email);
    return this;
  }

  typePhoneNumber(phonenumber) {
    cy.get(this.telephone).type(phonenumber);
    return this;
  }

  typePassword(password) {
    cy.get(this.password).type(password);
    return this;
  }

  typePassowrdConfirm(passwordconfirm) {
    cy.get(this.passwordConfirm).type(passwordconfirm);
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    return this;
  }
}
