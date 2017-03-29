module.exports = class HomePageMobile {
    get expectedTitle() {
        return 'zappos.com';
    }

    constructor() {
        this.moreButton = element(by.xpath('//main[@id="mainContent"]/div/div/div[1]/div[1]//button'));
    }

    getPageElements() {
        return [
            this.expandableCategories
        ];
    }
}
