
const ec = protractor.ExpectedConditions;
let data = [];

describe('Registration Test', function () {

    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    it('Navigate to wordometers', function () {
        browser.get('https://www.worldometers.info/gdp/gdp-by-country/');
    });

    it('Verify table is visible', function () {

        let table = element(by.id('example2'));
        browser.wait(ec.visibilityOf(table), 15000);
    });

    it('Get all country names', function () {

        let rows = element.all(by.xpath('//*[@id="example2"]//tbody//tr'));
        rows.each((row, rowIndex) => {

            let line = {};
            let columns = row.all(by.tagName('td'));
            columns.each((column, columnIndex) => {

                if (columnIndex != 1 || columnIndex != 3 || columnIndex != 5) { 
                    return;
                }

                column.getText().then((text) => {

                    if (columnIndex == 1) {
                        line.country = text;
                        data.push(line);
                    } else if (columnIndex == 3) {
                        line.gpd = text;
                        data.push(line);
                    } else {
                        line.population = text;
                        data.push(line);
                    }

                    console.log(data[data.length - 1]);
                });
            });
        });
    });

    afterAll(() => {
        console.log(data);
    });
});
