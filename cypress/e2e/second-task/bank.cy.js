import {depositAndValidateMessage, validateBalanceValue} from "../../support/pages/deposit";
import {validateSumOfTransactions} from "../../support/pages/transaction";

const depositValues = [100,10,5]

describe('Task two', () => {
    //Implemented with a normal login flow but loading the local storage with the user data is also a possibility
    beforeEach(() => {
        cy.visit('/')
        cy.login('Harry Potter')
    })
    it('Validate deposit function', () => {
        depositAndValidateMessage(depositValues)
        validateBalanceValue(115)
        cy.navigateToTransactions(true)
        validateSumOfTransactions(115)
    })
})
