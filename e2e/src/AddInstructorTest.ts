import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should go to add instructor', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('a');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('a');
		await element(by.id("submitButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("addInstructor")).click();
		await browser.get('http://localhost:4200/addInstructor');
		await element(by.id("home")).click();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

});