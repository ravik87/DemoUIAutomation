import M2aMediaUI from '../support/modules/web-ui/m2a-media-ui'
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I visit M2A Media home page', async function () {
    await M2aMediaUI.home().visit();
});

Then('I should see welcome message on home page', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});