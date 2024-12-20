const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = defineConfig({
  watchForFileChanges: false,
  // configure the reporter to generate Mochawesome reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, // enable charts in the report
    reportDir: 'cypress/reports', // directory to save reports
    reportFilename: '[status]_[datetime]-[name]-report', // custom report filename format
    overwrite: false, // don't overwrite existing reports
    html: true, // generate an HTML report
    json: true, // generate a JSON report
    reportPageTitle: 'Jobins Recruitment Test Report', // title for the report page
    embeddedScreenshots: true, // embed screenshots in the report
    inlineAssets: true, // inline assets like CSS and images in the report
    saveAllAttempts: false, // save only the last attempt of a failed test
    code: true, // include code snippets in the report
    autoOpen: false, // don't automatically open the report after the run
  },
  e2e: {
    baseUrl: 'https://recruit.release.jobins.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);


      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;

      return config;
    },
    // define the pattern for the spec files to run
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // run all spec files with these extensions

    // specify the support file for end-to-end tests
    supportFile: 'cypress/support/e2e.js', // path to the support file
  },
});
