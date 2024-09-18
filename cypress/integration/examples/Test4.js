/// <reference types="Cypress" />
// cypress - spec

describe("My 4 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    // uncheck
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // check multiple checkboxes
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
});
