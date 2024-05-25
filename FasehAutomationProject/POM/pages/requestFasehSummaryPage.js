import { expect } from "playwright/test";
class requestFasehSummaryPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestSummaryPage = page.locator("//div[@class='request-summary']");
        this.termsAndConditionsCheckBox = page.locator("//label[@class='custom-control-label']");
        this.submitFasehRequestBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        this.fasehRequestNumber = page.locator("//div[@class='popup-content-title']//h4");
        this.fasehRequestFinalizeBtn = page.locator("//button[@class='btn btn-primary px-4']");
    
        //const
        
    }

    //Methods
    async verifyRequestSummaryPageOpened(){
        await this.requestSummaryPage.waitFor({state: 'visible'}, { timeout: 120000 });
        await expect(this.requestSummaryPage).toBeVisible();
    }

    async importerSubmitRequest(){
        await this.termsAndConditionsCheckBox.click();
        await this.submitFasehRequestBtn.click();
        //await this.fasehRequestNumber.innerText();
        var fasehRequestNum = await this.fasehRequestNumber.innerText();
        //fasehRequestNum = fasehRequestNum.split("#")[1];
        fasehRequestNum = fasehRequestNum.replace('طلب فسح رقم #', '').trim();
        console.log(fasehRequestNum);
        await this.fasehRequestFinalizeBtn.click();
        module.exports = fasehRequestNum;
        return fasehRequestNum;
    }
        
}

export default requestFasehSummaryPage