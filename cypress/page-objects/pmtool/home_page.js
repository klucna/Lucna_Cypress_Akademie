import { HeaderSection } from "./common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/");
    this.welcomePageHeader = "#welcome-page-header";
    //tato kontrola už tu taky nemůže být cy.get(this.welcomePageHeader).should("be.visible");
  }

  //v HomePage jsme po úpravě header_section a menu_section odmazali metodu a jeden this.//
}
