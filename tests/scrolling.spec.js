import { test, expect } from '@playwright/test';

test('upload files', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top");

    let dJanagolMovielink = await page.locator("//h3[contains(text(),'128. Hamilton')]");

    await page.locator("//h3[contains(text(),'128. Hamilton')]").scrollIntoViewIfNeeded().click();

    await dJanagolMovielink.click();

    await page.locator("//h3[contains(text(),'128. Hamilton')]").click();
    expect(await page.locator('h1 span'),textContent()).toEqual('Hamilton')

});