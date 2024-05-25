import { expect } from "playwright/test";

class importPermitCommercialDrugFourthStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.firstAttachment = page.locator("(//label[@class='attach-btn-view'])[1]");
        this.secondAttachment = page.locator("(//label[@class='attach-btn-view'])[2]");
        this.thirdAttachment = page.locator("(//label[@class='attach-btn-view'])[3]");
        this.additionalNotesField = page.locator("//textarea[@formcontrolname='additionalInfoNotes']");
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

    async fillFourthStepDetails(){
        await this.validateImportPermitRequestSecondStepPageOpened();
        await this.firstAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.secondAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.thirdAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.additionalNotesField.fill('Test Notes');
        await this.clickGoToNextStepBtn();
    }
}

export default importPermitCommercialDrugFourthStepPage