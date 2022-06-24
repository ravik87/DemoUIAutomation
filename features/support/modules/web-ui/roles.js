import { Role, Selector } from 'testcafe';

const emailInput = Selector('input').withAttribute('data-testid', 'auth-login-email');
const passwordInput = Selector('input').withAttribute('data-testid', 'auth-login-password');
const loginButton = Selector('button').withAttribute('data-testid', 'login-button');

const admin = Role('https://stable.m2acloud.com/ui/auth', async t => {
    await t
        .typeText(emailInput, 'admin')
        .typeText(passwordInput, 'admin')
        .click(loginButton);
});

const unauthorized = Role('https://stable.m2acloud.com/ui/auth', async t => {
    await t
        .typeText(emailInput, 'invalidUser')
        .typeText(passwordInput, 'invalidPassword')
        .click(loginButton);
});

export { admin, unauthorized };

