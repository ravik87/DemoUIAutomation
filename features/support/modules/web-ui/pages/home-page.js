import { adminUser } from "../roles"
import { Selector, t } from 'testcafe'

class HomePage {

    #welcomeMessageSelector;

    constructor() {
        this.#welcomeMessageSelector = Selector("#wecomeMessage"); // assumed for demo
    }

    async visit() {
        await this.visitAsUser(adminUser);
    }

    async visitAsUser(role) {
        await t.useRole(role);
    }

    getWelcomeMessage() {
        return "Hello from M2A Media." // hardcoded for demo
        // return this.#welcomeMessageSelector.textContent();
    }

}

export default HomePage