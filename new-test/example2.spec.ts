import { test, expect, type Page } from '@playwright/test'
import { HomePage } from '../pages/home-page';
import { TopMenuPage } from '../pages/top-menu-page';
//AAA Pattern
// [Arrange]
// [Act]
// [Assert]

//POM
//[Page]
//[Object]
//[Model]



const URL = 'https://playwright.dev/';
let homePage : HomePage;
let topMenuPage : TopMenuPage;


test.beforeEach(async ( { page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    topMenuPage = new TopMenuPage(page);
}); //BeforeEach


async function clickGetStarted(page:Page){
    //await page.getByRole('link', { name: 'Get started' }).click();
    await homePage.clickGetStarted();
}; // clickGetStarted

async function clickGetStartedMenu(page:Page){
    await topMenuPage.clickGetStartedMenu()
}; // clickGetStartedMenu


test.describe('Playwright website', () => {

    test('has page title', async () => {
    //await expect(page).toHaveTitle(/Playwright/);
    await homePage.assertPageTitle();

});//Playwright website


test('get started link', async({page}) => {

    // Click the get started link
    
    await clickGetStarted(page);

    // Expect the URL to contain intro
    await expect(page).toHaveURL(/.*intro/);
}); //get started link



test('check Java page', async({ page }) => {
    
    await clickGetStartedMenu(page);


    //await page.getByRole('button', { name: 'Node.js' }).hover();
    await topMenuPage.hoverNodeJsButton();
    
    //await page.getByText('Java', { exact:true }).click();
    await topMenuPage.clickJavaButton();

    //await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await topMenuPage.checkJavaURL( /https:\/\/playwright.dev\/java\/docs\/intro/);    
    
    //await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();
    await topMenuPage.getNodeLabel();
    
    
     const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
    // await expect(page.getByText(javaDescription, {exact:true})).toBeVisible();
    await topMenuPage.getJavaDescription();
    //await topMenuPage.getJavaDescription(javaDescription);
     
});//check Java page
});

