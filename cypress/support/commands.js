
Cypress.Commands.add('login', (name) => {
    cy.get('[ng-click="customer()"]').click()
    cy.get('#userSelect').select(name)
    cy.get('[type="submit"]').click()
})

