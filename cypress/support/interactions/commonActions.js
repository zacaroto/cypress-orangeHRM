/// <reference types="Cypress-xpath" />

const actions = (() => {
	const waitAndClick = locator => {
		cy.get(locator).should('be.visible')
		cy.get(locator).click()
	}

	const waitAndClickXpath = locator => {
		cy.xpath(locator).should('be.visible')
		cy.xpath(locator).click()
	}

	const selectOption = (locator, option) => {
		cy.get(locator).select(option)
	}

	const openUrl = url => {
		cy.visit(url)
	}

	const typeOnElement = (locator, text) => {
		cy.get(locator).type(text)
	}
	const clearAndType = (locator, text) => {
		cy.get(locator).clear()
		cy.get(locator).type(text)
	}
	const typeOnElementXpath = (locator, text) => {
		cy.xpath(locator).type(text)
	}

	return {
		waitAndClick,
		waitAndClickXpath,
		typeOnElement,
		typeOnElementXpath,
		openUrl,
		clearAndType,
		selectOption,
	}
})()

export default actions
