// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('validateLink', (block) => { 
    
    cy.get(block).find('a[href*="www.mytheresa.com"]').each(($el) => {
        cy.request($el.prop("href")).as("link");
        cy.get("@link").should((response) => {
            expect(response.status).to.eq(200);
          });
      });
})

