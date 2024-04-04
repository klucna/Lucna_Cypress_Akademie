import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  /**
   *
   * @param {*} projectId used for direct page opening in Atomic Tests
   */
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    this.projectTitleDiv = ".portlet-title .caption";
    this.dateAddedValue = "tr.form-group-154 td";
    this.createdByValue = "tr.form-group-155 td";
    this.priorityValue = "tr.form-group-156 td div";
    this.statusValue = "tr.form-group-157 td div";
    this.dateAddedValue = "tr.form-group-154 td";
    this.startDateValue = "tr.form-group-159 td";
  }

  projectTitleHasTexe(projectTitle) {
    cy.get(this.projectTitleDiv).should("contain.text", projectTitle);
    return this;
  }

  dateAddedHasText(dateAdded) {
    cy.get(this.dateAddedValue).should("contain.text", dateAdded);
    return this;
  }

  createdByHasText(creater) {
    cy.get(this.createdByValue).should("have.have.text", creater);
    return this;
  }

  projectHavePriority(priority) {
    cy.get(this.priorityValue).should("have.text", priority);
    return this;
  }

  projectHaveStatus(status) {
    cy.get(this.statusValue).should("have.text", status);
    return this;
  }

  projectHaveStartDate(startDate) {
    cy.get(this.startDateValue).should("have.text", startDate);
    return this;
  }
}
