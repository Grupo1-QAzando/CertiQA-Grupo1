
export function funcAcessarPaginaCtfl() {
    cy.get('#root nav.hidden a[href="/certificacoes"]').click();
    cy.get('#root a[href="/certificacoes/ctfl"]').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl');
    cy.get('.grid > .font-semibold').should('have.text', 'Login bem-sucedido');

};

export function funcFaseDoisBloqueado() {
    cy.get(':nth-child(2) > .flex.pt-0').should('contain.text', 'Fase bloqueada');
    cy.log('Fase 2 | Status: Bloqueada')

};

export function funcFaseTresBloqueado() {
    cy.get(':nth-child(3) > .flex.pt-0').should('contain.text', 'Fase bloqueada');
    cy.log('Fase 3 | Status: Bloqueada')
};

export function funcFaseQuatroBloqueado() {
    cy.get(':nth-child(4) > .flex.pt-0').should('contain.text', 'Fase bloqueada');
    cy.log('Fase 4 | Status: Bloqueada');
};

export function funcFaseCincoBloqueado() {
    cy.get(':nth-child(5) > .flex.pt-0').should('contain.text', 'Fase bloqueada');
    cy.log('Fase 5 | Status: Bloqueada');
};

export function funcFaseSeisBloqueado() {
    cy.get(':nth-child(6) > .flex.pt-0').should('contain.text', 'Fase bloqueada');
    cy.log('Fase 6 | Status: Bloqueada');
};

export function funcEncarteProximaFase() {
    cy.get(':nth-child(3) > .rounded-lg > .flex > .font-semibold').should('have.text', 'Próxima Fase');
    cy.get('.space-y-4 > .inline-flex').should('contain.text', 'Continuar Estudando').click();
    cy.log('Usuário redirecionado para a página da última fase acessada com sucesso, menos a fase do Simulado Final.');
    cy.url().should('not.eq', 'https://www.certiqa-qazando.com/certificacoes/ctfl');
};

export function funcDescricaoPaginaConteudoFaseUm() {
    cy.get('.max-w-6xl > :nth-child(2) > .grid > :nth-child(1)').should('contain.text', 'Fase 1').and('contain.text', 'Fundamentos de Teste');
    cy.get(':nth-child(1) > .flex.pt-0 > .inline-flex').should('contain.text', 'Continuar estudo').click();
    cy.validarURL('https://www.certiqa-qazando.com/certificacoes/ctfl/fase/fundamentals');
    cy.get('.text-3xl').should('have.text', 'Fundamentos de Teste');
};
export function funcIniciarQuizFaseUm() {
    funcDescricaoPaginaConteudoFaseUm();
    cy.get('.text-primary-foreground').should('contain.text', 'Iniciar Quiz').click();
};
export function funcBtnSairQuiz() {
    cy.get('.pt-0 > :nth-child(2) > .flex > .border').should('contain.text', 'Sair do Quiz').click();
};

export function funcBtnProximoQuiz() {
    cy.get(':nth-child(2) > .flex > .bg-primary').should('contain.text', 'Próxima').click();
};
export function funcSelecionarRespostaQuizFaseUm() {
    cy.get('.pt-0 > :nth-child(1) > .space-y-2 > :nth-child(1)').click();
    cy.wait(3000);
};

export function funcBtnAnteriorQuiz() {
    cy.get('.pt-0 > :nth-child(2) > :nth-child(1)').should('contain.text', 'Anterior').click();
    cy.log('Botão "Anterior" funcionou corretamente');
};
