import { Role, Selector } from 'testcafe';

const emailInput = Selector('input').withAttribute('data-testid', 'auth-login-email');
const passwordInput = Selector('input').withAttribute('data-testid', 'auth-login-password');
const loginButton = Selector('button').withAttribute('data-testid', 'login-button');

const adminUser = Role('https://stable.m2acloud.com/ui/auth', async t => {
    // NOTE: Credentials hard-coded for demo; ideally should be read from keyvault on cloud
    await t
        .typeText(emailInput, 'admin')
        .typeText(passwordInput, 'admin')
        .click(loginButton);
});

const unauthorizedUser = Role('https://stable.m2acloud.com/ui/auth', async t => {
    await t
        .typeText(emailInput, 'invalidUser')
        .typeText(passwordInput, 'invalidPassword')
        .click(loginButton);
});

export { adminUser, unauthorizedUser };

