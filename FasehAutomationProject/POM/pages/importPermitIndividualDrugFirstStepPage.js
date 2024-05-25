import { expect } from "playwright/test";

class importPermitIndividualDrugSecondStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        //this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.shipmentPolicyNumberField = page.locator("//input[@id='shipmentPolicyNumber']");
        this.carrierCompanyField = page.locator("//input[@id='carrierCompany']");
        this.shipmentCountrySelector = page.locator("//select[@id='shipmentCountryId']");
        this.addingProductsBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async validateImportPermitRequestFirstStepPageOpened(){
        await this.shipmentPolicyNumberField.waitFor({state: 'visible'});
        await expect(this.shipmentPolicyNumberField).toBeVisible();
    }

    async clickAddProductsBtn(){
        await this.addingProductsBtn.click();
    }

    async fillFirstStepDetails(){
        await this.validateImportPermitRequestFirstStepPageOpened();
        await this.shipmentPolicyNumberField.fill('123456789');
        await this.carrierCompanyField.fill('Test Carrier Company');
        await this.shipmentCountrySelector.selectOption('83e54276-26be-43a7-9896-6ddc48e44489');
        await this.clickAddProductsBtn();
    }
}

export default importPermitIndividualDrugSecondStepPage