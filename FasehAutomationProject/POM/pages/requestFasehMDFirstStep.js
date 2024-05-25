import { expect } from "playwright/test";
class requestFasehMDFirstStep{
    constructor(page){
        this.page = page;
        
        //Locators
        this.requestFirstStepPageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.shippmentPolicyNumberField = page.locator("//input[@id='shipmentPolicyNumber']");
        this.shippmentPolicyDocument = page.locator("(//label[@class='attach-btn'])[1]");
        this.policyDateGregorian = page.locator("//input[@id='policyDateGregorian']");
        this.shipmentCountry = page.locator("//select[@id='shipmentCountryId']");
        this.shipmentPort = page.locator("//select[@id='shipmentPortId']");
        this.customsDeclarationNumber = page.locator("//input[@id='customsDeclarationNumber']");
        this.customsDeclarationDocument = page.locator("(//label[@class='attach-btn'])[2]");
        this.customsDeclarationDateGregorian = page.locator("//input[@id='customsDeclarationGregorian']");
        this.invoiceNumber = page.locator("//input[@id='invoiceNumber']");
        this.invoiceDate = page.locator("//input[@id='invoiceDate']");
        this.invoiceDocument = page.locator("(//label[@class='attach-btn'])[3]");
        this.invoiceSubmitBtn = page.locator("//button[@type='submit']");
        this.firstStepSubmitBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }


    //Methods
    async verifyRequestFirstStepPageOpened(){
        await this.requestFirstStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestFirstStepPageTitle).toBeVisible();
    }
    
    async importerFillInformationFirstStep(shippmentPolicyNumber){
        await this.shippmentPolicyNumberField.type(shippmentPolicyNumber.toString());
        await this.shippmentPolicyDocument.setInputFiles("POM/attachments/test.pdf");
        await this.policyDateGregorian.type('13/04/2023');
        await this.shipmentCountry.selectOption({ index: 0 });
        await this.shipmentPort.selectOption({ index: 1 });
        await this.customsDeclarationNumber.type('123456789');
        await this.customsDeclarationDocument.setInputFiles("POM/attachments/test.pdf");
        await this.customsDeclarationDateGregorian.type('13/04/2023');
        await this.invoiceNumber.type('123456789');
        await this.invoiceDate.type('13/04/2023');
        await this.invoiceDocument.setInputFiles("POM/attachments/test.pdf");
        await this.invoiceSubmitBtn.click();
        await this.firstStepSubmitBtn.click();
    }
}

export default requestFasehMDFirstStep