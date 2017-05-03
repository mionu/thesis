const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const factory = require('../factory');
const { ELEMENTS_TIMEOUT } = require('../constants');

chai.use(chaiAsPromised);
const expect = chai.expect;

const EC = protractor.ExpectedConditions;

let homepage;

describe('Home Page', () => {
    before(() => {
        browser.executeScript('return navigator.userAgent').then((userAgent) => {
            homepage = factory('home', userAgent);
        });
    })

    beforeEach(() => {
      browser.ignoreSynchronization = true;
      browser.get('');
    });

    it('should have a title #common', () => {
        expect(browser.getTitle()).to.eventually.contain(homepage.expectedTitle);
    });

    it('should have corresponding elements #common', () => {
        homepage.getPageElements().forEach(el => {
            expect(el.isPresent()).to.eventually.be.true;
        });
    })

    it.only('should be able to open and close subcategory #desktop', () => {
        homepage.expandableCategories.each((category, index) => {
            if (homepage.isCategoryExpandable(index)) {
                const subcategory = homepage.getSubcategory(category);
                homepage.expandCategory(category).then(() => {
                expect(subcategory.isDisplayed()).to.eventually.be.true;
                homepage.getSubcategoryCloseIcon(category).click().then(() => {
                        browser.wait(EC.invisibilityOf(subcategory), ELEMENTS_TIMEOUT);
                        expect(subcategory.isDisplayed()).to.eventually.be.false;
                    });
                });
            }
        });
    });

    it('should expand categories #mobile', () => {
        homepage.moreButtonsForCategories.each((button, index) => {
            const lastCategoryItem = homepage.categories.get(index).$$('a').last();
            expect(lastCategoryItem.isDisplayed()).to.eventually.be.false;
            expect(button.getText()).to.eventually.match(/more/i);
            button.click().then(() => {
                expect(button.getText()).to.eventually.match(/less/i);
                expect(lastCategoryItem.isDisplayed()).to.eventually.be.true;
            });
        });
    })

});

