const { faker } = require('@faker-js/faker');

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.firstName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password(20);

describe('Create a new Account', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should create a new account with success', () => {
    cy.contains('a', 'Create an Account').click()

    cy.url().should('include', '/account/create')

    cy.get("#firstname").type(randomFirstName)
      .should('have.value', randomFirstName)

    cy.get('#lastname').type(randomLastName)
      .should('have.value', randomLastName)

    cy.get('#email_address').type(randomEmail)
      .should('have.value', randomEmail)

    cy.get('#password').type(randomPassword, { log: false })
    cy.get('#password-confirmation').type(randomPassword, { log: false })

    cy.contains('button', 'Create an Account').click()

    cy.get('.message-success').contains('Thank you for registering with Fake Online Clothing Store.').should('exist')
  })
})