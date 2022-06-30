import loginPage from '../../../../pageObjects/login/loginPage'
import navBar from '../../../../pageObjects/globalComponents/navBar/navBar'
import myInfoPage from '../../../../pageObjects/myinfo/myInfoPage'
import utils from '../../../../support/utils'
/// <reference types="Cypress" />

describe('My Info Tests', () => {
	let data
	before(function () {
		cy.fixture('users').then(function (fdata) {
			data = fdata
		})
	})
	beforeEach(function () {
		loginPage.openApp()
		loginPage.doLogin(data.ADMIN_USER.USERNAME, data.ADMIN_USER.PASSWORD)
		navBar.verifyWelcomeLabelIsDisplayed()
	})
	it('Verify my info inputs are disabled', () => {
		navBar.clickMyInfoButton()
		myInfoPage.verifyMyInfoInputsareDisable()
	})
	it('Verify the user is able to edit My Info', () => {
		navBar.clickMyInfoButton()
		myInfoPage.verifyMyInfoInputsareDisable()
		myInfoPage.editMyInfo(
			utils.randomString(6),
			utils.randomString(5),
			utils.randomString(8),
			'2022-06-14',
			utils.randomNationality()
		)
		myInfoPage.verifyUpdatedMessage()
		myInfoPage.verifyMyInfoInputsareDisable()
	})
})
