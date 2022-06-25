import myInfolocators from './myInfoLocators'
import verify from '../../support/interactions/commonAssertions'
import actions from '../../support/interactions/commonActions'

/// <reference types="Cypress" />

const myInfoPage = (() => {
	const map = { ...myInfolocators }

	const verifyMyInfoInputsareDisable = () => {
		const locatorsObj = map.INPUTS
		let keys = Object.keys(locatorsObj)
		for (let i = 0; i < keys.length; i++) {
			const element = keys[i]
			var isDisabled = locatorsObj[element].DISABLED
			if (isDisabled) {
				verify.verifyElementIsDisabled(locatorsObj[element].LOCATOR)
			}
		}
	}

	const editMyInfo = (name, midname, lastname, date, nationality) => {
		clickEditButton()
		actions.clearAndType(map.INPUTS.FIRSTNAME.LOCATOR, name)
		actions.clearAndType(map.INPUTS.LASTNAME.LOCATOR, lastname)
		actions.clearAndType(map.INPUTS.MIDNAME.LOCATOR, midname)
		actions.clearAndType(map.INPUTS.LICENSE_ED_INPUT.LOCATOR, date)
		setNationality(map.INPUTS.NATIONALITY.LOCATOR, nationality)
		clickEditButton()
	}
	const verifyUpdatedMessage = () => {
		verify.verifyElementIsDisplayed(map.MESSAGE)
	}
	const clickEditButton = () => {
		actions.waitAndClick(map.EDIT_BUTTON)
	}

	const setNationality = (selector, value) => {
		actions.selectOption(selector, value)
	}

	return {
		map,
		verifyMyInfoInputsareDisable,
		clickEditButton,
		editMyInfo,
		verifyUpdatedMessage,
	}
})()

export default myInfoPage
