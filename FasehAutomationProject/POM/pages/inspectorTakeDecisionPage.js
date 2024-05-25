import { expect } from "playwright/test";


class inspectorTakeDecisionPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestNumber = page.locator("//div[@class='request-summary text-end mb-4']");
        this.employeeDecisionsDdl = page.locator("//select[@formcontrolname='inspectionDecision']");
        this.saveProductBtn = page.locator("//button[@class='btn btn-primary mt-3']");
        this.exceptionalProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[1]");
        this.registeredProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[2]");
        this.licenseProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[3]");
        this.importPermitProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[4]");
        this.exceptionalDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[1]");
        this.registeredDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[2]");
        this.importPermitDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[3]");
        this.numberOfSamplesField = page.locator("(//input[@id='sampleNumber'])");
        this.referenceNumberField = page.locator("(//input[@id='referenceNumber'])");
        this.uploadFilesBtn = page.locator("(//label[@class='product-link_data cursor-pointer'])");
        this.saveProductBtn = page.locator("(//button[@class='btn btn-primary mt-3'])");
        this.sendDecisionBtn = page.locator("//button[@class='btn btn-primary ms-4']");
    }

    //Methods
    async validateRequestNumberAfterOpeningRequest(){
        await this.requestNumber.waitFor({state: 'visible'});
        await expect(this.requestNumber).toBeVisible();
    }

    async takeDecisionOnExceptionalProductMD(){
        await this.exceptionalProdTabMD.click();
    }

    async takeDecisionOnRegisteredProductMD(){
        await this.registeredProdTabMD.click();
    }

    async takeDecisionOnLicenseProductMD(){
        await this.licenseProdTabMD.click();
    }

    async takeDecisionOnImportPermitProductMD(){
        await this.importPermitProdTabMD.click();
    }

    async takeDecisionOnExceptionalDrug(){
        await this.exceptionalDrugTabCommercialDrug.click();
    }

    async takeDecisionOnRegisteredDrug(){
        await this.registeredDrugTabCommercialDrug.click();
    }

    async takeDecisionOnImportPermitDrug(){
        await this.importPermitDrugTabCommercialDrug.click();
    }

    async fillPullSampleDetails(){
        await this.numberOfSamplesField.fill('2');
        await this.referenceNumberField.fill('3');
        await this.uploadFilesBtn.setInputFiles("POM/attachments/test.pdf");
        await this.saveProductBtn.click();
    }

    async sendDecision(){
        await this.sendDecisionBtn.click();
    }

}

export default inspectorTakeDecisionPage