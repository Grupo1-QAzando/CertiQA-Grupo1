import * as dashboardCtfl from "../../../../pages/page-dashboard-estudos-ctfl";

// DADOS DE LOGIN
// qa.admin@certiqa.com    QA@Test2024
// qa.active@certiqa.com   QA@Test2024
// grupo1-qazando@proton.me   grupo1qazando


describe('Kan-91 - Implementação e Execução de Testes', () => {
      beforeEach(() => {
            cy.visit('/');
      });

      it('KAN-91 Execução de Testes - Exemplo de Teste Simples', () => {
            // Exemplo de teste simples para verificar o título da página inicial
            cy.btnLogin();
            cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
            dashboardCtfl.funcAcessarPaginaCtfl();

      });
});