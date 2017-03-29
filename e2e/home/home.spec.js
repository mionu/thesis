const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const factory = require('../factory');

chai.use(chaiAsPromised);
const expect = chai.expect;

let page;

describe('Home Page', () => {
    before(() => {
        browser.executeScript('return navigator.userAgent').then((userAgent) => {
            page = factory('home', userAgent);
        });
    })

    beforeEach(() => {
      browser.ignoreSynchronization = true;
      browser.get('');
    });

    it.skip('should have a title #common', () => {
        expect(browser.getTitle()).to.eventually.contain(page.expectedTitle);
    });

    it('should have expandable navigation #desktop', () => {
        page.expandableCategories.each((category, index) => {
            page.expandCategory(category).then(() => {
                const shouldHaveSubcategory = index < 5 || index === 9;
                expect(page.getSubcategory(category).isPresent()).to.eventually.equal(shouldHaveSubcategory);
            });
        });
    });

    it('should expand categories #mobile', () => {
        page.moreButton.click();
        browser.sleep(5000);
    })

});

