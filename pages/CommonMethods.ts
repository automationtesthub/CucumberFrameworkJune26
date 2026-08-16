

export class CommonMethods {

    page: any;
    constructor(page: any) {
        this.page = page;
    }

    async waitForElement(locator: string) {
        await this.page.waitForSelector(locator, { state: 'visible' });
    }

    async setInput(locator: string, value: string) {
        try {
           await this.waitForElement(locator);
            await this.page.fill(locator, value);
        } catch (error) {
            console.error('Error occurred while filling input:', error);
        }
    }

    async clickElement(locator: string) {
        try {
           await this.waitForElement(locator);
            await this.page.click(locator);
        } catch (error) {
            console.error('Error occurred while clicking element:', error);
        }
    }

    async getElementText(locator: string): Promise<string> {
        try {
            return await this.page.textContent(locator) || '';
        } catch (error) {
            console.error('Error occurred while getting element text:', error);
            return '';
        }
    }

    async isElementVisible(locator: string): Promise<boolean> {
        try {
            return await this.page.isVisible(locator);
        } catch (error) {
            console.error('Error occurred while checking element visibility:', error);
            return false;
        }
    }


}
