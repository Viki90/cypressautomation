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

    // static dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // dynamic dropdown
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
  });
});
