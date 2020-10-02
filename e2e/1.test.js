const puppeteer = require("puppeteer");

const APP = "https://jogtracker.herokuapp.com/api/swagger";


let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});
afterAll(() => {
    browser.close();
});


describe("Testing the frontend", () => {
    test("assert that main title contains the correct text", async () => {
        await page.goto(`${APP}`);
        const mainTitleText = await page.$eval(".info_title", el => el.textContent);
        expect(mainTitleText).toEqual("Jog Tracker App API");
    });

});


describe("Testing the frontend", () => {

    it('should click "/v1/auth/uuidLogin" link and input not correct value', async () => {
        await page.goto(`${APP}`);
        await expect(page).toClick('a', { text: '/v1/auth/uuidLogin' });
        const formSelector = "input[name='uuid']";
        const submitSelector = '#auth_postV1AuthUuidlogin_content > form > div.sandbox_header > input';
        await expect(page).toFill(formSelector, 'heo');
        await page.click(submitSelector);
        await expect(page).toMatch('error_message');
    });


    it('should click "/v1/auth/uuidLogin" link and input correct value', async () => {
        await page.goto(`${APP}`);
        await expect(page).toClick('a', { text: '/v1/auth/uuidLogin' });
        const formSelector = "input[name='uuid']";
        const submitSelector = '#auth_postV1AuthUuidlogin_content > form > div.sandbox_header > input';
        await expect(page).toFill(formSelector, 'hello');
        await page.click(submitSelector);
        await expect(page).toMatch('access_token');
    });

    it('get jogs', async () => {
        await page.goto(`${APP}`);
        await expect(page).toClick('a', { text: '/v1/auth/uuidLogin' });
        const formSelector = "input[name='uuid']";
        const submitSelector = '#auth_postV1AuthUuidlogin_content > form > div.sandbox_header > input';
        await expect(page).toFill(formSelector, 'hello');
        await page.click(submitSelector);

        await expect(page).toMatch('access_token');
        
        const token = page.$eval("#auth_postV1AuthUuidlogin_content > div.response > div.block.response_body.hljs.json > pre > code > span:nth-child(3)", el => el.textContent);

        const apiKeySelector = 'input[name="apiKey"]';
        await expect(page).toFill(apiKeySelector, token);
        const btnExplore = '#explore'
        await expect(page).toClick(btnExplore);

        await expect(page).toClick('a', { text: '/v1/data/sync' });
        const btnGetJogs = '#data_getV1DataSync_content > form > div.sandbox_header > input';
        await page.click(btnGetJogs);
        const resp = '#data_getV1DataSync_content > div.response > div.block.response_code > pre';
        await expect(resp).toMatch('200');
    });

});