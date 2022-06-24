var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-string'));

class AbstractUiAssert {
    // TODO: Add generic assert methods using chai assert library
    equalIgnoreCase(expected, actual) {
        expect(expected).to.equalIgnoreCase(actual);
    }
}

export default AbstractUiAssert