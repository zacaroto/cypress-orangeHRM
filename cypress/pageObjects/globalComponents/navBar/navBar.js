import navBarlocators from './navBarLocators'
import verify from '../../../support/interactions/commonAssertions'
import actions from '../../../support/interactions/commonActions'

const NavBar = (() => {
	const map = { ...navBarlocators }

	const verifyWelcomeLabelIsDisplayed = () => {
		verify.verifyElementIsDisplayed(map.WELCOME_LABEL)
	}

	const clickMyInfoButton = () => {
		actions.waitAndClick(map.MYINFO_BUTTON)
	}
	return {
		map,
		verifyWelcomeLabelIsDisplayed,
		clickMyInfoButton,
	}
})()

export default NavBar
