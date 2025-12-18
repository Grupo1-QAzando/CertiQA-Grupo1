const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pk3pfc',
  e2e: {
    baseUrl: 'https://www.certiqa-qazando.com',
    setupNodeEvents(on, config) {
      // plugins / eventos aqui
      return config
    },
  }
});
