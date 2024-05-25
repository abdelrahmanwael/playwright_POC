import { expect } from "playwright/test";

class landingPageDrug{
    constructor(page){
        this.page = page;
        //Locators 
        this.fasehRequestsSideMenu = page.locator("(//li[@class='sideNav-item has-children'])[1]");
        this.drugFasehRequestsSubSideMenu = page.locator("(//ul[@class='sideNav-items']//a[@class='sideNav-link'])[2]");
        this.drugFasehRequestsPageTitle = page.locator("//span[@class='table_description']");
        this.drugImportPermitSideMenu = page.locator("(//ul[@class='collapsible collapsible-accordion sideNav-items'])//li[3]");
        this.drugImportPermitSubSideMenu = page.locator("(//ul[@class='collapsible collapsible-accordion sideNav-items']//li[3]//a)[2]");

    }

    //Methods
    async openDrugFasehRequestsPage(){
        await this.fasehRequestsSideMenu.waitFor({state: 'visible'});
        await expect(this.fasehRequestsSideMenu).toBeVisible();
        await this.fasehRequestsSideMenu.click();
        await this.drugFasehRequestsSubSideMenu.click();
        await this.drugFasehRequestsPageTitle.waitFor({state: 'visible'});
        await expect(this.drugFasehRequestsPageTitle).toBeVisible();
    }

    async openImportPermitRequestsPage(){
        await this.drugImportPermitSideMenu.waitFor({state: 'visible'});
        await expect(this.drugImportPermitSideMenu).toBeVisible();
        await this.drugImportPermitSideMenu.click();
        await this.drugImportPermitSubSideMenu.click();
        await this.drugFasehRequestsPageTitle.waitFor({state: 'visible'});
        await expect(this.drugFasehRequestsPageTitle).toBeVisible();
    }
}

export default landingPageDrug