import { expect } from "playwright/test";

class importPermitCommercialDrugThirdStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.tenderNameField = page.locator("(//div[@class='request-info']//input)[1]");
        this.tenderNumberField = page.locator("(//div[@class='request-info']//input)[2]");
        this.tenderOwnerField = page.locator("(//div[@class='request-info']//input)[3]");
        this.importingDateField = page.locator("(//div[@class='request-info']//input)[4]");
        this.importingExpiryDateField = page.locator("(//div[@class='request-info']//input)[5]");
        this.nextStepBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async validateImportPermitRequestSecondStepPageOpened(){
        await this.pageTitle.waitFor({state: 'visible'});
        await expect(this.pageTitle).toBeVisible();
    }

    async clickGoToNextStepBtn(){
        await this.nextStepBtn.click();
    }

    async fillThirdStepDetails(){
        await this.validateImportPermitRequestSecondStepPageOpened();
        await this.tenderNameField.fill('Test');
        await this.tenderNumberField.fill('12');
        await this.tenderOwnerField.fill('Test');
        await this.importingDateField.fill('30/01/2022');
        await this.importingExpiryDateField.fill('30/04/2024');
        await this.clickGoToNextStepBtn();
    }
}

export default importPermitCommercialDrugThirdStepPage