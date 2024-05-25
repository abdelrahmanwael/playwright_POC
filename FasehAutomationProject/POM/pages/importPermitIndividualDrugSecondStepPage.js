import { expect } from "playwright/test";

class importPermitIndividualDrugFirstStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.pageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.pledgeCheckBox = page.locator("//div[@class='custom-control custom-checkbox']//label");
        this.addProductsBtn = page.locator("//button[@id='btnAdd']");
        this.englishNameField = page.locator("//input[@id='englishName']");
        this.drugDosageFormSelector = page.locator("//select[@id='drugDosageFormId']");
        this.drugUnitSelector = page.locator("//select[@id='unitId']");
        this.numberOfPackagesField = page.locator("//input[@id='numberOfPackages']");
        this.addProductPopUpBtn = page.locator("//div[@class='modal-footer']//button[@class='btn btn-primary px-5']");
        this.additionalInformationBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async validateImportPermitRequestSecondStepPageOpened(){
        await this.pageTitle.waitFor({state: 'visible'});
        await expect(this.pageTitle).toBeVisible();
    }

    async clickadditionalInformationBtn(){
        await this.additionalInformationBtn.click();
    }

    async fillSecondStepDetails(){
        await this.validateImportPermitRequestSecondStepPageOpened();
        await this.pledgeCheckBox.click();
        await this.addProductsBtn.click();
        await this.englishNameField.fill('Test Drug');
        await this.drugDosageFormSelector.selectOption({ value: 'f3154e64-ad0e-406b-81a5-003201260d7b' });
        await this.drugUnitSelector.selectOption({ value:'2168c495-0cd5-4a44-9ce3-073013cae85a' });
        await this.numberOfPackagesField.fill('999');
        await this.addProductPopUpBtn.click();
        await this.clickadditionalInformationBtn();
    }
}

export default importPermitIndividualDrugFirstStepPage