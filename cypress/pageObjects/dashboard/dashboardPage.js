import dashboardlocators from './dashboardLocators'
import verify from '../../support/interactions/commonAssertions'

/// <reference types="Cypress" />

const dashboardPage = (() => {
	const map = { ...dashboardlocators }

	const verifyDashboardButtons = elements => {
		elements.forEach(element => {
			const buttonXpath = `//span[normalize-space()='${element}']`
			verify.verifyElementIsDisplayedXpath(buttonXpath)
		})
	}

	const verifyDashboardGraphisDisplayed = () => {
		verify.verifyElementIsDisplayed(map.CIRCLE_GRAPH)
	}

	return {
		map,
		verifyDashboardButtons,
		verifyDashboardGraphisDisplayed,
	}
})()

export default dashboardPage
