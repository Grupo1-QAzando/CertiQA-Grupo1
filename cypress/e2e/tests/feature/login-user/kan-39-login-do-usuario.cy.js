describe('Funcionalidade: Login no CertiQa Qazando', () => {
  beforeEach(() => {
    cy.visit('https://certiqa-qazando.com/login');
  });

  // Cenário 1: Login com Sucesso
  it('Deve realizar login com sucesso com credenciais válidas', () => {
    cy.get('#email').type('alunoqateste@gmail.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.contains('Login bem-sucedido').should('be.visible');
    cy.contains('Bem-vindo, Aluno QA!').should('be.visible')
    cy.url().should('not.include', '/login');
  });

  // Cenário 2: Login e-mail inválido
  it('Deve exibir mensagem de erro ao inserir e-mail inválido', () => {
    cy.get('#email').type('email_invalido@teste.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.contains('Erro no login').should('be.visible');
    cy.contains('E-mail ou senha incorretos. Tente novamente.').should('be.visible');
  });

  // Cenário 3: Login com senha inválida
  it('Deve exibir mensagem de erro ao deixar campos vazios', () => {
    cy.get('#email').type('alunoqateste@gmail.com');
    cy.get('#password').type('senha_errada_123');
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.contains('Erro no login').should('be.visible');
    cy.contains('E-mail ou senha incorretos. Tente novamente.').should('be.visible');
  });

    // Cenário 4: Login com campos em branco
  it('Deve exibir mensagem de erro ao deixar campos vazios', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('E-mail é obrigatório').should('be.visible');
    cy.contains('Senha é obrigatória').should('be.visible');
  });
});