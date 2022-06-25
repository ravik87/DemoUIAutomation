import { Role, Selector } from 'testcafe';
import { getBaseUrl, getUiUserVariables } from "../../../../config/envconfig"
import Faker from "../../general/utils/faker"

const emailInput = Selector('input').withAttribute('data-testid', 'auth-login-email');
const passwordInput = Selector('input').withAttribute('data-testid', 'auth-login-password');
const loginButton = Selector('button').withAttribute('data-testid', 'login-button');

const adminUser = Role(getBaseUrl(), async t => {
    // NOTE: Credentials hard-coded for demo; ideally should be read from keyvault on cloud
    await t
        .typeText(emailInput, getUiUserVariables().username)
        .typeText(passwordInput, getUiUserVariables().password)
        .click(loginButton);
});

const unauthorizedUser = Role(getBaseUrl(), async t => {
    await t
        .typeText(emailInput, Faker.randomUsername())
        .typeText(passwordInput, Faker.randomPassword())
        .click(loginButton);
});

export { adminUser, unauthorizedUser };

