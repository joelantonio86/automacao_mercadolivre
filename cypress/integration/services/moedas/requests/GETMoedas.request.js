//  verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress"/>

function allMoedas () {
    // cy.request - client http
    return cy.request({
        method: 'GET',
        url: 'currencies',
        failOnStatusCode: false,
    })
}
export { allMoedas };


function Moeda(Currency_id) {
    // cy.request - client http
    return cy.request({
        method: 'GET',
        url: `currencies/${Currency_id}`,
        failOnStatusCode: false
    })
}
export { Moeda };

function MoedaNegativa(Currency_id) {
    // cy.request - client http
    return cy.request({
        method: 'GET',
        url: `currencies/${Currency_id}`,
        failOnStatusCode: false
    })
}
export { MoedaNegativa };
