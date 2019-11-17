const puppeteer = require('puppeteer');
const fs = require('fs');
const ethers = require('ethers');


const determinismFilePath = `iexec_out/determinism.iexec`;
const callbackFilePath = `iexec_out/callback.iexec`;
const errorFilePath = `iexec_out/error.iexec`;

async function main() {
  try {
  const args = [

      '--no-sandbox', '--disable-setuid-sandbox',
          '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"'
      ];
  const browser = await puppeteer.launch({ headless: true, timeout: 0, args});
const page = await browser.newPage();

      // Navigating to example.com
      await page.goto( "http://example.com", {"timeout":30000,"waitUntil":"domcontentloaded"} );
const iexecCallback = await page.evaluate(() => document.querySelector("body > div > h1").innerHTML);

fs.writeFile(callbackFilePath, iexecCallback , (err) => {});
}
catch(error) {
  fs.writeFile(
    errorFilePath,
    error.toString(),
    (err) => {}
  );

  console.log(error)
}
}
main();
