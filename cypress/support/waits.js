/// <reference types="Cypress-xpath" />

const waits = (() => {
	const waitElementToBeDisplayed = locator => {
		cy.get(locator).should('be.visible')
	}
	const waitElementToBeDisplayedXpath = locator => {
		cy.xpath(locator).should('be.visible')
	}
	const pause = time => {
		cy.wait(time * 1000)
	}

	return {
		waitElementToBeDisplayed,
		waitElementToBeDisplayedXpath,
		pause,
	}
})()

export default waits
