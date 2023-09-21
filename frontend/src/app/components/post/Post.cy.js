import Post from './Post'; // Import the Post component that you want to test

describe("Post", () => {
  it('renders a post with a message', () => {
    // Mount the Post component with a sample post object
    cy.mount(<Post post={{_id: 1, message: "Hello, world"}} />);
    
    // Use Cypress to select an element with the data-cy attribute set to "post"
    // and check if it contains the expected text "Hello, world"
    cy.get('[data-cy="post"]').should('contain.text', "Hello, world");
  })
})
