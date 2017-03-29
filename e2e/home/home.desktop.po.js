module.exports = class HomePageDesktop {
    get expectedTitle() {
        return 'Zappos.com';
    }

    constructor() {
        this.expandableCategories = element.all(by.css('#nav > li'));
        this.brandIndex = element(by.id('azBrandIndex'));
    }

    getPageElements() {
        return [
            this.expandableCategories,
            this.brandIndex
        ];
    }

    expandCategory(category) {
        return browser.actions().mouseMove(category).perform();
    }

    getSubcategory(category) {
        return category.$('.sub-nav');
    }
}
