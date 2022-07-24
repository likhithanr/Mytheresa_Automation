/// <reference types="cypress" />
export class Config {
    
    getEnvUrl() {
        let env = Cypress.env('ENV'); 
        if (env == 'production') 
            return "https://www.mytheresa.com/en-de/men.html"; 
        else if (env == 'staging')
            return "https://staging.mytheresa.com/en-de/men.html";
        else if (env == 'test')
            return "https://test.mytheresa.com/en-de/men.html";
        else if (env == 'local')
            return "https://local.mytheresa.com/en-de/men.html";
    }
}