import { test, expect } from '@playwright/test';


test('has page title', async({ page }) =>{
    // await page.goto("https://albertoverissimo.com/portfolio/");

    // await expect(page).toHaveTitle(/Alberto German Verissimo Portfolio Web Page/);

    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);

    

});


test('get started link', async({page}) => {

    await page.goto("https://playwright.dev/");

    // Click the get started link
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expect the URL to contain intro
    await expect(page).toHaveURL(/.*intro/);
})