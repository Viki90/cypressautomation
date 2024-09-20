/// <reference types="Cypress" />

describe("My 12 Test", () => {
  before(function () {});

  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").should("be.visible");
    cy.get(":nth-child(1) > .form-control").type("Bob");
  });
});
