import { AccountPage } from "./account_page";

export class CreateAccount {
  constructor() {
    this.firstName = "#AccountFrm_firstname";
    this.lastName = "#AccountFrm_lastname";
    this.email = "#AccountFrm_email";
    this.telephone = "#AccountFrm_telephone";
    this.fax = "#AccountFrm_fax";
    this.company = "#AccountFrm_company";
    this.address = "#AccountFrm_address_1";
    this.city = "#AccountFrm_city";
    this.region = "#AccountFrm_zone_id";
    this.zipcode = "#AccountFrm_postcode";
    this.country = "#AccountFrm_country_id";
    this.loginName = "#AccountFrm_loginname";
    this.password = "#AccountFrm_password";
    this.passwordConfirm = "#AccountFrm_confirm";
    this.subscribeRadio = 'input[id="AccountFrm_newsletter0"]';
    this.agreePolicyCheckbox = 'input[id="AccountFrm_agree"]';
    this.continueButton =
      'button[class="btn btn-orange pull-right lock-on-click"]';
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

  typeTelephone(telephone) {
    cy.get(this.telephone).type(telephone);
    return this;
  }

  typeFax(fax) {
    cy.get(this.fax).type(fax);
    return this;
  }

  typeCompany(company) {
    cy.get(this.company).type(company);
    return this;
  }

  typeAddress(address) {
    cy.get(this.address).type(address);
    return this;
  }

  typeCity(city) {
    cy.get(this.city).type(city);
    return this;
  }

  selectRegion(select) {
    cy.get(this.region).select(select);
    return this;
  }

  typeZipcode(zipcode) {
    cy.get(this.zipcode).type(zipcode);
    return this;
  }

  selectCountry(country) {
    cy.get(this.country).select(country);
    return this;
  }

  typeLoginName(login) {
    cy.get(this.loginName).type(login);
    return this;
  }

  typePassword(password) {
    cy.get(this.password).type(password);
    return this;
  }

  typePasswordConfirm(passwordconfirm) {
    cy.get(this.passwordConfirm).type(passwordconfirm);
    return this;
  }

  checkUnSubscribe() {
    cy.get(this.subscribeRadio).check();
    cy.get(this.subscribeRadio).should("be.checked");
    return this;
  }

  checkPolicyCheckbox() {
    cy.get(this.agreePolicyCheckbox).check();
    cy.get(this.agreePolicyCheckbox).should("be.checked");
    return this;
  }

  clickContinue() {
    cy.get(this.continueButton).click();
    return AccountPage;
  }
}
