import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsMenu = "#Projects";
    this.dashboardMenu = "#dashboard";
    this.userMenu = "#Users a.menu-itemsitems1";
  }

  clickProjects() {
    const { ProjectPage } = require("../projects_page");
    cy.get(this.projectsMenu).click();
    return new ProjectPage();
  }

  clickDashboard() {
    const { HomePage } = require("../home_page");
    cy.get(this.dashboardMenu).click();
    return new HomePage();
  }

  clickUsers() {
    const { UsersPage } = require("../users_page");
    cy.get(this.userMenu).click();
    return new UsersPage();
  }
}
