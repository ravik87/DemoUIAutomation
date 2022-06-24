@m2a_media @ui @login
Feature: Login to M2A Media UI

    As a media user
    I want to login to M2A Media UI
    So that I can view the media content

    @regression
    Scenario: Valid user login
        Given I visit M2A Media home page
        Then I should see welcome message on home page

    @regression
    Scenario: Invalid user login
        Given I visit M2A Media home page as unauthorized
        Then I should see error message on login page
