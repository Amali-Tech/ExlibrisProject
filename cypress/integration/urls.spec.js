/// <reference types="Cypress" />

describe('checking valid urls', () => {

    beforeEach(() => {
        //navigate to the URL
        cy.visit('https://www.exlibris.ch/de/')
    })

    it('checks if clicking on contact takes you to the contact page', () => {
        //click Kontakt
        cy.contains('Kontakt').click()
        //verify if the click on kontakt takes you to the kontakt page
        cy.url().should('eq', 'https://www.exlibris.ch/de/kontakt-hilfe/kontakt/anschrift-kontaktformular/')
    })

    it('checks if clicking on help takes you to the help page', () => {
        //click on Hilfe
        cy.contains('Hilfe').click()
        //verify if the click on help takes you to the help page
        cy.url().should('include', '/hilfe/')
    })

    it('checks if clicking on Service takes you to the Service page', () => {
        //click on Service
        cy.contains('Service').click()
        //verify if the click on Service takes you to the Service page
        cy.url().should('include', '/service-leistungen/')
    })

    it('checks if clicking on About Ex Libris takes you to the About Ex Libris page', () => {
        //click on About Ex Libris
        cy.contains('Über Ex Libris').click()
        //verify if the click on  About Ex Libris takes you to the  About Ex Libris page
        cy.url().should('include', '/ueber-uns/portrait/')
    })

    it.only('checks if clicking on location takes you to the location page', () => {
        //click on location
        cy.contains('Filialen').click()
        //verify if the click on  location takes you to the  location page
        cy.url().should('include', '/ueber-uns/filialen/')
    })

})
