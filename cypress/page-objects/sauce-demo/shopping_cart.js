export class ShoppingCart {
  constructor() {
    this.removeButton = "#remove-sauce-labs-backpack";
  }
  clickRemoveButton() {
    cy.get(this.removeButton).click();
    return this;
  }
}
