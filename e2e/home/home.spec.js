const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const factory = require('../factory');

chai.use(chaiAsPromised);
const expect = chai.expect;

let page;

const cookies = [
    { name: '_ga', value: 'GA1.2.1911015505.1490956130' },
    { name: '_gat_pageTrackerPriTr', value: '1'},
    { name: '_gat_pageTrackerSecTr', value : '1' },
    { name: 'csm-hit', value: 's-0ZVDSSCJMP2NKERQCDEK|1490956129520' },
    { name: 'pixelServer', value: '{"isKilled":false,"iframeHost":"d169bbxks24g2u.cloudfront.net","iframePathname":"zappos.html","session":{"tid":"PB3QZAa2piDQGpZy5giA3eIVvbuHZiBH","isVip":null}}' },
    { name: 'session-id', value: '160-5166800-7279030' },
    { name: 'session-id-time', value: '2082787201l' },
    { name: 'tid', value: 'PB3QZAa2piDQGpZy5giA3eIVvbuHZiBH' },
    { name: 'ubid-main', value: '161-0067116-8489038' },
    { name: 'zfc', value: 'Cg4I2NC0s8SA0wIQkqCpBRIMCgRoY3UxEAEYAyABEgsKA3p0bBABGAEgARIMCgR6aGl0EAAYCCABEgsKA3NzYxABGAMgARIMCgRtZGx5EAEYBCABEgwKBHpzYzMQABgCIAE=' },
    { name: 'deviceType', value: 'desktop' },
    { name: 'geo', value: 'BY/04/_/Minsk' }
];

describe('Home Page', () => {
    before(() => {
        browser.executeScript('return navigator.userAgent').then((userAgent) => {
            page = factory('home', userAgent);
        });
    })

    beforeEach(() => {
      browser.ignoreSynchronization = true;
      browser.get('');
      // cookies.forEach(cookie => {
      //   browser.manage().addCookie(cookie);
      // });
    });

    it.skip('should have a title #common', () => {
        expect(browser.getTitle()).to.eventually.contain(page.expectedTitle);
    });

    it.skip('should have corresponding elements #common', () => {
        page.getPageElements().forEach(el => {
            expect(el.isPresent()).to.eventually.be.true;
        });
    })

    it('should have expandable navigation #desktop', () => {
        page.expandableCategories.each((category, index) => {
            page.expandCategory(category).then(() => {
                const shouldHaveSubcategory = index < 5;
                expect(page.getSubcategory(category).isPresent()).to.eventually.equal(shouldHaveSubcategory);
            });
        });
    });

    it.skip('should expand categories #mobile', () => {
        page.moreButtonsForCategories.each((button, index) => {
            const lastCategoryItem = page.categories.get(index).$$('a').last();
            expect(lastCategoryItem.isDisplayed()).to.eventually.be.false;
            expect(button.getText()).to.eventually.match(/more/i);
            button.click().then(() => {
                expect(button.getText()).to.eventually.match(/less/i);
                expect(lastCategoryItem.isDisplayed()).to.eventually.be.true;
            });
        });
    })

});

