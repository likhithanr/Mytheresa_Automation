import MainPage from "../../support/ModuleObjects/MainPage"
/// <reference types="cypress" />
import "../../support/commands"
import { Config } from "../../support/Config"

const URL = new Config().getEnvUrl();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Validate links on main page', function (){
    
    before(function () {
        cy.visit("https://www.mytheresa.com/en-de/men.html",{
            headers:{ 
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            },
        });
      })
    
    const mainPage = new MainPage();
    
    it('tst list of links on main page header section', () => {

        cy.validateLink(mainPage.getMainMenus());    
        cy.validateLink(mainPage.getNonCategoryLinksList());      

    })

    it('test the list of links on main page footer section', () => {

        cy.validateLink(mainPage.getFooterLinks());           
        cy.validateLink(mainPage.getPaymentLink());   
        cy.validateLink(mainPage.getDeliveryLink());  
        cy.validateLink(mainPage.getImprintLink());    

    })

})