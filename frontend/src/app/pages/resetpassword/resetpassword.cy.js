import ResetPassword from "./resetpassword";
const navigate =()=>{}

describe('ResetPassword', () => {
    it ('test that passwor is updated', () => {
        cy.mount(<ResetPassword navigate={navigate}/>)
        cy.intercept('PATCH', '/users', { status: 200 }).as("resetRequest")
        cy.get('#email').type('bob@test.com')
        cy.get('#password1').type('password')
        cy.get('#password2').type('password')
        cy.get('#submit').click()
        cy.wait('@resetRequest').then( interception => {
            expect(interception.response.body.status).to.eq(200)
        })
    })
})