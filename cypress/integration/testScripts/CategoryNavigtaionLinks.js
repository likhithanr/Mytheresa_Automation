import MainPage from "../../support/ModuleObjects/MainPage";
/// <reference types="cypress" />
import "../../support/commands";
import { Config } from "../../support/Config"

const URL = new Config().getEnvUrl();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Validate category links', function (){
    
    before(function () {
        cy.visit(URL,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
        });
      })
    
    const mainPage = new MainPage();

    it('Validate 200 status code for links in New Arrivals category', () => {
        cy.validateLink(mainPage.getNewArrival());
         
    })
    
    it('Validate 200 status code for links in Clothing category', () => {
        cy.validateLink(mainPage.getClothing());
    })

    it('Validate 200 status code for links in Shoes category', () => {
        cy.validateLink(mainPage.getShoes());
    })

    it('Validate 200 status code for links in Bags category', () => {
        cy.validateLink('.nav-primary > :nth-child(14)');
    })

    it('Validate 200 status code for links in Accessories category', () => {
        cy.validateLink(mainPage.getAccessories());
    })

    it('Validate 200 status code for links in New season category', () => {
        cy.validateLink(mainPage.getNewSeason());
    })

    it('Validate 200 status code for links in vacation shop category', () => {
        cy.validateLink(mainPage.getVacation());
    })
    
    it('Validate 200 status code for sale links', () => {
        cy.validateLink(mainPage.getSale());
    })
    

})