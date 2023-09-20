import Profile from './Profile.js';

describe('Profile', () => {
  
  it('checks for Hello', () => {
    cy.mount(<Profile/>);
    cy.get('h1').should('contain.text', "Hello");
  });
});