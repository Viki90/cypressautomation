/// <reference types="Cypress" />

describe("My 12 Test", () => {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
      cy.log("Fixture data:", this.data); // Log fixture data
    });
  });

  it("Does not do much!", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').should("be.visible");
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);

    // Ensure the select element is visible and log its options
    cy.get("select")
      .should("be.visible")
      .then(($select) => {
        const options = $select
          .find("option")
          .map((i, el) => el.value)
          .get();
        cy.log("Available options:", options);
      });

    //cy.get("select").select(this.data.gender);
    cy.get("select").contains("option", this.data.gender).should("exist");
    cy.get("select").select(this.data.gender);
  });
});
