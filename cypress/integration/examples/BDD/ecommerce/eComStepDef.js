import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";
const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { expect } = require("chai");

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open Ecommerce page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add two products to the cart", function () {
  homePage.getShopTab().click();

  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });

  productPage.getCheckoutButton().click();

  var sum = 0;
  var res;

  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      const amount = $el.text();
      res = amount.split(" ");
      res = res[1].trim();
      sum = Number(sum) + Number(res);
    })
    .then(() => {
      cy.log("Total sum: " + sum);
    });

  cy.get("h3 strong").then(function (element) {
    const total = element.text().split(" ")[1].trim();
    expect(Number(total)).to.equal(sum);
  });
});

Then("select the country submit and verify Thank you message", function () {
  cy.contains("Checkout").click();
  cy.get("#country").type("India");
  cy.get(".suggestions > ul > li > a", { timeout: 10000 })
    .should("be.visible")
    .then(($el) => {
      // Click the element
      cy.wrap($el).click();
    });
  cy.get("#checkbox2").click({ force: true });
  cy.get("input[type='submit']").click();

  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true;
  });
});
