///<reference types="Cypress" />
it('By_id', () => {
    cy.visit('http://mail.ru/')
    cy.get('#email')
}
);

it('By_class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('.footer__copyright')
}
)

it('By_tag', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.get('nav')
}
)

it('By_tag_value', () => {
    cy.visit('https://passport.yandex.ru/auth/add?mode=add-user&retpath=https%3A%2F%2Fmail.yandex.ru')
    cy.get('[name="login"]')
}
)

it('By_different_tag', () => {
    cy.visit('https://ok.ru/dk?st.cmd=anonymMain#')
    cy.get('[data-l="t,qr_tab"][aria-controls="tabpanel-qrCode-7690423577"]')
}
)

it('By_different_types', () => {
    cy.visit('https://mos.ru/')
    cy.get('button[type="button"][aria-label="Меню раздела Новости"]')
}
)

it('By_contains_name', () => {
    cy.visit('https://nalog.gov.ru/rn77/')
    cy.get('[ class^="hidden"]')
}
)


it('Using Get with find and eq', () => {
    cy.visit('https://code.visualstudio.com/Download')
    cy.get('tbody').find('td').eq(3)
}
)

it.only('https://docs.cypress.io/api/commands/eq', () => {
    cy.viewport(1800,700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('.col--3').find('div').find('ul').find('li').find('a').eq(0)

}
)