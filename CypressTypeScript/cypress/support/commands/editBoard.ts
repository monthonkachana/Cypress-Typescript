import cypress = require("cypress")
import Board from '../typings/board'

declare global {
  namespace Cypress {
    interface Chainable {
      //multiple options Utility type: * Record , * Pick , * Omit , * Partial and *** Combining Utility Types
      // editBoard(body: Pick<Board, 'id' >): Chainable<Board>;
      editBoard: typeof editBoard
    }
  }
}
const editBoard = (body: Partial<Board> & Required<Pick<Board, 'id'>>) => {
  Cypress.log({
    displayName: 'edit board',
    message: body,

  });
  return cy.request('PATCH', `/api/boards/${body.id}`, body).its('body');
}
Cypress.Commands.add('editBoard', editBoard)

//----------------------------------------------------------------------
// Cypress.Commands.add('editBoard', (body: Pick<Board, 'id' >) => {
//   Cypress.log({
//     displayName: 'edit board',
//     message: body,

//   });

//   return cy.request('POST', `/api/boards/${body.id}`, {
//     body,
//   }).its('body');
// });
