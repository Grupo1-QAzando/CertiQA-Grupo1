import { faker } from '@faker-js/faker';
describe('Funcionalidade: Cadastro CertiQa Qazando', () => {
  beforeEach(() => {
    cy.visit('https://certiqa-qazando.com/cadastro');
  });


 //CAD-001 - Cadastro com cupom em branco - usuário trial

it('Cadastro com sucesso utilizando dados dinâmicos e cupom em branco', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('button[type="submit"]').click();
    cy.contains('.font-semibold', 'Cadastro realizado com sucesso!').should('be.visible');
    cy.contains('.opacity-90', 'Bem-vindo ao CertiQA. Seu período de avaliação gratuita de 3 dias começou.').should('be.visible');
  });

  //CAD-007 - Cadastro com códigos estudantis válidos
it('Cadastro com sucesso - dados dinâmicos e cupom válido 1', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('#studentCode').type('QATEST2024');
    cy.get('button[type="submit"]').click();
    cy.contains('.font-semibold', 'Cadastro realizado com sucesso!').should('be.visible');
    cy.contains('.opacity-90', 'Bem-vindo ao CertiQA. Seu acesso permanente foi ativado!').should('be.visible');
  });


it('Cadastro com sucesso - dados dinâmicos e cupom válido 2', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('#studentCode').type('QAVALID001');
    cy.get('button[type="submit"]').click();
    cy.contains('.font-semibold', 'Cadastro realizado com sucesso!').should('be.visible');
    cy.contains('.opacity-90', 'Bem-vindo ao CertiQA. Seu acesso permanente foi ativado!').should('be.visible');
  });


 //CAD-008 - Uso de código estudantil já utilizado

it('Cadastro com sucesso - dados dinâmicos e cupom já utilizado', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('#studentCode').type('QAUSADO2024');
    cy.get('button[type="submit"]').click();
    cy.contains('.font-semibold', 'Erro no cadastro').should('be.visible');
    cy.contains('.opacity-90', 'Erro ao verificar código do aluno').should('be.visible');
  });

//CAD-009 - Uso de código estudantil inválido

it('Cadastro com sucesso - dados dinâmicos e cupom inválido', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 
    const cupominvalido = 'QA' + faker.string.alphanumeric({ length: 6, casing: 'upper' });

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('#studentCode').type(cupominvalido);
    cy.get('button[type="submit"]').click();
    cy.contains('.font-semibold', 'Erro no cadastro').should('be.visible');
    cy.contains('.opacity-90', 'Erro ao verificar código do aluno').should('be.visible');
  });


 //CAD-005 - Cadastro com nome em branco - usuário trial

it('Cadastro sem sucesso - dados dinâmicos e nome em branco', () => {
    const emailaleatorio = faker.internet.email();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('button[type="submit"]').click();
    cy.contains('.text-red-500', 'Nome é obrigatório').should('be.visible');
  });


//CAD-006 - Cadastro com e-mail em branco

it('Cadastro sem sucesso - dados dinâmicos e e-mail em branco', () => {
    const nomealeatorio = faker.person.fullName();
    const senhaaleatoria = faker.internet.password({ length: 6 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#password').type(senhaaleatoria);
    cy.get('#confirmPassword').type(senhaaleatoria);
    cy.get('#studentCode').type('QAVALID001');
    cy.get('button[type="submit"]').click();
    cy.contains('.text-red-500', 'E-mail é obrigatório').should('be.visible');
  });

//CAD-003 - Validação de Senha Curta, em branco e senhas diferentes

it('Cadastro sem sucesso - dados dinâmicos e senha curta', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhacurta = faker.internet.password({ length: 1 }) + '1aA@'; 

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhacurta);
    cy.get('#confirmPassword').type(senhacurta);
    cy.get('button[type="submit"]').click();
    cy.contains('.text-red-500', 'Senha deve ter pelo menos 6 caracteres').should('be.visible');
  });

it('Cadastro sem sucesso - dados dinâmicos e senha em branco', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('button[type="submit"]').click();
    cy.contains('.text-red-500', 'Senha é obrigatória').should('be.visible');
  });

  it('Cadastro sem sucesso - dados dinâmicos segunda senha diferente', () => {
    const nomealeatorio = faker.person.fullName();
    const emailaleatorio = faker.internet.email();
    const senhacurta = faker.internet.password({ length: 1 }) + '1aA@'; 
    const senhaaleatoria1 = faker.internet.password({ length: 6 }) + '1aA@';
    const senhaaleatoria2 = faker.internet.password({ length: 6 }) + '1bB@';

    cy.get('#name').type(nomealeatorio);
    cy.get('#email').type(emailaleatorio);
    cy.get('#password').type(senhaaleatoria1);
    cy.get('#confirmPassword').type(senhaaleatoria2);
    cy.get('button[type="submit"]').click();
    cy.contains('.text-red-500', 'As senhas não coincidem').should('be.visible');
  });

});