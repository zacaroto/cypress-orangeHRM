const { defineConfig } = require('cypress')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reporDir: 'cypress/report',
		charts: true,
		reportPageTitle: 'custom-title',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},

	e2e: {
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('cypress-mochawesome-reporter/plugin')(on)
		},
		baseUrl: 'https://opensource-demo.orangehrmlive.com/',
		video: false,
		screenshotOnRunFailure: true,
	},
})
