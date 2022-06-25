import forgotPasswordPage from '../../../pageObjects/forgotPassword/forgotPasswordPage'
import loginPage from '../../../pageObjects/login/loginPage'

/// <reference types="Cypress" />

describe('Forgot Password Tests', () => {
	let data
	before(function () {
		cy.fixture('users').then(function (fdata) {
			data = fdata
		})
	})
	beforeEach(function () {
		loginPage.openApp()
		loginPage.clickForgotPasswordLink()
	})
	it('Verify warning message is displayed if the user tries to search with empty username', () => {
		forgotPasswordPage.verifyEmptyUsernameMessage()
	})
	it('Verify confirmation message after sending a correct username', () => {
		forgotPasswordPage.verifyConfirmationMessage('admin')
	})

	it('Verify Cancel fucntionality', () => {
		forgotPasswordPage.verifyCancelFunctionality()
	})
})
