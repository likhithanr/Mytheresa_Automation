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
        cy.visit(URL,{
            headers:{ 
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            },
            timeout: 30000 
        });
      })
    
    const mainPage = new MainPage();
    
    it('Validate 200 status code for links in header section', () => {

        cy.validateLink(mainPage.getDepartment());    
        cy.validateLink(mainPage.getMetaList());      

    })

    it('Validate 200 status code for links in footer section', () => {

        cy.validateLink(mainPage.getFooter());           
        cy.validateLink(mainPage.getPaymentFooter());   
        cy.validateLink(mainPage.getDeliveryFooter());  
        cy.validateLink(mainPage.getImprintFooter());    

    })

    it('Validate 200 status code for links in main section', () => {

        cy.validateLink(mainPage.getMainCol());     

    })


})