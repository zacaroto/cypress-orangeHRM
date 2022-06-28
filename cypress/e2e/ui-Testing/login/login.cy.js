import loginPage from '../../../pageObjects/login/loginPage'
import navBar from '../../../pageObjects/globalComponents/navBar/navBar'
/// <reference types="Cypress" />

describe('Login Tests', () => {
	let data
	before(function () {
		cy.fixture('users').then(function (fdata) {
			data = fdata
		})
	})
	it('Verify the User is able to Log in into the application ', () => {
		loginPage.openApp()
		loginPage.doLogin(data.ADMIN_USER.USERNAME, data.ADMIN_USER.PASSWORD)
		navBar.verifyWelcomeLabelIsDisplayed()
	})
	it('Verify the Login error message is correctly displayed with Invalid Credentials', () => {
		loginPage.openApp()
		loginPage.doLogin('test', 'test')
		loginPage.verifyLoginErrorMessage('Invalid credentials')
	})
	it('Verify the Login error message is correctly displayed with empty Password', () => {
		loginPage.openApp()
		loginPage.doLogin('Test', 'EMPTY')
		loginPage.verifyLoginErrorMessage('Password cannot be empty')
	})
	it('Verify the Login error message is correctly displayed with empty Username', () => {
		loginPage.openApp()
		loginPage.doLogin('EMPTY', 'Test')
		loginPage.verifyLoginErrorMessage('Username cannot be empty')
	})
})
