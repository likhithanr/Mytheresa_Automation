import LoginPage from "../../support/ModuleObjects/LoginPage";
import { Config } from "../../support/Config"
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Validate login feature', function () {

    const URL = new Config().getEnvUrl();
    const loginPage = new LoginPage();

    let data;
    beforeEach(function () {
        cy.fixture('login').then(function (loginData) {
            data = loginData;
        })
    })

    before(function () {
        cy.visit("https://www.mytheresa.com/en-de/men.html", {
            headers: {
                "Accept": "application/json,text/plain.*/*",
                "User-Agent": "axios/0.18.0"
            }
        });
    })


    it('Validate Login feature using valid credential', () => {

        loginPage.getAccountLink().click()
        loginPage.getEmailTextField().click()
        loginPage.getEmailTextField().type(data.email)
        loginPage.getPasswordTextField().type(data.password)
        loginPage.getLoginButton().click()
        cy.wait(2000)
        loginPage.getUserTitle().contains(data.userTitle)

    })


})