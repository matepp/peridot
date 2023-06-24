import {depositAndValidateMessage, validateBalanceValue} from "../../support/pages/deposit";
import {validateSumOfTransactions} from "../../support/pages/transaction";

const depositValues = [100,10,5]
const depositSum = 115

describe('Task two', () => {
    //Implemented with a normal login flow but loading the local storage with the user data is also a possibility
    beforeEach(() => {
        cy.visit('/')
        cy.login('Harry Potter')
    })
    it('Validate deposit function', () => {
        cy.fixture('testData').then((testData) => {
            depositAndValidateMessage(testData.depositValues)
            validateBalanceValue(testData.depositSum)
            cy.navigateToTransactions()
            validateSumOfTransactions(testData.depositSum)
        })
    })
})
