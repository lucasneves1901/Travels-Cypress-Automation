import {
    Given,
    When,
} from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/homePage");

Given(/^the home page is displayed$/, () => {
    cy.visit("/");
    cy.url().should('eql', 'https://magento.softwaretestingboard.com/')
});


When(/^he goes to sign up page$/, () => {
    homePage.clickCreateAccountButton()
    cy.url().should('include', '/account/create')
});

