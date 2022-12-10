import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should logout', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('a');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('a');
		await element(by.id("submitButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='About'])[1]/following::button[1]")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("logOut")).click();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

	
});