import { expect } from "playwright/test";

class landingPageMD{
    constructor(page){
        this.page = page;
        //Locators 
        this.fasehRequestsSideMenu = page.locator("//li[@class='sideNav-item has-children']");
        this.MdFasehRequestsSubSideMenu = page.locator("(//ul[@class='sideNav-items']//a[@class='sideNav-link'])[2]");
        this.MdFasehRequestsPageTitle = page.locator("//span[@class='table_description']");

    }

    //Methods
    async openFasehRequestsPage(){
        await this.fasehRequestsSideMenu.waitFor({state: 'visible'});
        await expect(this.fasehRequestsSideMenu).toBeVisible();
        await this.fasehRequestsSideMenu.click();
        await this.MdFasehRequestsSubSideMenu.click();
        await this.MdFasehRequestsPageTitle.waitFor({state: 'visible'});
        await expect(this.MdFasehRequestsPageTitle).toBeVisible();
    }
}

export default landingPageMD