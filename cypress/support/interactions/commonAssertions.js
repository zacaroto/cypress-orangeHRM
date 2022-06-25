/// <reference types="Cypress-xpath" />

const verify = (() => {
	const verifyElementText = (locator, expectedText) => {
		cy.get(locator).should('have.text', expectedText)
	}
	const verifyElementTextXpath = (locator, expectedText) => {
		cy.xpath(locator).should('contain.text', expectedText)
	}

	const verifyElementIsDisplayed = locator => {
		cy.get(locator).should('be.visible')
	}
	const verifyElementIsDisabled = locator => {
		cy.get(locator).should('be.disabled')
	}
	const verifyElementIsDisplayedXpath = locator => {
		cy.xpath(locator).should('be.visible')
	}

	const verifyCurrentURL = expectedURL => {
		cy.url().should('eq', expectedURL)
	}
	return {
		verifyElementText,
		verifyElementTextXpath,
		verifyElementIsDisplayed,
		verifyCurrentURL,
		verifyElementIsDisplayedXpath,
		verifyElementIsDisabled,
	}
})()

export default verify
