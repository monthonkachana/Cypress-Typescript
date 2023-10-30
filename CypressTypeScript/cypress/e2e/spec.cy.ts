//TypeScript, if I want to change that, at the top of my file I can type this
// ***** show type debug in own
/// <reference types="cypress" />

import * as lists from '../fixtures/lists.json'

it.skip('playing with typescript', () => {
  cy.intercept('POST', '/api/lists').as('listCCreate');
  cy.visit('/board/12159984594');
  lists.forEach(list => {
    cy.get('[data-cy="add-list"]').type(`${list.name}{enter}`);
    cy.wait('@listCCreate')
    // .its('response.body.order')
    // .should('eq', list.order);
  });
});
it('create a new board with folder support => commands', () => {
  cy.visit('/')
  cy.getByPlaceholder('Create a board...')

});
it('reset web', () => {
  // API to reset 
  cy.request({
    method: 'POST',
    url: '/api/reset'
  })
  cy.visit('/')

});
it.skip('create a new board addBoard API', () => {
  cy.addBoard('add board')
    .then((body) => {
      expect(body.id).to.exist;
      expect(body.starred).to.be.false;
      expect(body.name).to.equal('add board');
      expect(body.created).to.exist;
      expect(body.user).to.exist;
    })
  // checck type commands "tsc --noEmit" for using CLI 
  // npm install pre-commit –save-dev after install edit package.json

});
it.skip('edit a new board addBoard API', () => {
  cy.addBoard('add board')
  cy.wait(1000)
  cy.editBoard({
    id: 1,
  })
    .then((editBoard) => {
      expect(editBoard.id).to.equal(1);
    })
});

it.only('check web home screen', () => {
  //https://www.npmjs.com/package/@applitools/eyes-cypress 
  cy.visit('/')
  cy.eyesOpen({appName:'My Boards'})
});

