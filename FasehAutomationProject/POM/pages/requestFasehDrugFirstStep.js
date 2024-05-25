import { expect } from "playwright/test";
class requestFasehDrugFirstStep{
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
        this.indivdualOtherDocuments = page.locator("(//label[@class='attach-btn'])[3]");
        this.invoiceNumber = page.locator("//input[@id='invoiceNumber']");
        this.invoiceDate = page.locator("//input[@id='invoiceDate']");
        this.invoiceDocument = page.locator("//div[@class='inputfileContainer-upload border-bottom justify-content-between uploadfilesize']//label");
        this.invoiceSubmitBtn = page.locator("//button[@type='submit']");
        this.firstStepSubmitBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        
        this.beneficiaryEntity = page.locator("//select[@id='beneficiaryEntityId']");
        this.beneficiaryEntityName = page.locator("//input[@id='beneficiaryEntityName']");
        this.beneficiaryEntityAttachment = page.locator("//label[@for='beneficiaryEntityAttachment']");
        this.warehouseLicenseAttachment = page.locator("//label[@for='warehouseLicenseAttachment']");
        this.warehouseLicenseDateGregorian = page.locator("//input[@id='warehouseLicenseDateGregorian']");
        this.warehouseLicenseNumber = page.locator("//input[@id='warehouseLicenseNumber']");
    }


    //Methods
    async verifyRequestFirstStepPageOpened(){
        await this.requestFirstStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestFirstStepPageTitle).toBeVisible();
    }
    
    async indivdualDrugImporterFillInformationFirstStep(shippmentPolicyNumber){
        await this.shippmentPolicyNumberField.type(shippmentPolicyNumber.toString());
        await this.shippmentPolicyDocument.setInputFiles("POM/attachments/test.pdf");
        await this.policyDateGregorian.type('13/04/2023');
        await this.shipmentCountry.selectOption({ index: 0 });
        await this.shipmentPort.selectOption({ index: 1 });
        await this.customsDeclarationNumber.type('123456789');
        await this.customsDeclarationDocument.setInputFiles("POM/attachments/test.pdf");
        await this.customsDeclarationDateGregorian.type('13/04/2023');
        await this.indivdualOtherDocuments.setInputFiles("POM/attachments/test.pdf");
        await this.invoiceNumber.type('123456789');
        await this.invoiceDate.type('13/04/2023');
        await this.invoiceDocument.setInputFiles("POM/attachments/test.pdf");
        await this.invoiceSubmitBtn.click();
        await this.firstStepSubmitBtn.click();
    }

    async commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber){
        await this.shippmentPolicyNumberField.type(shippmentPolicyNumber.toString());
        await this.shippmentPolicyDocument.setInputFiles("POM/attachments/test.pdf");
        await this.policyDateGregorian.type('13/04/2023');
        await this.shipmentCountry.selectOption({ index: 0 });
        await this.shipmentPort.selectOption({ index: 1 });
        await this.customsDeclarationNumber.type('123456789');
        await this.customsDeclarationDocument.setInputFiles("POM/attachments/test.pdf");
        await this.customsDeclarationDateGregorian.type('13/04/2023');
        await this.beneficiaryEntity.selectOption({ index: 0 });
        await this.beneficiaryEntityName.fill("Test");
        await this.beneficiaryEntityAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.warehouseLicenseAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.warehouseLicenseDateGregorian.fill('13/04/2023');
        await this.warehouseLicenseNumber.fill('12');
        await this.indivdualOtherDocuments.setInputFiles("POM/attachments/test.pdf");
        await this.invoiceNumber.type('123456789');
        await this.invoiceDate.type('13/04/2023');
        await this.invoiceDocument.setInputFiles("POM/attachments/test.pdf");
        await this.invoiceSubmitBtn.click();
        await this.firstStepSubmitBtn.click();
    }
}

export default requestFasehDrugFirstStep