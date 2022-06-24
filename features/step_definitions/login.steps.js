import M2aMediaUI from '../support/modules/web-ui/m2a-media-ui'
import M2aMediaUiAssert from '../support/assertion/web-ui/m2a-media/m2a-media-ui-assert'
import { unauthorizedUser } from "../support/modules/web-ui/roles"

const { Given, When, Then } = require('@cucumber/cucumber');

Given('I visit M2A Media home page', async function () {
    await M2aMediaUI.home().visit();
});

Then('I should see welcome message on home page', async function () {
    M2aMediaUiAssert.homePage().hasWelcomeMessage();
});

Given('I visit M2A Media home page as unauthorized', async function () {
    await M2aMediaUI.home().visitAsUser(unauthorizedUser);
});

Then('I should see error message on login page', async function () {
    M2aMediaUiAssert.loginPage().hasInvalidLoginErrMsg();
});

