export const validateSumOfTransactions = (exceptedSum) => {
    let sum = 0;
    cy.get("table").find('[id^=anchor]').each(((row, index, rows) => {
        cy.wrap(row).children().first().next().invoke('text')
            .then((text) => {
                const orderTotal = parseInt(text);
                sum += orderTotal;
                if (index === rows.length - 1) {
                    cy.wrap(sum).should('eq', exceptedSum);
                }
            });
    }));
}
