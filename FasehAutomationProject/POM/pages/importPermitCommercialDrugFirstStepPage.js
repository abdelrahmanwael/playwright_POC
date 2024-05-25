import { expect } from "playwright/test";

class importPermitCommercialDrugFirstStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.beneficiaryPartySelector = page.locator("//select[@id='beneficiaryParty']");
        this.mainProductTypeSelector = page.locator("//select[@id='mainProductType']");
        this.purposeOfUseSelector = page.locator("//select[@id='purposeOfUse']");
        this.tenderInformationAndDirectPurchaseSelector = page.locator("//select[@id='tenderInformationAndDirectPurchase']");
        this.addingProductsBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async validateImportPermitRequestFirstStepPageOpened(){
        await this.pageTitle.waitFor({state: 'visible'});
        await expect(this.pageTitle).toBeVisible();
    }

    async clickAddProductsBtn(){
        await this.addingProductsBtn.click();
    }

    async fillFirstStepDetails(){
        await this.beneficiaryPartySelector.selectOption({ value: '1' });
        await this.mainProductTypeSelector.selectOption({ value: '1' });
        await this.purposeOfUseSelector.selectOption({ value: '3' });
        await this.tenderInformationAndDirectPurchaseSelector.selectOption({ value: '1' });
        await this.clickAddProductsBtn();
    }
}

export default importPermitCommercialDrugFirstStepPage