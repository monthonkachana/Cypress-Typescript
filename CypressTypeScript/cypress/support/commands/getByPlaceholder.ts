import cypress = require("cypress")
import { Placeholders } from "../typings/placeholders"

//method getByPlaceholder change cypress function global
declare global {
    namespace Cypress {
        interface Chainable {
            getByPlaceholder(input: Placeholders): Chainable<any>;
        }
    }
}

Cypress.Commands.add('getByPlaceholder', (input: Placeholders) => {
    Cypress.log({
        name: 'getByPlaceholder',
        message: input,
    });

    return cy.get(`[placeholder="${input}"]`, {
        log: false
    });
});
