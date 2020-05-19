
const ec = protractor.ExpectedConditions;

describe('Registration Test', function () {

    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    it('Navigate to registration page', function () {
        browser.get('http://newtours.demoaut.com/mercuryregister.php?osCsid=dcec49bdc32d7761cac51c04eaa6319c');
    });

    it('Verify submit button is visible', function () {

        let registerButton = element(by.name('register'));
        browser.wait(ec.visibilityOf(registerButton), 15000);
    });

    it('Wait', function () {
        browser.sleep(3000);
    });

    it('Type in username', function () {

        let textbox = element(by.name('email'));
        textbox.sendKeys('yoshi001');
    });

    it('Type in password', function () {

        let textbox = element(by.name('password'));
        textbox.sendKeys('abc123');
    });

    it('Type in confirm password', function () {

        let textbox = element(by.name('confirmPassword'));
        textbox.sendKeys('abc123');
    });

    it('Click submit button', function () {

        let registerButton = element(by.name('register'));
        registerButton.click();
    });

    it('Verify registration confirmation text is visible', function () {

        let text = element(by.xpath('//*[contains(text(), "Your user name is")]'));
        browser.wait(ec.visibilityOf(text), 15000);
    });

    it('Wait', function () {
        browser.sleep(3000);
    });
});
