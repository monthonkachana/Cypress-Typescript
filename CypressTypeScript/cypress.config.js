const { defineConfig } = require('cypress')
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = eyesPlugin(defineConfig({
  viewportHeight: 500,
  viewportWidth: 700,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://localhost:3000',
  },
}))

require('@applitools/eyes-cypress')(module)