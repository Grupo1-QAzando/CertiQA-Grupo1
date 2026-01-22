// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('btnLogin', () => {
    cy.get('#root button.border').should('have.text', 'Login').click();
});

Cypress.Commands.add('loginConta', (email,senha) => {
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(senha);
    cy.get('.inline-flex').should('have.text', 'Entrar').click();
    cy.get('.grid > .font-semibold').should('have.text', 'Login bem-sucedido')
});

Cypress.Commands.add('validarURL', (url) =>{
    cy.url().should('eq', url); // Verifica se a URL é a esperada
});