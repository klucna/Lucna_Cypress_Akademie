export class AddProject {
  constructor() {
    this.projectButton = ".menu-itemsitems21 > .title";
    this.addProjectButton = ".btn-primary";
    this.nameProjectInput = "#fields_158";
    this.saveProjectButton = ".modal-footer > .btn-primary";
  }

  clickProjectButton() {
    cy.get(this.projectButton).click();
    return this;
  }

  clickAddNewProjectButton() {
    cy.get(this.addProjectButton).click();
    return this;
  }

  typeNewProjectName(projectname) {
    cy.get(this.nameProjectInput).type(projectname);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveProjectButton).click();
    return this;
  }
}
