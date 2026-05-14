import { test, expect } from '@playwright/test'

// Open the page
// test('Open page', async({ page }) => {
//     await page.goto('https://playwright.dev/');

//     //Click at get started
    
//     const button = page.locator('.getStarted_Sjon');
    
//     await expect(button).toHaveText(/Get started/);
    
//     await button.click();


// });



// // // Mouse hover the language dropdown
// test('Mouse Hover', async({ page }) => {
//     await page.goto('https://playwright.dev/docs/intro');

//     const navBar = page.getByRole('button', { name: 'Node.js' });
//     await navBar.hover();
// });

// test('get Java page', async({ page }) => {
//     await page.goto('https://playwright.dev/docs/intro');

//     const navBar = page.getByRole('button', { name: 'Node.js' });
//     await navBar.hover();

//     await page.getByText('Java', { exact: true }).click();

//     await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
   
//     await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

//     const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;

//     await expect(page.getByText(javaDescription, {exact:true})).toBeVisible();

// });




test('has page title', async({ page }) =>{
   
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


test('check Java page', async({ page }) =>{
    page.goto('https://playwright.dev');
    await page.getByRole('link', { name: 'Get started' }).click();

    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByText('Java', { exact:true }).click();
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();
    const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
    await expect(page.getByText(javaDescription, {exact:true})).toBeVisible();

    
     
});