import { expect } from "playwright/test";

class importPermitRequestsDrugPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.newRequestBtn = page.locator("//button[@id='btnAdd']");
        this.ghadAccountOptionsMenu = page.locator("(//button[@id='dropdownBasic'])[1]");
        this.addGahdAccountBtn = page.locator("//div[@class='dropdown']//button");
        this.requestNumberSearchField = page.locator("//input[@id='requestNumber']");
        this.searchBtn = page.locator("//button[@class='btn btn-primary mr-2']");
        this.requestActionsBtn = page.locator("//button[@id='dropdownBasic']");
        this.modifyRequestDetailsBtn = page.locator("(//button[@class='dropdown-item'])[1]");

    }

    //Methods
    async validateImportPermitRequestsPageOpened(){
        await this.newRequestBtn.waitFor({state: 'visible'});
        await expect(this.newRequestBtn).toBeVisible();
    }

    async clickOnNewRequestButton(){
        await this.newRequestBtn.waitFor({state: 'visible'});
        await expect(this.newRequestBtn).toBeVisible();
        await this.newRequestBtn.click();
    }

    async searchByRequestNumber(){
        var fasehRequestNum = require('./requestFasehSummaryPage.js');
        await this.requestNumberSearchField.type(fasehRequestNum);
        //await this.requestNumberSearchField.type('MD-20231224-9');
        await this.searchBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async selectModifyRequestOption(){
        await this.requestActionsBtn.click();
        await this.modifyRequestDetailsBtn.click();
    }


}

export default importPermitRequestsDrugPage