beforeEach(function () {
  cy.fixture("example").then((data) => {
    this.data = data;
    cy.log("Fixture data:", this.data); // Log fixture data
  });
});
