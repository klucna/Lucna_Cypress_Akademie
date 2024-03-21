import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";
import { ProjectPage } from "./projects_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  //v HomePage jsme po úpravě header_section a menu_section odmazali metodu a jeden this.//
}
