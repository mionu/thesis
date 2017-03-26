const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const factory = require('../factory');

chai.use(chaiAsPromised);
const expect = chai.expect;

const config = browser.params;

describe('Home #common', () => {
    beforeEach(() => {
      browser.ignoreSynchronization = true;
      browser.get('');
    });

    it('should have a title', () => {
      expect(browser.getTitle()).to.eventually.match(/zappos/i);
      console.log(config);
    });
});

