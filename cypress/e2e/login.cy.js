// cypress/e2e/login.cy.js

describe('Login Form Tests', () => {

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:5173');
  });

  it('Test Case 1: Verify that submitting the form without entering a password displays an error message', () => {
    // Assuming the email input has an id of 'email' and submit button has an id of 'submit'
    cy.get('#email').type('test@example.com');
    cy.get('form').submit();

    // Check for the error message
    cy.contains('Password is a required field').should('be.visible');
  });

  it('Test Case 2: Verify that submitting the form without entering an email displays an error message', () => {
    // Assuming the password input has an id of 'password'
    cy.get('#password').type('password123');
    cy.get('form').submit();

    // Check for the error message
    cy.contains('Email is a required field').should('be.visible');
  });

  it('Test Case 3: Verify that submitting the form with both email and password fields filled displays a success message', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('form').submit();

    // Check for the success message
    cy.contains('Successfully logged in').should('be.visible');
  });

});
