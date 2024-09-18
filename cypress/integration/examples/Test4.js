/// <reference types="Cypress" />
// cypress - spec

describe("My 4 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1").check().should("be.checked");
  });
});
