import { type Locator, type Page, expect } from '@playwright/test';

export class TopMenuPage {

    // Variables
    readonly page: Page;
    readonly getStartedButtonMenu: Locator;
    readonly NodeJsButton: Locator;
    readonly JavaButton: Locator;

    readonly nodeDescription: Locator;
    readonly nodeDescriptionText: string = 'Installing Playwright';

    readonly javaDescription: Locator;
    readonly javaDescriptionText: string =
        `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;

    // Constructor
    constructor(page: Page) {

        this.page = page;

        this.getStartedButtonMenu = page.getByRole(
            'link',
            { name: 'Get started' }
        );

        this.NodeJsButton = page.getByRole(
            'button',
            { name: 'Node.js' }
        );

        this.JavaButton = page.getByText(
            'Java',
            { exact: true }
        );

        this.nodeDescription = page.getByText(
            this.nodeDescriptionText,
            { exact: true }
        );

        this.javaDescription = page.getByText(
            this.javaDescriptionText
        );
    }

    // Methods

    async clickGetStartedMenu() {
        await this.getStartedButtonMenu.click();
    }

    async hoverNodeJsButton() {
        await this.NodeJsButton.hover();
    }

    async clickJavaButton() {
        await this.JavaButton.click();
    }

    async checkJavaURL(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async getNodeLabel() {
        await expect(this.nodeDescription)
            .not.toBeVisible();
    }

    async getJavaDescription() {
        await expect(this.javaDescription)
            .toBeVisible();
    }
}



export default TopMenuPage;