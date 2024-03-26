describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });
  it("Check radio button", () => {
    cy.get('[name="subscription"]').check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 Interests", () => {
    cy.get('[name="interests[]"]').check(["music", "travel"]); //je tam array, dvě hodnoty. případně po jednom//
    cy.get("#interests-music").should("be.checked");
    cy.get("#interests-travel").should("be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get('[name="interests[]"]').check("travel");
    cy.get("#interests-travel").should("be.checked");
    cy.get('[name="interests[]"]').uncheck("travel");
    cy.get("#interests-travel").should("not.be.checked");
  });

  it("Clean and fill name", () => {
    cy.get("#name")
      .clear()
      .type("Kateřina Lučná")
      .should("have.value", "Kateřina Lučná");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("#myForm").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  it("Upload file fixtures", () => {
    cy.fixture("upload_test.txt").as("uploadFile"); //ten txt file je nahraný ve složce fixtures, jako upload z PC to nejde//
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it("Type date", () => {
    cy.get("#datepicker").type("2002-11-30").should("have.value", "2002-11-30");
  });
});
