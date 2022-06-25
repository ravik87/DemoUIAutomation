import { faker } from '@faker-js/faker';

// Faker class to provision random data
class Faker {
    static randomUsername() {
        return faker.internet.userName();
    }

    static randomPassword() {
        return faker.internet.password();
    }
}

export default Faker