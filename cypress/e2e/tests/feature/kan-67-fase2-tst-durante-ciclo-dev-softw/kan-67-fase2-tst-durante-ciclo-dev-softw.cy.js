/// <reference types="cypress" />

import * as fase2Ctfl from "../../../../pages/page-dashboard-fase2-ctfl";

// DADOS DE LOGIN
// qa.admin@certiqa.com    QA@Test2024
// qa.active@certiqa.com   QA@Test2024
// grupo1-qazando@proton.me   grupo1qazando


describe('kan-67-tst-ciclo-dev-softw', () => {
      beforeEach(() => {
            cy.visit('/');
            cy.btnLogin();
            cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
            fase2Ctfl.accessCertificationCtfl();
      });

      it('kan-68-descricao-pagina-fase-2', () => {
            fase2Ctfl.acessarFase2();
      });

      it('kan-69-finaliza-simulado-tempo-maximo-fase-2', () => {
            fase2Ctfl.acessarFase2();
            fase2Ctfl.iniciarQuiz();
            // cy.wait(120000);
      });

      it('kan-70-funcionalidade-botao-sair-quiz-fase-2', () => {
            fase2Ctfl.acessarFase2();
            fase2Ctfl.iniciarQuiz();
            fase2Ctfl.sairQuiz();
      });

      it('kan-71-funcionalidade-botao-anterior-durante-simulado-fase-2', () => {
            fase2Ctfl.acessarFase2();
            fase2Ctfl.iniciarQuiz();
            fase2Ctfl.marcarOpcao_teste1();
            fase2Ctfl.botaoAnteriorQuiz();
      });

      it.only('kan-72-tela-respostas-finalizar-simulado-fase-2', () => {
            fase2Ctfl.acessarFase2();
            fase2Ctfl.iniciarQuiz();

            // Marcar a 1a pergunta com opção 2
            fase2Ctfl.marcarOpcao_teste1();
            cy.wait(4000);

            // Marcar a 2a pergunta com opção 2
            fase2Ctfl.marcarOpcao_teste2();
            cy.wait(4000);

            // Marcar a 3a pergunta com opção 2
            fase2Ctfl.marcarOpcao_teste3();
            cy.wait(4000);

            // Marcar a 4a pergunta com opção 1
            fase2Ctfl.marcarOpcao_teste4();
            cy.wait(4000);

            // Marcar a 5a pergunta com opção 2
            fase2Ctfl.marcarOpcao_teste5();
            cy.wait(4000);

            // Marcar a 6a pergunta com opção 1
            fase2Ctfl.marcarOpcao_teste6();
            cy.wait(4000);

            // Marcar a 7a pergunta com opção 3
            fase2Ctfl.marcarOpcao_teste7();
            cy.wait(4000);

            // Marcar a 8a pergunta com opção 1
            fase2Ctfl.marcarOpcao_teste8();
            cy.wait(4000);

            // Checar mensagens de finalização do quiz
            fase2Ctfl.checarNotaFinal();
      });

});