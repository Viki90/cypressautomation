/// <reference types="Cypress" />
// cypress - spec

describe("My 9 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);
      cy.origin(url, () => {
        cy.get("div.sub-menu-bar a[href*='about']").click();
      });
    });
  });
});
