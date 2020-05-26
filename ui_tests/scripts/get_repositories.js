const request = require("request");

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

    // it("Get Stock Data", function (done) {

    //     const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
    //     request(url, function (error, response, body) {

    //         const responseBody = JSON.parse(body);
    //         expect(responseBody['Meta Data']['2. Symbol']).toBe('IBM');

    //         // const responseBody = pm.response.json();
    //         // pm.expect(responseBody['Meta Data']['2. Symbol']).to.eql('IBM');

    //         done();
    //     });
    // });
});