class LoginPage {


    getAccountLink() {
        return cy.get('#myaccount')
    }

    getLoginButton() {
        return cy.get('#qa-login-button > #send2')
    }

    getEmailTextField() {
        return cy.get('#qa-login-email > #email')
    }

    getPasswordTextField() {
        return cy.get('#qa-login-password > #pass')
    }
    getUserTitle() {
        return cy.get('.hello')
    }

}

export default LoginPage;