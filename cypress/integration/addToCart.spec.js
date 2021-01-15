/// <reference types="cypress" />

describe('add to cart', () => {

    it('Verify that a user can add a product to their cart without viewing product details', () => {
        //visit the dvd's page
        cy.visit('https://www.exlibris.ch/de/filme/film-dvd/')

        // add harry porter: the complete collection to cart
        cy.get(':nth-child(1) > .buttons-2 > .addtobasket-1').click()

        // cy.pause()

        // verify that the item was successfully added to cart
        cy.get('#basketSuccessfullMsg').contains('Der Artikel wurde dem Warenkorb hinzugefügt.')
    })

    it('Verify that a user can add a product to their cart from product details page', () => {
        //visit the dvd's page
        cy.visit('https://www.exlibris.ch/de/filme/film-dvd/')

        // visit harry porter dvd page
        cy.get('.title-3').contains('Harry Potter: The Complete Collection').click()

        // click in the shopping cart button
        cy.get('#addItem5051890315960').contains('In den Warenkorb').click()


    })

    it('Confirm users can remove any product from the cart', () => {
        //visit the dvd's page
        cy.visit('https://www.exlibris.ch/de/filme/film-dvd/')

        // add harry porter: the complete collection to cart
        cy.get(':nth-child(1) > .buttons-2 > .addtobasket-1').click()

        // verify that the item was successfully added to cart
        cy.get('#basketSuccessfullMsg').contains('Der Artikel wurde dem Warenkorb hinzugefügt.')

        // go to cart page
        cy.get('#Service-Navi_Basket').click().wait(15000)

        // remove item from cart
        cy.get('.delete-2').click()
    })

    it('Verify the user can increase the quantity of the item in the cart', () => {
        //visit the dvd's page
        cy.visit('https://www.exlibris.ch/de/filme/film-dvd/')

        // add harry porter: the complete collection to cart
        cy.get(':nth-child(1) > .buttons-2 > .addtobasket-1').click()

        // verify that the item was successfully added to cart
        cy.get('#basketSuccessfullMsg').contains('Der Artikel wurde dem Warenkorb hinzugefügt.')

        // go to cart page
        cy.get('#Service-Navi_Basket').click().wait(20000)

        // increase the quantity of the item in the cart
        cy.get('.plus-2').click().wait(10000)

        // verify the quantity of the items in the cart
        cy.get('.input-1').should('have.value', 2)

    })

    it('Verify the user can reduce the quantity of the item in the cart', () => {
        //visit the dvd's page
        cy.visit('https://www.exlibris.ch/de/filme/film-dvd/')

        // add harry porter: the complete collection to cart
        cy.get(':nth-child(1) > .buttons-2 > .addtobasket-1').click()

        // verify that the item was successfully added to cart
        cy.get('#basketSuccessfullMsg').contains('Der Artikel wurde dem Warenkorb hinzugefügt.')

        // go to cart page
        cy.get('#Service-Navi_Basket').click().wait(15000)

        // reduce the quantity of the items in the cart
        cy.get('.minus-2').click()

        // verify that the shopping cart is empty
        cy.get('.alert-2').contains('Ihr Warenkorb ist leer.')

    })
})