
it('First task', () => {
    cy.get('input[name="username"]').clear().type('Hello World');
    cy.get('button.btn')
        .should('be.visible')
        .and('contain', "/^Log me in$/")
        .click();
})
