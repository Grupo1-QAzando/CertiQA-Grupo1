Cypress.Commands.add('fazerLogin', () => {
    cy.visit('/login')
    cy.get('#email').type('qa.trial@certiqa.com')
    cy.get('#password').type('QA@Test2024')
    cy.get('button.inline-flex').click()
    cy.url().should('include', '/painel')
})

Cypress.Commands.add('contemSeuProgresso', () => {
    cy.get('h3.text-2xl').contains('Seu Progresso').should('be.visible')
})

Cypress.Commands.add('seuProgressoPorcentagem', () => {
    cy.get('span.text-sm').contains(/\d+%/).should('be.visible')
})

Cypress.Commands.add('fasesConcluidas', () => {
    cy.get('p.text-sm').contains('Fases Concluídas').should('be.visible')
    cy.get('span.font-medium').contains(/\d+ de \d+/).should('be.visible')
})

Cypress.Commands.add('verificarStatus', () => {
    cy.get('p.text-sm').contains('Status')
        .parent()
        .then(container => {
            const texto = container.text()
            if (texto.includes('Pronto para Exame Final')) {
                cy.wrap(container)
                    .contains('Pronto para Exame Final')
                    .should('be.visible')
            } else {
                cy.wrap(container)
                    .contains('Em Progresso')
                    .should('be.visible')
            }
        })
})

Cypress.Commands.add('fasesDisponiveis', (fase) => {
    cy.get('span.text-sm').contains(fase)
        .parents('.rounded-lg').find('div.flex').then(container => {
            const texto = container.text()
            if (texto.includes('Revisar fase')) {
                cy.wrap(container)
                    .contains('Revisar fase')
                    .should('be.visible')
            } else {
                cy.wrap(container)
                    .contains('Continuar estudo')
                    .should('be.visible')
            }
        })
})

Cypress.Commands.add('simuladoFinal_continuarEstudando', () => {
    cy.get('.space-y-4').then(container => {
        const texto = container.text()
        if (texto.includes('Iniciar Simulado Final')) {
            cy.wrap(container)
                .contains('Iniciar Simulado Final')
                .should('be.visible')
        } else {
            cy.wrap(container)
                .contains('Continuar Estudando')
                .should('be.visible')
        }
    })
})