/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";

describe("My 14 Test", () => {
  before(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
      cy.log("Fixture data:", this.data); // Log fixture data
    });
  });

  it("Does not do much!", function () {
    const homePage = new HomePage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    homePage.getEditBox().should("be.visible");

    // Ensure the select element is visible and log its options
    homePage
      .getGender()
      .should("be.visible")
      .then(($select) => {
        const options = $select
          .find("option")
          .map((i, el) => el.value)
          .get();
        cy.log("Available options:", options);
      });

    homePage.getGender().contains("option", this.data.gender).should("exist");
    homePage.getGender().select(this.data.gender);

    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    homePage.getEditBox().should("attr", "minlength", "2");

    homePage.getEnterpreneur().should("be.disabled");

    homePage.getShopTab().click();

    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
