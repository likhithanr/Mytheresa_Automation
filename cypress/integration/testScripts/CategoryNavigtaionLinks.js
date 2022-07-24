import MainPage from "../../support/ModuleObjects/MainPage";
/// <reference types="cypress" />
import "../../support/commands";
import { Config } from "../../support/Config"

const URL = new Config().getEnvUrl();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Validate category navigation links', function (){
    
    before(function () {
        cy.visit(URL,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
        });
      })
    
    const mainPage = new MainPage();

    it('test links in New Arrivals category', () => {
        cy.validateLink(mainPage.getNewArrival());
         
    })
    
    it('test links in Clothing category', () => {
        cy.validateLink(mainPage.getClothing());
    })

    it('test links in Shoes category', () => {
        cy.validateLink(mainPage.getShoes());
    })

    it('test links in Bags category', () => {
        cy.validateLink('.nav-primary > :nth-child(14)');
    })

    it('test links in Accessories category', () => {
        cy.validateLink(mainPage.getAccessories());
    })

    it('test links in New season category', () => {
        cy.validateLink(mainPage.getNewSeason());
    })

    it('test vacation shop category', () => {
        cy.validateLink(mainPage.getVacation());
    })
    
    it('test links in salescategory', () => {
        cy.validateLink(mainPage.getSale());
    })
    

})