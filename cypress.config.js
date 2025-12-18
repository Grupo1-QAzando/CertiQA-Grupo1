const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pk3pfc",
  e2e: {
    setupNodeEvents(on, config) {
    baseUrl = 'https://www.certiqa-qazando.com/';
    },
  },
});
