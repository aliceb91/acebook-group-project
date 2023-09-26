import SignUpForm from './SignUpForm'
const navigate = () => {}

describe("Signing up", () => {
  it("calls the /users endpoint", () => {
    cy.mount(<SignUpForm navigate={navigate}/>)
    cy.intercept('POST','/users', { status: 201 }).as("signupRequest")
    cy.get("#email").type("john1@test.com");
    cy.get("#password").type("password");
    cy.get("#username").type("john1");
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#submit").click();
    cy.wait('@signupRequest').then( interception => {
      expect(interception.response.body.status).to.eq(201)
    })
  })
})

describe("Failed",()=>{
  it("call the /user and failsed", ()=>{
    cy.mount(<SignUpForm navigate={navigate}/>)
    cy.get('#username').type('John')
    cy.get('#submit').click()
    cy.wait('@SignUpform').then( interception => {
      expect(interception.response.body.status).to.eq(400)
    })

  })
})