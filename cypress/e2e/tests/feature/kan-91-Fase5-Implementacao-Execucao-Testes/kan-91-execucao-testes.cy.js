/// <reference types="cypress" />

import * as fase5Fase6Ctfl from "../../../../pages/page-dashboard-fase5-fase6-ctfl";

// DADOS DE LOGIN
// qa.admin@certiqa.com    QA@Test2024
// qa.active@certiqa.com   QA@Test2024
// grupo1-qazando@proton.me   grupo1qazando


describe('Kan-91 - Implementação e Execução de Testes', () => {
      beforeEach(() => {
            cy.visit('/');
            cy.btnLogin();
            cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
            fase5Fase6Ctfl.accessCertificationCtfl();
      });

      it('KAN-92 Descrição página "Conteúdo da Fase" - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
      });

      it('KAN-93 Finalização do simulado ao excerder tempo máximo - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();
            cy.wait(120000);
      });

      it('KAN-94 Funcionalidade botão "Sair Quiz" - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();
            fase5Fase6Ctfl.sairQuiz();
      });

      it('KAN-95 Funcionalidade botão "Anterior" durante o simulado - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();
            fase5Fase6Ctfl.marcarOpcao3();
            fase5Fase6Ctfl.botaoAnteriorQuiz();
      });

      it('KAN-96 Tela das respostas ao finalizar o simulado - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();

            // Marcar todas as respostas como a opção 2
            for (let i = 0; i < 10; i++) {
                  fase5Fase6Ctfl.marcarOpcao2();
            }
            
            // Checar mensagens de finalização do quiz
            fase5Fase6Ctfl.checarNotaFinal();
      });

      it('KAN-97 Funcionalidade do botão "Tentar Novamente" - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();

            // Marcar todas as respostas como a opção 2
            for (let i = 0; i < 10; i++) {
                  fase5Fase6Ctfl.marcarOpcao2();
            }
            
            // Checar mensagens de finalização do quiz
            fase5Fase6Ctfl.checarNotaFinal();

            
            // BOTÂO TENTAR NOVAMENTE NAO IMPLEMENTADO NA PAGINA ATUALMENTE
      });

      it.only('KAN-98 UI progressão ao avançar no simulado - Fase 5', () => {
            fase5Fase6Ctfl.acessarFase5();
            fase5Fase6Ctfl.iniciarQuiz();

            for (let i = 0; i < 10; i++) {
                  fase5Fase6Ctfl.verificarQuestaoAtual(i + 1);
                  fase5Fase6Ctfl.marcarOpcao2();
            }
      });
});