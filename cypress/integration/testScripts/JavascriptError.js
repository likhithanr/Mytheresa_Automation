/// <reference types="cypress" />
import { Config } from "../../support/Config"

let consoleError;
const URL = new Config().getEnvUrl();

Cypress.on('window:before:load', (win) => {
    consoleError = cy.spy(win.console, 'error'); 
});
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Validate Javascript error on navigating to page', function (){
         
    before(function () {
        cy.visit(URL,{
            headers:{
                "Accept":"application/json,text/plain.*/*",
                "User-Agent":"axios/0.18.0"
            }
            
        });
      })
    
      it('Validate no Javascript error is caught on visiting website', () => {
        cy.wait(1000).then(() => {
          expect(consoleError).to.not.be.called; 
        });
      })
    })