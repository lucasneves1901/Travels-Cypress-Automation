class homePage {
    elements = {
        createAccountButton: () => cy.contains('a', 'Create an Account')
    }

    clickCreateAccountButton() {
        this.elements.createAccountButton().click()
    }
}

module.exports = new homePage();