import { expect } from "playwright/test";
class docRegisteredMdProductPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestSummaryPage = page.locator("//div[@class='request-summary']");
        this.attachDocBtn = page.locator("//label[@class='attach-btn-view']");
        this.mdRequestSummaryBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        
    }

    //Methods
    async importerAttachDocFileRequiredForRegisteredProduct(){
        await this.attachDocBtn.waitFor({state: 'visible'}, { timeout: 80000 });
        await expect(this.attachDocBtn).toBeVisible();
        await this.attachDocBtn.setInputFiles("POM/attachments/test.pdf");
    }

    async importerNavigateToRequestSummaryPage(){
        await this.mdRequestSummaryBtn.click();
    }
    
}

export default docRegisteredMdProductPage