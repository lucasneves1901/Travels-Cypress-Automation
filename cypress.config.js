const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/'
  }
})
