import forgotPasswordLocators from "./forgotPasswordLocators";
import verify from "../../support/interactions/commonAssertions"
import actions from "../../support/interactions/commonActions"

const forgotPasswordPage = (() => {
    const map = { ...forgotPasswordLocators };
     

    const verifyEmptyUsernameMessage = () => {
        clickResetPasswordButton()
        verify.verifyElementIsDisplayed(map.WARNING_MESSAGE)
    }
    const verifyConfirmationMessage = (text) => {
        enterUserName(text)
        clickResetPasswordButton()
        verify.verifyElementIsDisplayed(map.WARNING_MESSAGE)
    }

    const verifyCancelFunctionality = () => {
        clickCancelButton()
        verify.verifyCurrentURL("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
    }
    //BASIC ACTIONS 
    const clickResetPasswordButton = () => {
        actions.waitAndClick(map.RESET_PASSWORD_BUTTON)
    }
    const enterUserName = (username)=> {
        actions.typeOnElement(map.USERNAME_INPUT, username)
    }
    const clickCancelButton = () => {
        actions.waitAndClick(map.CANCEL_BUTTON)
    }
    return {
        clickResetPasswordButton,
        clickCancelButton, 
        verifyEmptyUsernameMessage,
        enterUserName, 
        verifyConfirmationMessage,
        verifyCancelFunctionality

    };
})();

export default forgotPasswordPage;