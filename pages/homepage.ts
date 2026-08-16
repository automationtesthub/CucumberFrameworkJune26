import { CommonMethods } from '../pages/CommonMethods';

export class HomePage extends CommonMethods {

      page: any;
    constructor(page: any) {
        super(page);
        this.page = page;
    }

     loc_lnk_logout = '//a[text()="Logout"]';
     loc_lnk_new_lead = '//a[text()="New Lead"]';
     loc_lnk_new_home = '//a[text()="Home"]';

     async clickLogout() {
        await this.clickElement(this.loc_lnk_logout);
    }

    async clickNewLead() {
        await this.clickElement(this.loc_lnk_new_lead);
    }

    async verifyHomeLink() {
        await this.isElementVisible(this.loc_lnk_new_home);
    }

      async verifyLogoutLink() {
        await this.isElementVisible(this.loc_lnk_logout);
    }



}