
describe('elementos visiveis no dashboard do certificado', () => {

    beforeEach(() => {

        cy.fazerLogin()
        cy.visit('/certificacoes/ctfl-at')
    })

    it('deve exibir o progresso do usuário', () => {
        cy.contemSeuProgresso()
        cy.seuProgressoPorcentagem()
        cy.fasesConcluidas()
        cy.verificarStatus()
    })

    it('deve exibir todas as fases disponíveis', () => {
        cy.fasesDisponiveis('Fase 1')
        cy.fasesDisponiveis('Fase 2')
        cy.fasesDisponiveis('Fase 3')
    })

     it('deve exibir simulado final', () => {
        cy.simuladoFinal_continuarEstudando()
     })
})