import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should search for a class', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('testUser');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('testPassword');
		await element(by.id("submitButton")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("searchButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("dashSearch")).click();
		await element(by.id("dashSearch")).sendKeys('252');
		await element(by.id("searchButton")).click();
		await element(by.id("goHome")).click();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

});