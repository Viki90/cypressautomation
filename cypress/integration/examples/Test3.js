/// <reference types="Cypress" />
// cypress - spec

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".products").as("productLocator");
    cy.get(":nth:child(3) > .product-action > button").click();

    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
