/// <reference types="cypress" />

import * as fase5Fase6Ctfl from "../../../../pages/page-dashboard-fase5-fase6-ctfl.js";

// DADOS DE LOGIN
// qa.admin@certiqa.com    QA@Test2024
// qa.active@certiqa.com   QA@Test2024
// grupo1-qazando@proton.me   grupo1qazando

describe('Kan-99 - Gerenciamento de Teste', () => {
  beforeEach(() => {
    cy.viewport(1900, 1000);
        cy.visit('/');
        cy.btnLogin();
        cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
        fase5Fase6Ctfl.accessCertificationCtfl();
  });

  it('KAN-100 Descrição página "Conteúdo da Fase" - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
  });

  it('KAN-101 Finalização do simulado ao exceder tempo máximo - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();
    cy.wait(730000);
    fase5Fase6Ctfl.checarMensagemTempoEsgotadoFase6();
  });

  it('KAN-102 Funcionalidade botão "Sair Quiz" - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();
    fase5Fase6Ctfl.sairQuizFase6();
  });

  it('KAN-103 Funcionalidade botão "Anterior" durante o simulado - Fase 6', () => { 
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();
    fase5Fase6Ctfl.marcarOpcao2();
    fase5Fase6Ctfl.botaoAnteriorQuiz();
  });

  it('KAN-104 Tela das respostas ao finalizar o simulado - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();
    // Marcar todas as respostas como a opção 2
    for (let i = 0; i < 10; i++) {
      fase5Fase6Ctfl.marcarOpcao2();
    }
    // Checar mensagens de finalização do quiz
    fase5Fase6Ctfl.checarNotaFinalFase6();
  });

  it('KAN-105 Funcionalidade do botão "Tentar Novamente" - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();

    // Marcar todas as respostas como a opção 2
    for (let i = 0; i < 10; i++) {
      fase5Fase6Ctfl.marcarOpcao2();
    }

    // Checar mensagens de finalização do quiz
    fase5Fase6Ctfl.checarNotaFinalFase6();

    // BOTÃO TENTAR NOVAMENTE NÃO IMPLEMENTADO NA PAGINA ATUALMENTE
  });

  it('KAN-106 UI progressão ao avançar no simulado - Fase 6', () => {
    fase5Fase6Ctfl.acessarFase6();
    fase5Fase6Ctfl.iniciarQuiz();

    for (let i = 1; i <= 10; i++) {
      fase5Fase6Ctfl.verificarQuestaoAtual(i);
      fase5Fase6Ctfl.marcarOpcao2();
    }
  });
});