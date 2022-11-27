import { browser, by, element, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('katalon', () => {

	beforeAll(async () => { });
	beforeEach(async () => { });

	it('should check all go home buttons', async () => {
		await browser.get('http://localhost:4200/login');
		await element(by.id("userName")).click();
		await element(by.id("userName")).sendKeys('testUser');
		await element(by.id("password")).click();
		await element(by.id("password")).sendKeys('testPassword');
		await element(by.id("submitButton")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("searchButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("goHome")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("download")).click();
		await browser.get('http://localhost:4200/success');
		await element(by.id("goHome")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("upload")).click();
		await browser.get('http://localhost:4200/fileUpload');
		await element(by.id("home")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("searchButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("addClass")).click();
		await browser.get('http://localhost:4200/addClass');
		await element(by.id("home")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("searchButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("removeClass")).click();
		await browser.get('http://localhost:4200/removeClass');
		await element(by.id("home")).click();
		await browser.get('http://localhost:4200/dashboard');
		await element(by.id("searchButton")).click();
		await browser.get('http://localhost:4200/results');
		await element(by.id("addInstructor")).click();
		await browser.get('http://localhost:4200/addInstructor');
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