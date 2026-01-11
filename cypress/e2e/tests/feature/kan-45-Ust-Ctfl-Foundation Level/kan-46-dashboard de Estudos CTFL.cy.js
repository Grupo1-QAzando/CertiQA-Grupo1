import * as dashboardCtfl from "../../../../pages/page-dashboard-estudos-ctfl";
import quizFaseUm from "../../../../fixtures/banco-quiz-fase-um.json";
import loginTodasAtividades from "../../../../fixtures/login-realizar-todas-atividades.json";
describe('Feature/Ust-Ctfl-Foundation Level/Dashboard de Estudos CTFL', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport('macbook-16');
    });
    it('KAN-55 Exibir fases 2 a 6 como bloqueadas no primeiro acesso', () => {
        cy.btnLogin();
        cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
        dashboardCtfl.funcAcessarPaginaCtfl();
        dashboardCtfl.funcFaseDoisBloqueado();
        dashboardCtfl.funcFaseTresBloqueado();
        dashboardCtfl.funcFaseQuatroBloqueado();
        dashboardCtfl.funcFaseCincoBloqueado();
        dashboardCtfl.funcFaseSeisBloqueado();
    });
    it('KAN-58 Encarte “Próxima Fase” está redirecionando página de onde usuário parou', () => {
        cy.btnLogin();
        cy.loginConta('grupo1qazando2@teste.com', 'grupo1qazando');
        dashboardCtfl.funcAcessarPaginaCtfl();
        cy.scrollTo('bottom');
        dashboardCtfl.funcEncarteProximaFase();
    });
    it('KAN-59 Descrição página "Conteúdo da Fase" - Fase 1', () => {
        cy.btnLogin();
        cy.loginConta('grupo1qazando4@teste.com', 'grupo1qazando');
        dashboardCtfl.funcAcessarPaginaCtfl();
        dashboardCtfl.funcDescricaoPaginaConteudoFaseUm();

    });
    it('KAN-61 Funcionalidade botão "Sair Quiz" - Fase 1', () => {
        cy.btnLogin();
        cy.loginConta('grupo1qazando4@teste.com', 'grupo1qazando');
        dashboardCtfl.funcAcessarPaginaCtfl();
        dashboardCtfl.funcIniciarQuizFaseUm();
        dashboardCtfl.funcBtnSairQuiz();
        cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/fundamentals');
    });

    it('KAN-62 Funcionalidade botão "Anterior" durante o simulado - Fase 1', () => {
        cy.btnLogin();
        cy.loginConta('grupo1qazando4@teste.com', 'grupo1qazando');
        dashboardCtfl.funcAcessarPaginaCtfl();
        dashboardCtfl.funcIniciarQuizFaseUm();
        cy.wait(15000);
        cy.log('Finalizou o reload automático da página do quiz, não foi detectado o motivo de várias vezes recarregar a página.');
        dashboardCtfl.funcSelecionarRespostaQuizFaseUm();
        dashboardCtfl.funcBtnProximoQuiz();
        dashboardCtfl.funcSelecionarRespostaQuizFaseUm();
        dashboardCtfl.funcBtnProximoQuiz();
        dashboardCtfl.funcSelecionarRespostaQuizFaseUm();
        dashboardCtfl.funcBtnProximoQuiz();
        dashboardCtfl.funcBtnAnteriorQuiz();

    });
});
