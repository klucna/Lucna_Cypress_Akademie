import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./projects/create_new_project_modal";

export class ProjectPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.pageTitle = "h3.page-title";
    // tuhle kontrolu nemůžeme mít v konstruktoru, jakmile mám v super profolání param do HeaderSection->MenuSection->BasePage :( cy.get(this.pageTitle).should("contain.text", "Projects");
    this.AddProjectButton = '[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.AddProjectButton).click();
    return new CreateNewProjectModal();
  }
}
