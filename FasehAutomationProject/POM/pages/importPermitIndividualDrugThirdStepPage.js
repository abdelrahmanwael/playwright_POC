import { expect } from "playwright/test";

class importPermitIndividualDrugThirdStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.firstAttachment = page.locator("(//label[@class='attach-btn-view'])[1]");
        this.secondAttachment = page.locator("(//label[@class='attach-btn-view'])[2]");
        this.thirdAttachment = page.locator("(//label[@class='attach-btn-view'])[3]");
        this.additionalDetailsNotes = page.locator("//textarea[@formcontrolname='additionalDetailsNotes']");
        this.goToSummaryPageBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async validateImportPermitRequestSecondStepPageOpened(){
        await this.pageTitle.waitFor({state: 'visible'});
        await expect(this.pageTitle).toBeVisible();
    }

    async clickGoToSummaryPageBtn(){
        await this.goToSummaryPageBtn.click();
    }

    async fillThirdStepDetails(){
        // await this.validateImportPermitRequestSecondStepPageOpened();
        // await this.firstAttachment.setInputFiles("POM/attachments/test.pdf");
        // await this.secondAttachment.setInputFiles("POM/attachments/test.pdf");
        // await this.thirdAttachment.setInputFiles("POM/attachments/test.pdf");
        // await this.additionalDetailsNotes.fill('Test Notes');
        await this.clickGoToSummaryPageBtn();
    }
}

export default importPermitIndividualDrugThirdStepPage