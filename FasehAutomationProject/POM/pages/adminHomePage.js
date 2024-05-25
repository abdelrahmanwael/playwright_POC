import { expect } from "playwright/test";


class fasehLoginPage{
    constructor(page){
        this.page = page;
        //Locators
        this.logOutIcon = page.locator("//li[@class='nav-item active']");
        this.logOutSubIcon = page.locator("//div[@class='nav-topup']//span");    
        this.logOutConfirmationBtn = page.locator("//div[@class='modal-footer']//button[@class='btn btn-primary enh-aligh alignment-buttons']");
        this.inspectorRequestsMenu = page.locator("(//button[@class='btn sideNav-link'])[2]");
        this.requestListOption = page.locator("(//a[@class='sideNav-link'])[2]");
        this.importPermitRequestsOption = page.locator("(//a[@class='sideNav-link'])[1]");
    }

    //Methods
    async adminLogout(){
        await this.logOutIcon.waitFor({state: 'visible'});
        await this.logOutIcon.click();
        await this.logOutSubIcon.click();
        await this.logOutConfirmationBtn.waitFor({state: 'visible'});
        await this.logOutConfirmationBtn.click();
    }

    async adminOpenRequestList(){
        await this.inspectorRequestsMenu.waitFor({state: 'visible'});
        await expect(this.inspectorRequestsMenu).toBeVisible(); 
        await this.inspectorRequestsMenu.click();
        await this.requestListOption.waitFor({state: 'visible'});
        await expect(this.requestListOption).toBeVisible();
        await this.requestListOption.click();
    }

    async adminOpenImportPermitRequestList(){
        await this.inspectorRequestsMenu.waitFor({state: 'visible'});
        await expect(this.inspectorRequestsMenu).toBeVisible(); 
        await this.inspectorRequestsMenu.click();
        await this.importPermitRequestsOption.waitFor({state: 'visible'});
        await expect(this.importPermitRequestsOption).toBeVisible();
        await this.importPermitRequestsOption.click();
    }
    
}

export default fasehLoginPage