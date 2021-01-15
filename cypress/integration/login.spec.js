/// <reference types="cypress" />

describe('user login', () => {

    beforeEach('runs before each test case', () => {
        //visit base url
        cy.visit('https://www.exlibris.ch/de/')

        // click sign up now dropdown
        cy.get('#Service-Navi_Login-4').click()
    })

    it('verify\'s if user is able to log in with correct username and password', () => {
        // enter valid username
        cy.get('#username').type('abdul.sulley@amalitech.com')
            .should('have.value', 'abdul.sulley@amalitech.com')

        // enter password
        cy.get('#password').type('Admin@123')
            .should('have.value', 'Admin@123')

        // sign in
        cy.get('#loginSubmitButton').contains('Anmelden').click()

        // check if user logged in successfully
        cy.get('.header-1-2').contains('Willkommen Herr Manaf, schön sind Sie da!')

    })

    it('verify\'s that the user in unable to log in with invalid username and password', () => {
        // enter unregistered username
        cy.get('#username').type('authtest3@gmail.com')
            .should('have.value', 'authtest3@gmail.com')

        // enter invalid password
        cy.get('#password').type('password@1')
            .should('have.value', 'password@1')

        // sign in
        cy.get('#loginSubmitButton').contains('Anmelden').click()

        //verify error prompt
        cy.get('#loginErrMsg').contains('Die eingegebene E-Mail Adresse und/oder das Passwort sind nicht korrekt.')

    })

    it('Verify\'s that user is unable to login when both email and password fields are blank', () => {
        // leave username field blank
        cy.get('#username')
            .should('not.have.value', 'authtest3@gmail.com')

        // leave password field blank
        cy.get('#password')
            .should('not.have.value', 'password@1')

        // sign in
        cy.get('#loginSubmitButton').contains('Anmelden').click()

        // check error message
        cy.get('#loginErrMsg').contains('Die eingegebene E-Mail Adresse und/oder das Passwort sind nicht korrekt.')
    })

    it('Verify\'s that user can login with a valid email entered in uppercase', () => {
        // enter valid username in uppercase
        cy.get('#username').type('ABDUL.SULLEY@AMALITECH.COM')
            .should('have.value', 'ABDUL.SULLEY@AMALITECH.COM')

        // enter password
        cy.get('#password').type('Admin@123')
            .should('have.value', 'Admin@123')

        // sign in
        cy.get('#loginSubmitButton').contains('Anmelden').click()

        // check if user logged in successfully
        cy.get('.header-1-2').contains('Willkommen Herr Manaf, schön sind Sie da!')

    })

    it('Verify\'s if the user is able to select the stay logged in checkbox', () => {
        cy.get('#save-login-1').click()
    })

    it('Verify\'s the forgot password link. Clicking on the link should navigate user to the forgot password page', () => {
        // click forgot password link
        cy.get('#lost-password-2').click()

        // assert user is on forgot password page
        cy.get('#pwdForgottenMsgInfo').contains('Bitte geben Sie Ihre E-Mail-Adresse ein. Existiert zu dieser Adresse ein Ex Libris-Konto, wird Ihnen ein Link zugeschickt, um ein neues Passwort zu setzen.')
    })
})