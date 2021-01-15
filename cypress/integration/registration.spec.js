/// <reference types="cypress" />

describe('Registraion Functionality', () => {

    it('Verify that not filling the required fields and clicking the Save and continue button leads to validation error', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //Company field
        cy.get('#label-4').click().type('Amalitechs')

        //Additional line
        cy.get('#label-5').click().type('Ama Akroma Street')

        //Phone number
        cy.get('#label_1007').click().type('05454744111')

        //Mobile number
        cy.get('#label-112').click().type('05454744111')

        //Language
        cy.get('#language_de').click()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()

        //Deposit Cumulus card
        cy.get('#address_cbCumulus').click()

        //Submit button
        //cy.get('.button-2 save-user').click()
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)

        //Should contain validation error 

        //email
        cy.contains('Bitte geben Sie eine E-Mail-Adresse an.')
        //title
        cy.contains('Bitte wählen Sie eine Anrede.')
        //Password
        cy.contains('Das Passwort muss mindestens 6 Zeichen lang sein.')
        //firstname
        cy.contains('Bitte geben Sie einen Vornamen an.')
        //lastname
        cy.contains('Bitte geben Sie einen Namen an.')
        //Language
        cy.contains('Bitte geben Sie eine Strasse und eine Hausnummer (falls vorhanden) an.')
        //postal zip code
        cy.contains('Bitte geben Sie eine Postleitzahl ein.')
        //place
        cy.contains('Bitte wählen Sie einen Ort aus.')
     
        

  

    })

    it('Verify that not filling the optional fields and clicking the Save and continue button will still send data to the server without any validation error', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type('manafsulleyman@gmail.com')
        //cy.get('#email-1').click().type('man@gmail.com')

        //Title field
        cy.get('#address_title')
            .select('0').should('have.value', '0')

        //Password field
        cy.get('#passwordField').click().type('Admin@123')

        //First Name Field
        cy.get('#label-2').click().type('Abdul Manaf')

        //Confirm Password field
        cy.get('#password-2').click().type('Admin@123')

        //Last Name field
        cy.get('#label-3').click().type('Sulley')

        //Language
        cy.get('#language_de').click()

        //Street and house number
        cy.get('#label-7').click().type('Ama Akroma street')

        //Zip Code
        cy.get('#label_1008').click().type('6013').wait(10000)

        //Place
        //cy.get('#label_1009').click().type()

        //Country
        //cy.get('#label_1010').click().type()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()

        //Deposit Cumulus card
        //cy.get('#address_cbCumulus').click()

        //Submit button
        //cy.get('.button-2 save-user').click()
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)
        
        //email
        // cy.contains('Willkommen Herr Abdul Manaf, schön sind Sie da!')

    })

    it('Confiirm validation on the email field (only valid email Ids should be allowed).', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type('manafsulleyman@gmail')

        //Title field
        cy.get('#address_title')
            .select('0').should('have.value', '0')

        //Password field
        cy.get('#passwordField').click().type('Admin@123')

        //First Name Field
        cy.get('#label-2').click().type('Abdul Manaf')

        //Confirm Password field
        cy.get('#password-2').click().type('Admin@123')

        //Last Name field
        cy.get('#label-3').click().type('Sulley')

        //Language
        cy.get('#language_de').click()

        //Street and house number
        cy.get('#label-7').click().type('Ama Akroma street')

        //Zip Code
        cy.get('#label_1008').click().type('6013').wait(10000)

        //Place
        //cy.get('#label_1009').click().type()

        //Country
        //cy.get('#label_1010').click().type()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()

        //Deposit Cumulus card
        //cy.get('#address_cbCumulus').click()

        //Submit button
        //cy.get('.button-2 save-user').click()
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)
        
        //Validation error for email
        //cy.get('#accountEntry\.emailAddress\.errors').contains('Bitte geben Sie eine E-Mail-Adresse an.')

        // cy.get('#accountEntry\.emailAddress\.errors')
        //     .should('have.text', 'Bitte geben Sie eine E-Mail-Adresse an.')

        //Navigate to create event page
        cy.url()
            .should('include', '/neues-konto')

    })

    it('Confiirm validation on the password field (6 characters or more should be allowed and a combination of characters).', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type('manafsulleyman@gmail.com')

        //Title field
        cy.get('#address_title')
            .select('0').should('have.value', '0')

        //Password field
        cy.get('#passwordField').click().type('admin123')

        //First Name Field
        cy.get('#label-2').click().type('Abdul Manaf')

        //Confirm Password field
        cy.get('#password-2').click().type('admin123@123')

        //Last Name field
        cy.get('#label-3').click().type('Sulley')

        //Language
        cy.get('#language_de').click()

        //Street and house number
        cy.get('#label-7').click().type('Ama Akroma street')

        //Zip Code
        cy.get('#label_1008').click().type('6013').wait(10000)

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()


        //Submit button
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)
        

        //Password
        cy.contains('Bitte bestätigen Sie das Passwort nochmals.')

    })

    it('Check that entering blank spaces on mandatory fields lead to validation error.', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type(' ')
        //cy.get('#email-1').click().type('man@gmail.com')

        //Title field
        cy.get('#address_title')
            .select('0').should('have.value', '0')

        //Password field
        cy.get('#passwordField').click().type(' ')

        //First Name Field
        cy.get('#label-2').click().type(' ')

        //Confirm Password field
        cy.get('#password-2').click().type(' ')

        //Last Name field
        cy.get('#label-3').click().type(' ')

        //Language
        cy.get('#language_de').click()

        //Street and house number
        cy.get('#label-7').click().type(' ')

        //Zip Code
        cy.get('#label_1008').click().type(' ').wait(10000)

        //Place
        //cy.get('#label_1009').click().type()

        //Country
        //cy.get('#label_1010').click().type()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()

        //Deposit Cumulus card
        //cy.get('#address_cbCumulus').click()

        //Submit button
        //cy.get('.button-2 save-user').click()
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)
        
        //Should contain validation error 

        //email
        cy.contains('Bitte geben Sie eine gültige E-Mail-Adresse an.') 
        //Password
        cy.contains('Das Passwort muss mindestens 6 Zeichen lang sein.')
        //firstname
        cy.contains('Bitte geben Sie eine gültige Bezeichnung ein.')
        //lastname
        cy.contains('Bitte geben Sie eine gültige Bezeichnung ein.')

        //street
        cy.contains('Der Strasse und eine Hausnummer muss aus mindestens 2 Zeichen bestehen. Bitte geben Sie eine gültige Strasse und eine Hausnummer an oder lassen Sie das Feld leer.')

        //postal zip code
        cy.contains('Bitte geben Sie eine Postleitzahl ein.')
        //place
        cy.contains('Bitte wählen Sie einen Ort aus.')

    })

    it('Confirm validation on numeric fields by entering alphabets and special characters.', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type('manafsulleyman@gmail.com')
        //cy.get('#email-1').click().type('man@gmail.com')

        //Title field
        cy.get('#address_title')
            .select('0').should('have.value', '0')

        //Password field
        cy.get('#passwordField').click().type('Admin@123')

        //First Name Field
        cy.get('#label-2').click().type('Abdul Manaf')

        //Confirm Password field
        cy.get('#password-2').click().type('Admin@123')

        //Last Name field
        cy.get('#label-3').click().type('Sulley')

        //Language
        cy.get('#language_de').click()

        //Street and house number
        cy.get('#label-7').click().type('Ama Akroma street')

        //Zip Code
        cy.get('#label_1008').click().type('6013').wait(10000)

        //Phone 
        cy.get('#label_1007').click().type('Hello')

        //Mobile
        cy.get('#label-112').click().type('Hello')

        //Place
        //cy.get('#label_1009').click().type()

        //Country
        //cy.get('#label_1010').click().type()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click()

        //Deposit Cumulus card
        //cy.get('#address_cbCumulus').click()

        //Submit button
        //cy.get('.button-2 save-user').click()
        cy.get(':nth-child(7) > .last-1 > .button-2').click().wait(10000)
        
        //Expected Validation 
        cy.contains('Die Landesvorwahl ist ungültig.')

    })

    it('Confiirm validation on the email field (only valid email Ids should be allowed).', () => {

        //Visiting the url
        cy.visit('https://www.exlibris.ch/de/')

        //Navigate to the registration page
        cy.get('#Service-Navi_Login-4').click()

        //Click on the Open account 
        cy.get('#login-1 > .font-1').click()

        //email field
        cy.get('#email-1').click().type()

        //Title field
        cy.get('#address_title').click().type()

        //Password field
        cy.get('#passwordField').click().type()

        //First Name Field
        cy.get('#label-2').click().type()

        //Confirm Password field
        cy.get('#password-2').click().type()

        //Last Name field
        cy.get('#label-3').click().type()

        //Company field
        cy.get('#label-4').click().type()

        //Additional line
        cy.get('#label-5').click().type()

        //Street and house number
        cy.get('#label-7').click().type()

        //Zip Code
        cy.get('#label_1008').click().type()

        //Place
        cy.get('#label_1009').click().type()

        //Country
        cy.get('#label_1010').click().type()

        //Phone number
        cy.get('#label_1007').click().type()

        //Mobile number
        cy.get('#label-112').click().type()

        //Subscribe to newsletter
        cy.get('#newsletter_setting_true').click().type()

        //Deposit Cumulus card
        cy.get('#address_cbCumulus').click()

        //Submit button
        cy.get('.button-2 save-user').click()
 

    })
})


