
Cypress.Commands.add('login', (name) => {
    cy.get('[ng-click="customer()"]').click()
    cy.get('#userSelect').select(name)
    cy.get('[type="submit"]').click()
})
Cypress.Commands.add('navigateToTransactions', (shouldHaveValues = false) => {
    cy.get('[ng-click="transactions()"]').click()
    if (shouldHaveValues){
        cy.get('table').then($body => {
            if ($body.find('tbody').children().length < 1){
                cy.get('[ng-click="back()"]').click()
                cy.get('[ng-click="transactions()"]').click()
            }
        })
    }
})

