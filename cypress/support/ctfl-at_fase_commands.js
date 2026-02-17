let indiceRespostas = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1]

Cypress.Commands.add('entrarFase', (fase) => {
     cy.get('a.inline-flex').then((container) => {
        const revisar = container.filter(':contains("Revisar fase")')
        const continuar = container.filter(':contains("Continuar estudo")')

    if (revisar.length > 0) {
      cy.wrap(revisar).eq(fase).click();
    } else {
      cy.wrap(continuar).eq(fase).click();
    }
    cy.get('.text-3xl').should('be.visible')
})
})
Cypress.Commands.add('checkConteudoFase', () => {
    cy.get('.text-primary-foreground').then(container => {
        const texto = container.text()
        if (texto.includes('Iniciar Quiz')) { // verifica se o inicio da fase contem Iniciar ou Refazer quiz
            cy.wrap(container)
                .contains('Iniciar Quiz')
                .should('be.visible')
        }
        else {
            cy.wrap(container)
                .contains('Refazer Quiz')
                .should('be.visible')
        }
    })
    cy.get('.text-3xl').should('be.visible')
})

Cypress.Commands.add('entrarQuiz', () => {
    cy.get('.text-primary-foreground').click()
    cy.get('.lucide-clock').should('be.visible')
})

Cypress.Commands.add('navegarEntreQuestoes', () => {
    cy.get('label.relative').eq(1).should('be.visible').click()
    cy.get('.text-primary-foreground').click()
    cy.get('button.inline-flex').contains('Anterior').click() //escolhe uma resposta da questao vai para a proxima questao e volta
})

Cypress.Commands.add('responderQuestoes', () => {
    indiceRespostas.forEach((indice) => { //responde todas as questoes
        cy.get('label.relative').eq(indice).should('be.visible').click()
        cy.get('.text-primary-foreground').click()
    })
})

Cypress.Commands.add('visitaResultadoFinal', () => {
    cy.get('.tracking-tight').should('be.visible') // mostra que chegou no resultado final do quiz
})

Cypress.Commands.add('conteudoResultadoFinal', () => {
    cy.get('.tracking-tight').should('be.visible') // verifica os elementos do resultado final
    cy.get('.text-3xl').contains(/\d+\/10/).should('be.visible')
    cy.get('p.text-lg').contains(/\d+% de acertos/).should('be.visible')

    cy.get('.mt-2').then(container => { //verifica se passou ou reprovou
        const texto = container.text()
        if (texto.includes('Parabéns! Você passou!')) {
            cy.wrap(container)
                .contains('Parabéns! Você passou!')
                .should('be.visible')
        } else {
            cy.wrap(container)
                .contains('Você precisa de pelo menos 60% para passar.')
                .should('be.visible')
        }
    })

    cy.get('body').then($body => { //verifica se existe questao incorreta no body todo
        if ($body.text().includes('Incorreta')) {
            cy.contains('Incorreta').should('be.visible')
        } else {
            cy.log('Nenhuma Questao Incorreta')
        }
    })

    cy.get('button.inline-flex').then(container => { // verifica se o botao tentar novamente aparece
        if (container.text().includes('Tentar Novamente')) {
            cy.wrap(container)
                .contains('Tentar Novamente')
                .should('be.visible')
        } else {
            cy.log('PASSOU ENTAO NAO TEM BOTAO EXTRA')
        }
    })

    cy.get('button.inline-flex').contains('Voltar para a Fase').should('be.visible')
    cy.get('button.justify-center').contains('Ver detalhes').should('be.visible') // ve detalhes da resposta
    cy.get('.space-y-2').filter(':contains("Resposta")').should('be.visible') // explica a resposta
})

Cypress.Commands.add('voltaParaPaginaCertificado', () => {
    cy.get('.text-primary-foreground').click()

    indiceRespostas.forEach((indice) => {
            cy.get('label.relative').eq(indice).should('be.visible').click()
            cy.get('.text-primary-foreground').click()
        })

        cy.get('button.inline-flex').contains('Voltar para a Fase').click()
        cy.get('button.inline-flex').contains(' Voltar para Certificação').click()
        cy.url().should('contain','/certificacoes/ctfl-at') // faz o caminho de volta para pagina do certificado
})

Cypress.Commands.add('checkUrl', () => {
    cy.contains('h3','Conteúdo da Fase').should('be.visible')
    })