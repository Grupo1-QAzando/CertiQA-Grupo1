
describe('verificar fluxo da fase 1', () => {
    let indiceRespostas = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1]

    beforeEach(() => {
        cy.fazerLogin()
        cy.visit('/certificacoes/ctfl-at')
        cy.entrarFase(0)
    })

    it('deve permitir entrar na fase', () => {

        cy.checkUrl()
    })

    it('deve exibir o conteúdo da fase corretamente', () => { // nao vai direto pra url da fase, tem que seguir o fluxo escolhendo a fase
        cy.checkConteudoFase()
    })

    it('deve navegar entre as questões do quiz', () => { // so navega entre as questoes respondidas***
        cy.entrarQuiz()
        cy.navegarEntreQuestoes()
    })

    it('deve permitir responder todas as questões', () => {
        cy.entrarQuiz()
        cy.responderQuestoes()
    })

    it('deve finalizar o quiz e exibir o resultado', () => {
        cy.entrarQuiz()
        cy.responderQuestoes()
        cy.visitaResultadoFinal()
    })

    it('verificar visibilidade dos elementos principais do resultado final do quiz', () => {
        cy.entrarQuiz()
        cy.responderQuestoes()
        cy.conteudoResultadoFinal()
    })

    it('Possibilidade de voltar para pagina do certificado', () => {
        cy.voltaParaPaginaCertificado()
    })
})