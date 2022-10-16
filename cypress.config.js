const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    autoOpen: true,
    charts: true,
    code: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress\\reports\\mochawesomeReporter',
    reportFilename: 'Test Execution - [status] - [datetime]',
    reportPageTitle: 'Cypress Automation',
    reportTitle: 'Cypress Automation',
    saveAllAttempts: true,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    baseUrl: 'https://magento.softwaretestingboard.com/',
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature"
  }
})

