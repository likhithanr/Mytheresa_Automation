class LoginPage{
    

    getAccountLink()
    {
        return cy.get('#myaccount')
    }

    getEmailTextField()
    {
        return cy.get('#qa-login-email > #email')
    }
    
    getPasswordTextField()
    {
        return cy.get('#qa-login-password > #pass')
    }

    getLoginButton()
    {
        return cy.get('#qa-login-button > #send2')
    }
        
    }
    
    export default LoginPage;