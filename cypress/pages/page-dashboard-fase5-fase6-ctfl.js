/// <reference types="cypress" />

export default {
  accessCertificationCtfl(){
    cy.get('nav > a[href="/certificacoes"]').click();
    cy.get('a[href="/certificacoes/ctfl"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl');
  },

  acessarFase5(){
    cy.get('a[href="/certificacoes/ctfl/fase/test-implementation"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/test-implementation');
  },

  acessarFase6(){
    cy.get('a[href="/certificacoes/ctfl/fase/test-management"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/test-management');
  },

  iniciarQuiz(){
    cy.get('.text-primary-foreground').click();
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 1 de 10');
  },

  marcarOpcao2(){
    cy.get('.space-y-2 > :nth-child(2) > .flex > span').click();
    cy.get(':nth-child(2) > .flex > .bg-primary').click();
  },

  sairQuiz(){
    cy.get('.pt-0 > :nth-child(2) > .flex > .border').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/test-implementation');
  },

  sairQuizFase6(){
    cy.get('.pt-0 > :nth-child(2) > .flex > .border').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/test-management');
  },

  botaoAnteriorQuiz(){
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 2 de 10');
    cy.get('.pt-0 > :nth-child(2) > :nth-child(1)').click();
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 1 de 10');
  },

  verificarQuestaoAtual(numeroQuestao){
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', `Questão ${numeroQuestao} de 10`);
  },

  // Checagem de mensagens
  checarMensagemTempoEsgotado(){
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Implementação e Execução');
  },

  checarMensagemTempoEsgotadoFase6(){
    // cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Implementação e Execução');
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Gerenciamento de Teste');
    cy.get('.mt-2').should('contain.text', 'Você precisa de pelo menos 60% para passar.');
  },

  checarNotaFinal(){
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Implementação e Execução');
    cy.get('.mt-2').should('contain.text', 'Parabéns! Você passou!');
  },

  checarNotaFinalFase6(){
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Gerenciamento de Teste');
    cy.get('.mt-2').should('contain.text', 'Parabéns! Você passou!');
  }
};
