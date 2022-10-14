import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/signUpPage");
const accountPage = require("../../pages/accountPage");

When(/^the user entered valid credential$/, (table) => {
    table.hashes().forEach((row) => {
        signUpPage.submitCreateAccount(row.firstname, row.lastname, row.email_address, row.password, row.password)
    });
});

Then(/^a success message "([^"]*)" should be displayed$/, (successMessage) => {
    accountPage.elements.messageTxt().should("contain.text", successMessage);
});

