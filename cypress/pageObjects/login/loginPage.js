import locators from './loginLocators'
import verify from '../../support/interactions/commonAssertions'
import actions from '../../support/interactions/commonActions'

const loginPage = (() => {
	const map = { ...locators }

	const openApp = () => {
		actions.openUrl('/')
	}

	const doLogin = (username, password) => {
		if ((username === 'EMPTY') & (password != 'EMPTY')) {
			actions.typeOnElement(map.PASSWORD_INPUT, password)
			actions.waitAndClick(map.LOGIN_BUTTON)
		}
		if ((password === 'EMPTY') & (username != 'EMPTY')) {
			actions.typeOnElement(map.USERNAME_INPUT, username)
			actions.waitAndClick(map.LOGIN_BUTTON)
		}
		if ((password != 'EMPTY') & (username != 'EMPTY')) {
			actions.typeOnElement(map.USERNAME_INPUT, username),
				actions.typeOnElement(map.PASSWORD_INPUT, password)
		}

		actions.waitAndClick(map.LOGIN_BUTTON)
	}

	const clickForgotPasswordLink = () => {
		actions.waitAndClick(map.FORGOT_PASSWORD_LINK)
	}

	const verifyLoginErrorMessage = expectedError => {
		verify.verifyElementText(map.LOGIN_ERROR_MESSAGE, expectedError)
	}

	return {
		map,
		openApp,
		doLogin,
		verifyLoginErrorMessage,
		clickForgotPasswordLink,
	}
})()

export default loginPage
