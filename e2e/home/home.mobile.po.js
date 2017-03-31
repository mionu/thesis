const categoriesXpath = '//main[contains(@class,"mdl-layout__content")]//h6/following-sibling::';

module.exports = class HomePageMobile {
    get expectedTitle() {
        return 'zappos.com';
    }

    constructor() {
        this.moreButtonsForCategories = element.all(by.xpath(`${categoriesXpath}button`));
        this.categories = element.all(by.xpath(`${categoriesXpath}div`));
    }

    getPageElements() {
        return [
            this.moreButtonsForCategories,
            this.categories
        ];
    }
}
