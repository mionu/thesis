module.exports = class HomePageDesktop {
    get expectedTitle() {
        return 'Zappos.com';
    }

    constructor() {
        this.expandableCategories = element.all(by.xpath('//nav[contains(@class,"nav")]//li[contains(@class,"nav-")]'));
    }

    getPageElements() {
        return [
            this.expandableCategories,
        ];
    }

    isCategoryExpandable(index) {
        return index < 5;
    }

    expandCategory(category) {
        return category.click();
    }

    getSubcategory(category) {
        return category.$('.category');
    }

    getSubcategoryCloseIcon(category) {
        return category.$('a[data-close]');
    }
}
