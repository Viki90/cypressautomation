/// <reference types="Cypress" />
// cypress - spec

describe("My 5 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // alert
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    // window:alert
    cy.on("window:alert", (str) => {
      // Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
});
