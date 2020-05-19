
const ec = protractor.ExpectedConditions;

describe( "Get Repositories", function () {

    beforeAll( function () {

        browser.ignoreSynchronization = true;
    } );

    it( "Navigate To GitHub Page", function () {

        browser.get('https://github.com/myleafhopper?tab=repositories');
    } );

    it( "Verify Filter Textbox Is Visible", function () {

        let button = element(by.id('your-repos-filter'));
        browser.wait(ec.visibilityOf(button), 15000);
    } );

} );