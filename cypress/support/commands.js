
Cypress.Commands.add('login', (name) => {
    cy.get('[ng-click="customer()"]').click()
    cy.get('#userSelect').select(name)
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add('navigateToTransactions', (name) => {
    cy.wait(2000)
    cy.get('[ng-click="transactions()"]').click()
})
