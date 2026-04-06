/// <reference types="cypress" />

export default {
  accessCertificationCtfl() {
    cy.get('nav > a[href="/certificacoes"]').click();
    cy.get('a[href="/certificacoes/ctfl"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl');
  },

  acessarFase2() {
    cy.get('a[href="/certificacoes/ctfl/fase/lifecycle"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/lifecycle')
  },

  iniciarQuiz() {
    cy.get('.text-primary-foreground').click();
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 1 de 8');
  },


  marcarOpcao_teste1() {
    // Verifica se o texto da questão está presente
    cy.contains('No Modelo V, o que está corretamente associado ao teste de sistema?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    // cy.get('label').each(($label) => {
    // cy.wrap($label).find('input[type="radio"]').check({ force: true });
    // });
    // cy.wait(4000);

    // Seleciona a opção "de requisitos"
    cy.contains('label', 'de requisitos')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'de requisitos')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste2() {
    // Verifica se o texto da questão está presente
    cy.contains('No modelo ágil, como os testes são integrados ao desenvolvimento?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    // cy.get('label').each(($label) => {
    //   cy.wrap($label).find('input[type="radio"]').check({ force: true });
    // });
    // cy.wait(4000);

    // Seleciona a opção "Testes são contínuos e integrados"
    cy.contains('label', 'Testes são contínuos e integrados')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    // cy.contains('label', 'Testes são contínuos e integrados')
    //   .find('input[type="radio"]')
    //   .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste3() {
    // Verifica se o texto da questão está presente
    cy.contains('Qual é o foco principal do teste de componente?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });

    // Seleciona a opção "Teste componentes individuais isoladamente"
    cy.contains('label', 'Testa componentes individuais isoladamente')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'Testa componentes individuais isoladamente')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste4() {
    // Verifica se o texto da questão está presente
    cy.contains('O que caracteriza o teste de aceitação?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });

    // Seleciona a opção "Valida critérios de aceitação do usuário"
    cy.contains('label', 'Valida critérios de aceitação do usuário')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'Valida critérios de aceitação do usuário')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste5() {
    // Verifica se o texto da questão está presente
    cy.contains('Quando é realizado o teste de manutenção?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });

    // Por último, seleciona a opção correta novamente
    cy.contains('label', 'Após modificações em sistemas existentes')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'Após modificações em sistemas existentes')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste6() {
    // Verifica se o texto da questão está presente
    cy.contains('O que é análise de impacto?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });

    // Por último, seleciona a opção correta novamente
    cy.contains('label', 'Identifica partes afetadas por mudanças')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'Identifica partes afetadas por mudanças')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste7() {
    // Verifica se o texto da questão está presente
    cy.contains('Qual modelo de desenvolvimento tem fases sequenciais?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });

    // Seleciona a opção "Modelo em cascata (waterfall)"
    cy.contains('label', 'Modelo em cascata (waterfall)')
      .find('input[type="radio"]')
      .check({ force: true });

    // Confirma que a opção foi selecionada
    cy.contains('label', 'Modelo em cascata (waterfall)')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Próxima').click();
  },


  marcarOpcao_teste8() {
    // Verifica se o texto da questão está presente
    cy.contains('O que é teste de confirmação?').should('be.visible');

    // Aciona todas as 4 opções (assumindo que são radio buttons em labels)
    cy.get('label').each(($label) => {
      cy.wrap($label).find('input[type="radio"]').check({ force: true });
    });


    // Por último, seleciona a opção correta novamente
    cy.contains('label', 'Verifica se defeito foi corrigido')
      .find('input[type="radio"]')
      .check({ force: true });


    // Confirma que a opção foi selecionada
    cy.contains('label', 'Verifica se defeito foi corrigido')
      .find('input[type="radio"]')
      .should('be.checked');

    // Aciona o botão "Próxima"
    cy.contains('button', 'Finalizar').click();
  },


  sairQuiz() {
    cy.get('.pt-0 > :nth-child(2) > .flex > .border').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/lifecycle');
  },


  botaoAnteriorQuiz() {
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 2 de 8');
    cy.get('.pt-0 > :nth-child(2) > :nth-child(1)').click();
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', 'Questão 1 de 8');
  },


  verificarQuestaoAtual(numeroQuestao) {
    cy.get('.space-y-2 > .flex > :nth-child(1)').should('contain.text', `Questão ${numeroQuestao} de 8`);
  },


  // Checagem de mensagens
  checarMensagemTempoEsgotado() {
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Teste Durante o Ciclo de Desenvolvimento');
  },


  checarNotaFinal() {
    cy.get('.flex-col > .text-2xl').should('have.text', 'Resultado do Quiz - Quiz: Teste Durante o Ciclo de Desenvolvimento')
    cy.get('.mt-2').should('have.text', 'Parabéns! Você passou!');
  }

}