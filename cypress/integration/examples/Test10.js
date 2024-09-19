/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My 10 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    // Check if iframe is loaded
    cy.iframe().should("exist");

    // Check if the mentorship link exists
    cy.iframe().find('a[href*="mentorship"]').should("exist").eq(0).click();

    // Check if the pricing titles are present
    // cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
  });
});
