const pup = require("puppeteer");

let sData = [{}];
let c = 1;
let filteredData

  (async () => {
    try {
        let currentPage = 1;
        const URL = `https://www.electrosiluz.com/pt/?s=mec%2021%20&pagina=${currentPage}`;
        const browser = await pup.launch();
        const page = await browser.newPage();

        await page.goto(URL);
            await page.waitForSelector('#body-wrapper > div.dw-body.on-a-page');
            let pagesToScrape = await page.$eval('#body-wrapper > div.dw-body.on-a-page > div.c > div.pager.butnew > a:nth-child(5)', ele => ele.innerText);
           // let pagesToScrape = 1;
        while(currentPage <= pagesToScrape) {
            c=1;
            await page.goto(`https://www.electrosiluz.com/pt/?s=mec%2021%20&pagina=${currentPage}`);
            await page.waitForSelector('#body-wrapper > div.dw-body.on-a-page');
            const links = await page.$$eval('.box > a', el => el.map(link => link.href));
            let obj = [{}];

            for (const link of links) {
                await page.goto(link);
                await page.waitForSelector('.product-title');
                await page.waitForSelector('#body-wrapper > div.dw-body.on-a-page.lister-of-products.bnralop > div.twcoap > div.c.second > div.p.content > h2 > strong > strong > span');
                await page.waitForSelector('#body-wrapper > div.dw-body.on-a-page.lister-of-products.bnralop > div.twcoap > div:nth-child(1) > div.product-gallery > div > a > img');
                
                const title = await page.$eval('.product-title', element => element.innerText);
                const price = await page.$eval('#body-wrapper > div.dw-body.on-a-page.lister-of-products.bnralop > div.twcoap > div.c.second > div.p.content > h2 > strong > strong > span', element => element.innerText)
                const image = await page.$$eval('#body-wrapper > div.dw-body.on-a-page.lister-of-products.bnralop > div.twcoap > div:nth-child(1) > div.product-gallery > div > a > img', el => el.map(img => img.src))
                
                obj = [...obj, {title, price, image}]
                console.log(obj);
                
                if(c === links.length) {
                    console.log("items coletados", currentPage)
                    currentPage++;
                    sData = obj;
                    break;
                } else {
                    c++;
                }
            }
        }
        await page.waitForTimeout(3000);
        await browser.close();
        filteredData = sData.filter(value => Object.keys(value).length !== 0)
        console.log(filteredData);
    } catch (err) {
        console.log(err)
    }
})()