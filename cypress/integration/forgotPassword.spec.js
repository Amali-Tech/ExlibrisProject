describe('forgot password', () => {
    beforeEach('', () => {
        //visit base url
        cy.visit('https://www.exlibris.ch/de/')

        // click sign up now dropdown
        cy.get('#Service-Navi_Login-4').click()

        // click forgot password link
        cy.get('#lost-password-2').click()

        // assert user is on forgot password page
        cy.get('#pwdForgottenMsgInfo').contains('Bitte geben Sie Ihre E-Mail-Adresse ein. Existiert zu dieser Adresse ein Ex Libris-Konto, wird Ihnen ein Link zugeschickt, um ein neues Passwort zu setzen.')
    })

    it('verify\'s that the user receives reset password link when the user enters correct email', () => {

        // enter correct email address
        cy.get('#email-2').type('abdul.sulley@amalitech.com')
            .should('have.value', 'abdul.sulley@amalitech.com')

        // click send button
        cy.get('.button-2').contains('Senden').click()

        // verify success message
        cy.get('#pwdForgottenMsgSuccess').contains('Der Link wurde an die angegebene Adresse verschickt, sofern ein zugehöriges Ex Libris-Konto vorhanden ist.')

    })

    it('verify\'s that the user receives the correct prompt when incorrect format of email is entered', () => {

        // enter invalid email format
        cy.get('#email-2').type('123@.com')
            .should('have.value', '123@.com')

        // click send button
        cy.get('.button-2').contains('Senden').click()

        // verify error message
        cy.get('#pwdForgottenMsgError').contains('Falsches Format der E-Mail-Adresse.')
    })

})