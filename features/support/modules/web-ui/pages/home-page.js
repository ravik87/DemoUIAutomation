import { admin } from "../roles"
import { Selector, t } from 'testcafe'

class HomePage {

    #exampleSelector;

    constructor() {
        this.#exampleSelector = Selector("#example");
    }

    async visit() {
        await t.useRole(admin);
    }

}

export default HomePage