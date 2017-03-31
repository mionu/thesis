module.exports = class HomePageDesktop {
    get expectedTitle() {
        return 'Zappos.com';
    }

    constructor() {
        this.expandableCategories = element.all(by.xpath('//nav[contains(@class,"nav")]//li[contains(@class,"nav-")]'));
        // this.brandIndex = element(by.id('azBrandIndex'));
    }

    getPageElements() {
        return [
            this.expandableCategories,
            // this.brandIndex
        ];
    }

    expandCategory(category) {
        return category.click();
    }

    getSubcategory(category) {
        return category.$('.category');
    }
}
