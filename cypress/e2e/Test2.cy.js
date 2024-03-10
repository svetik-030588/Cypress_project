///<reference types="Cypress" />
it('' , () => {
    cy.visit('https://msk.tele2.ru/payments/refill')
    cy.contains('Войти')
})

it('' , () => {
    cy.visit('https://msk.tele2.ru/payments/refill')
    cy.contains('span', 'Войти')
})

//нерабочий, нет примера
// нужен пример
it('' , () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.get('footer').contains('theme-last-updated');   //get проигнорировван из-за иерархии
})