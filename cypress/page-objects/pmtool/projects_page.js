import { HeaderSection } from "./common/header_section";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = "h3.page-title";
    cy.get(this.pageTitle).should("contain.text", "Projects");
  }
}
