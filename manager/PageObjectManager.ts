import { Page } from "@playwright/test";

import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { LeadPage } from "../pages/leadpage";
import { AccountPage } from "../pages/accountpage";


export class PageObjectManager {

    private page: Page;

    private loginPage!: LoginPage;
    private homePage!: HomePage;
    private leadPage!: LeadPage;
    private accountPage!: AccountPage;

    constructor(page: Page) {

        this.page = page;

    }


    getLoginPage(): LoginPage {

        if (!this.loginPage) {

            this.loginPage = new LoginPage(this.page);

        }

        return this.loginPage;

    }


    getHomePage(): HomePage {

        if (!this.homePage) {

            this.homePage = new HomePage(this.page);

        }

        return this.homePage;

    }


    getLeadPage(): LeadPage {

        if (!this.leadPage) {

            this.leadPage = new LeadPage(this.page);

        }

        return this.leadPage;

    }

    getAccountPage(): AccountPage {

        if (!this.accountPage) {

            this.accountPage = new AccountPage(this.page);

        }

        return this.accountPage;

    }

}