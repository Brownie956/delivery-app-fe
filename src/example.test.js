const puppeteer = require("puppeteer");
const assert = require("assert");

let browser;
let page;

describe("example test", () => {
    before(async () => {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
    });

    after(async () => {
        await browser.close();
    });

    it("does some stuff", async () => {
        await page.goto("localhost:3000", {waitUntil: "networkidle0"});
        let incrementa = await page.$('#increment-1');
        let incrementb = await page.$('button[id="increment-1"');
        let selector = 'button[id="increment-1"]';

        await page.click('#increment-1');

        // await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        await page.evaluate((increment) => increment.click(), incrementa);
        await page.evaluate((increment) => increment.click(), incrementb);
        // page.click(increment);

        // await page.waitForFunction('document.getElementById("1-count").value == "1"');

        let count = await page.$('#count-1');
        let result = await page.evaluate((count) => count.innerText, count);

        assert.strictEqual(result, "2");
        // expect(result).to.equal("1");
    });

    it("does some other stuff", async () => {
        await page.goto("localhost:3000", {waitUntil: "networkidle0"});
        await page.click('#increment-4');

        let count = await page.$('#count-4');
        let result = await page.evaluate((count) => count.innerText, count);

        assert.strictEqual(result, "1");
    })
});
