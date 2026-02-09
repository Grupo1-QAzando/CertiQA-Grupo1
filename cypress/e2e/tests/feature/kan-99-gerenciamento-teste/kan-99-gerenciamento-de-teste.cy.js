/// <reference types="cypress" />

import * as fase5Fase6Ctfl from "../../../../pages/page-dashboard-fase5-fase6-ctfl";

// DADOS DE LOGIN
// qa.admin@certiqa.com    QA@Test2024
// qa.active@certiqa.com   QA@Test2024
// grupo1-qazando@proton.me   grupo1qazando

describe('Kan-99 - Gerenciamento de Teste', () => {
  beforeEach(() => {
        cy.visit('/');
        cy.btnLogin();
        cy.loginConta('grupo1-qazando@proton.me', 'grupo1qazando');
        fase5Fase6Ctfl.accessCertificationCtfl();
  });


  // CONTINUAR COM OS TESTES DE KAN-100 até KAN-106

  
});