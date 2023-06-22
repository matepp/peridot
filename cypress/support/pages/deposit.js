export const depositAndValidateMessage = (values) => {
    values.forEach((number) => {
        cy.get('[ng-click="deposit()"]').click()
        cy.get('input[ng-model="amount"]').type(`${number}`)
        cy.get('[type="submit"]').click()
        cy.get('[ng-show="message"]').should('contain.text', 'Deposit Successful')
    })
};

export const validateBalanceValue = (value) => {
    cy.contains('Balance').should('contain', `Balance : ${value}`)
};
