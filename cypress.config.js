const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.js',

    env: {
      API_KEY: 'reqres_b31ce4b07cd74c8789d5a44448118aa2'
    }
  }
})
