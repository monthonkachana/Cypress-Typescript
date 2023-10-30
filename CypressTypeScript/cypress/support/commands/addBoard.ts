import cypress = require("cypress")
import Board from '../typings/board'

declare global {
  namespace Cypress {
    interface Chainable {
      //addBoard(name: string): Chainable<Board> means that The command will likely 
      //return data with types in the same format as they are defined in Board interface
      addBoard(name: string): Chainable<Board>;
    }
  }
}

Cypress.Commands.add('addBoard', (name: string) => {
  Cypress.log({
    displayName: 'add board',
    message: name,

  });

  return cy.request('POST', '/api/boards', {
    name,
  }).its('body');
});
