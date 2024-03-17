import { AddProject } from "../../page-objects/pmtool/add_project";
import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login, Add a New Project and Logout Tests", () => {
  it("Login to Pmtools Test", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Login and Logout Test", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogout();
  });

  it.only("Login, Add a New Project and Logout Test", () => {
    const loginPage = new LoginPage();
    const addProject = new AddProject();
    const homePage = new HomePage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
    addProject.clickProjectButton();
    addProject.clickAddNewProjectButton();
    addProject.typeNewProjectName("Lucna_homework_projects");
    addProject.clickSaveButton();
    homePage.clickProfile();
    homePage.clickLogout();
  });
});
