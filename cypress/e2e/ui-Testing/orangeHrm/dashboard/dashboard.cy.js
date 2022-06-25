import loginPage from '../../../../pageObjects/login/loginPage'
import dashboardPage from '../../../../pageObjects/dashboard/dashboardPage'
import navBar from '../../../../pageObjects/globalComponents/navBar/navBar'
/// <reference types="Cypress" />

describe('Dashboard Spec', () => {
	let data
	before(function () {
		cy.fixture('users').then(function (fdata) {
			data = fdata
		})
	})
	beforeEach(function () {
		loginPage.openApp()
		loginPage.doLogin(data.ADMIN_USER.USERNAME, data.ADMIN_USER.PASSWORD)
	})
	it('Verify the dashboard elements', () => {
		navBar.verifyWelcomeLabelIsDisplayed()
		dashboardPage.verifyDashboardButtons([
			'Assign Leave',
			'Leave List',
			'Timesheets',
			'Apply Leave',
			'My Leave',
			'My Timesheet',
		])
		dashboardPage.verifyDashboardGraphisDisplayed()
	})
})
