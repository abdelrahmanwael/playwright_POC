import { expect } from "playwright/test";
class importPermitDrugSummaryPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestSummaryPage = page.locator("//div[@class='request-summary']");
        this.termsAndConditionsCheckBox = page.locator("//label[@class='custom-control-label']");
        this.submitImportPermitRequestBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        this.importPermitRequestNumber = page.locator("//div[@class='popup-content-title']//h4");
        this.RequestFinalizeBtn = page.locator("//button[@class='btn btn-primary px-4']");
    
        //const
        
    }

    //Methods
    async verifyRequestSummaryPageOpened(){
        await this.requestSummaryPage.waitFor({state: 'visible'}, { timeout: 120000 });
        await expect(this.requestSummaryPage).toBeVisible();
    }

    async importerSubmitRequest(){
        await this.verifyRequestSummaryPageOpened();
        await this.termsAndConditionsCheckBox.click();
        await this.submitImportPermitRequestBtn.click();
        var importPermitRequestNum = await this.importPermitRequestNumber.innerText();
        importPermitRequestNum = importPermitRequestNum.replace('طلب اذن استيراد رقم# ', '').trim();
        console.log(importPermitRequestNum);
        await this.RequestFinalizeBtn.click();
        module.exports = importPermitRequestNum;
        return importPermitRequestNum;
    }
        
}

export default importPermitDrugSummaryPage