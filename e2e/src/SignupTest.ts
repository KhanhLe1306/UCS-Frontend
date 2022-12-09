import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should signup', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("signUpButton")).click();
		await browser.get('http://localhost:4200/form');
		await element(by.id("firstName")).click();
		await element(by.id("firstName")).sendKeys('Zach');
		await element(by.id("lastName")).click();
		await element(by.id("lastName")).sendKeys('Test');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('ZachTest');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('ZachTest');
		await element(by.id("signUp")).click();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

});