var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function() {
    beforeEach(function() {
      return browser.ignoreSynchronization = true;
    });

    it('should have a title', function() {
      browser.get('http://www.zappos.com/');

      expect(browser.getTitle()).to.eventually.contain('Zappos');
    });
});
