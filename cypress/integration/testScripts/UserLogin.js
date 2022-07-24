import LoginPage from "../../support/ModuleObjects/LoginPage";
import HomePage from "../../support/ModuleObjects/HomePage";
import { Config } from "../../support/Config"
/// <reference types="cypress" />




Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Validate login feature', function (){
    
    let data;
    const URL = new Config().getEnvUrl();
    
    beforeEach(function () {
        cy.fixture('login').then(function (loginData) {
        data = loginData;     
        })
    })    

    before(function () {
        cy.visit(URL,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
        });
      })
      
      
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  
    it('Validate Login feature using valid credential', () => {

        loginPage.getAccountLink().should('be.visible')
         loginPage.getAccountLink().click()
         loginPage.getEmailTextField().click()
         loginPage.getEmailTextField().should('be.visible')                                                                                                                               
         loginPage.getEmailTextField().type(data.email)                   
        
         loginPage.getPasswordTextField().should('be.visible')             
         loginPage.getPasswordTextField().type(data.password)   

         loginPage.getLoginButton().click()  
         cy.wait(2000)               
         homePage.getUserTitle().contains(data.userTitle)  
                                                                                                                                                                                                                                                                                                                                                                                
    })


})