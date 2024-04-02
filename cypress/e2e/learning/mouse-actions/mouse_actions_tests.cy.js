describe("Mouse actions tests", () => {
  it("Scroll into view", () => {
    cy.visit("https://tredgate.com/webtrain/");
    cy.get("body h1").scrollIntoView().should("be.visible");
  });

  it("Double click test", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#double-click").dblclick();
  });

  it("Click and hold test", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown").wait(2500).trigger("mouseup");
    /* lze to ale zapsat i "rozkouskovaně":
   cy.get("#click-box").trigger("mousedown");
    cy.wait(2500);
    cy.get("#click-box").trigger("mouseup");
    */
  });

  it("Drag and drop test", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it.only("Check real hover", () => {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get(".hover .dropbtn")
      .realHover()
      .then(() => {
        cy.wait(5000);
        cy.get("#div-hover > div.dropdown.hover > div > a").click();
      });
  });
});
