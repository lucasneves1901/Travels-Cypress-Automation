Feature: Sign Up
  As a User, I want to create an account

  Background:
    Given the home page is displayed

  @SmokeTest
  Scenario: Sign Up user with valid data
    When he goes to sign up page
    And the user entered valid credential
      | firstname | lastname | email_address         | password |
      | Lucas     | Test     | testemail0@test.com | 9356LOL! |
    Then a success message "Thank you for registering with Fake Online Clothing Store." should be displayed
