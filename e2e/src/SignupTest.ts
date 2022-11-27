import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should sign up someone', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("signUpButton")).click();
		await browser.get('http://localhost:4200/form');
		await element(by.id("firstName")).click();
		await element(by.id("firstName")).sendKeys('test');
		await element(by.id("lastName")).click();
		await element(by.id("lastName")).sendKeys('test');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('testUser');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('testPassword');
		await element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='testUser'])[1]/following::div[3]")).click();
		await element(by.id("signUp")).click();
		await browser.get('http://localhost:4200/login');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('testUser');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('testPassword');
		await element(by.id("submitButton")).click();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});

});