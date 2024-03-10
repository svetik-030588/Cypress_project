///<reference types="Cypress" />

//const { should } = require("chai")


it('SHOULD', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
    cy.get('[ng-model]')
    .type(100)
    .should('have.value', 11)
    .and('be.visible')

})

it.only('EXPECT', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account')
    cy.get('[ng-model]')
    .type(100).then( input => {
        expect(input).to.have.value(100)
    }
    )

