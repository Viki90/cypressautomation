const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: "cypress/results",
    reportFilename: "my-report.html",
    overwrite: true,
    html: true,
    json: true,
  },

  projectId: "uzqxkb",
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
