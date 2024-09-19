/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My 10 Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");

    // Check if iframe is loaded
    cy.iframe().should("exist");

    // Check if the mentorship link exists and click it
    cy.iframe()
      .find('a[href*="mentorship"]')
      .should("exist")
      .eq(0)
      .as("mentorshipLink");
    cy.get("@mentorshipLink").click();

    // Wait for the page to load
    cy.wait(2000);

    // Re-query the iframe to ensure the DOM is up-to-date
    cy.frameLoaded("#courses-iframe");

    // Check if the pricing titles are present
    cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
  });
});
