
describe('Feature/Ust-Ctfl-Foundation Level/Dashboard de Estudos CTFL', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Exibir fases 2 a 6 como bloqueadas no primeiro acesso', () => {
        cy.btnLogin();
        cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
    });
});

