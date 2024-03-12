import { LoginPage } from "./login_page";
import { ShoppingCart } from "./shopping_cart";

export class HomePage {
  constructor() {
    this.menuButton = "#react-burger-menu-btn";
    this.logoutButton = "#logout_sidebar_link";
    this.addBackpackToCartButton = "#add-to-cart-sauce-labs-backpack";
    this.shoppingCartButton = "#shopping_cart_container";
  }
  clickMenu() {
    cy.get(this.menuButton).click();
    return this;
  }
  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
  clickAddBackpackToCart() {
    cy.get(this.addBackpackToCartButton).click();
    return this;
  }
  clickShoppingCart() {
    cy.get(this.shoppingCartButton).click();
    return new ShoppingCart();
  }
}
