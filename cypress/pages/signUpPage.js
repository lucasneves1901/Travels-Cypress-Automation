class signUpPage {
    elements = {
        firstNameInput: () => cy.get("#firstname"),
        lastNameInput: () => cy.get('#lastname'),
        emailInput: () => cy.get('#email_address'),
        passwdInput: () => cy.get('#password'),
        confirmPasswdInput: () => cy.get('#password-confirmation'),
        createAccountButton: () => cy.contains('button', 'Create an Account')
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName)
    }

    typeLastName(lastName) {
        this.elements.firstNameInput().type(lastName)
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    typePasswd(passwd) {
        this.elements.passwdInput().type(passwd)
    }

    typePasswdConfirmation(passwd) {
        this.elements.confirmPasswdInput().type(passwd)
    }

    clickCreateAccountButton() {
        this.elements.createAccountButton().click()
    }

    submitCreateAccount(username, password, email, passwd) {
        this.elements.firstNameInput().type(username)
        this.elements.lastNameInput().type(password)
        this.elements.emailInput().type(email)
        this.elements.passwdInput().type(passwd)
        this.elements.confirmPasswdInput().type(passwd)
        this.elements.createAccountButton().click()
    }
}

module.exports = new signUpPage();