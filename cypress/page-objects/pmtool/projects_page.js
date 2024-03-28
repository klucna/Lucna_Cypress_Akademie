import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./projects/create_new_project_modal";

export class ProjectPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitle = "h3.page-title";
    cy.get(this.pageTitle).should("contain.text", "Projects");
    this.AddProjectButton = '[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.AddProjectButton).click();
    return new CreateNewProjectModal();
  }
}
