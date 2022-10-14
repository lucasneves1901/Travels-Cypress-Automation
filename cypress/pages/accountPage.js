class accountPage {
    elements = {
        messageTxt: () => cy.get('.message-success')
    }

    checkMessageText() {
        this.elements.messageTxt().should('exist')
    }
}

module.exports = new accountPage();