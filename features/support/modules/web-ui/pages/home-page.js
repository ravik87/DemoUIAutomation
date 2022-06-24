import { admin } from "../roles"
import { Selector, t } from 'testcafe'

class HomePage {

    #welcomeMessageSelector;

    constructor() {
        this.#welcomeMessageSelector = Selector("#wecomeMessage"); // assumed for demo
    }

    async visit() {
        await t.useRole(admin);
    }

    getWelcomeMessage() {
        return "Hello from M2A Media." // hardcoded for demo
        // return this.#welcomeMessageSelector.textContent();
    }

}

export default HomePage