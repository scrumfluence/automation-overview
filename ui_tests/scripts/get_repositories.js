
const ec = protractor.ExpectedConditions;

describe("Get Repositories", function () {

    beforeAll(function () {

        browser.ignoreSynchronization = true;
    });

    it("Navigate To GitHub Page", function () {

        browser.get('https://github.com/chrisdykstra?tab=repositories');
    });

    it("Verify Filter Textbox Is Visible", function () {

        let listContainer = element(by.id('user-repositories-list'));
        browser.wait(ec.visibilityOf(listContainer), 15000);
    });

    it("Get All Repository Names", function () {

        let links = element.all(by.xpath("//*[@id='user-repositories-list']//a"));
        links.each(function (link, index) {

            link.getText().then(function (text) {
                console.log(index, text);
            });
        });
    });

    it("Verify 1st repository name", function () {

        let link = element(by.xpath("(//*[@id='user-repositories-list']//a)[1]"));
        link.getText().then( function (text) {

            expect(text).toBe('Alphabetize');
        } );
    });
});