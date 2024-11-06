/// <reference types="Cypress" />

describe("My 13 Test", () => {
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

    cy.get('input[name="name"]:nth-child(2)').should(
      "have.value",
      this.data.name
    );

    cy.get('input[name="name"]:nth-child(2)').should("attr", "minlength", "2");

    cy.get("#inlineRadio3").should("be.disabled");

    cy.get(":nth-child(2) > .nav-link").click();

    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
