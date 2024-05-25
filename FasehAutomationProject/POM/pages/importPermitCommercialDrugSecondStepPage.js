import { expect } from "playwright/test";

class importPermitCommercialDrugSecondStepPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.requestSecondStepPageTitle = page.locator("//h3[@class='wizard-step-title']");
        this.unRegisteredProductsPledge = page.locator("//label[@class='custom-control-label']");
        this.unRegisteredProductBtn = page.locator("(//button[@id='btnAdd'])[1]");
        this.unRegisteredProductTypeSelector = page.locator("//select[@id='basicProductType']");
        this.unRegisteredProductCommercialName = page.locator("//input[@id='commercialName']");
        this.unRegisteredProductDosageFormSelector = page.locator("//select[@id='dosageFormId']");
        this.unRegisteredProductPackagingTypeSelector = page.locator("//select[@id='packagingTypeId']");
        this.unRegisteredProductManufacturingCompany = page.locator("//input[@id='manufacturingCompany']");
        this.unRegisteredProductManufacturingCompanyNationalitySelector = page.locator("//select[@id='nationalityOfManufacturingCompany']");
        this.unRegisteredProductCompanyAgent = page.locator("//input[@id='companyAgent']");
        this.unRegisteredProductSupplyMarketingCompany = page.locator("//input[@id='supplyMarketingCompany']");
        this.unRegisteredProductSupplyMarketingCompanyNationalitySelector = page.locator("//select[@id='nationalityOfSupplyMarketingCompany']");
        this.unRegisteredProductAddingBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.unRegisteredProductPackageSize = page.locator("//input[@id='packagingSize0']");
        this.unRegisteredProductQuantityUnitSelector = page.locator("//select[@id='quantityUnitId0']");
        this.unRegisteredProductPackagesNumber = page.locator("//input[@id='numberOfPackages']");
        this.unRegisteredProductScientificName = page.locator("//div[@class='ng-value-container']");
        this.unRegisteredProductScientificNameFirstChoice = page.locator("(//div[@class='ng-dropdown-panel-items scroll-host']//div)[2]//div[1]");
        this.unRegisteredProductStrength = page.locator("//input[@id='strength0']");
        this.unRegisteredProductStrengthUnitSelector = page.locator("//select[@id='strengthUnitId0']");
        this.unRegisteredProductAddingUnitBtn = page.locator("(//button[@id='btnAdd'])[2]");
        this.unRegisteredProductFirstAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[1]");
        this.unRegisteredProductSecondAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[2]");
        this.unRegisteredProductThirdAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[3]");
        this.unRegisteredProductFourthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[4]");
        this.unRegisteredProductFifthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[5]");
        this.unRegisteredProductSixthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[6]");
        this.unRegisteredProductSeventhAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[7]");
        this.unRegisteredProductSaveChangesBtn = page.locator("//span[@class='product-link_data']");
        this.unRegisteredViewProductDetailsBtn = page.locator("(//span[@class='sidebar-description_data btn btn-primary px-1 w-aligh'])[1]");
        this.unRegisteredProductDetailsWindow = page.locator("//div[@class='modal-body']");
        this.unRegisteredProductDetailsCloseBtn = page.locator("(//div[@class='modal-footer']//button)[1]");
        this.registeredProductTab = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[2]");
        this.registeredProductsPledge = page.locator("//label[@class='custom-control-label']");
        this.registeredProductBtn = page.locator("(//button[@id='btnAdd'])[1]");
        this.registeredProductFirstProduct = page.locator("//div[@class='table-wrapper']//tr[2]//td[6]//input");
        this.registeredProductAddingBtn = page.locator("(//div[@class='modal-footer']//button)[2]");
        this.registeredProductPackagesNumber = page.locator("//input[@id='numberOfPackages']");
        this.registeredProductManufacturingCompany = page.locator("//div[@class='ng-value-container']");
        this.registeredProductManufacturingCompanySecondChoice = page.locator("(//div[@class='ng-dropdown-panel-items scroll-host']//div)[2]//div[2]");
        this.registeredProductFirstAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[1]");
        this.registeredProductSecondAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[2]");
        this.registeredProductThirdAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[3]");
        this.registeredProductFourthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[4]");
        this.registeredProductFifthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[5]");
        this.registeredProductSixthAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[6]");
        this.registeredProductSeventhAttachment = page.locator("(//div[@class='inputfileContainer-upload border-bottom']//label)[7]");
        this.registeredProductSaveChangesBtn = page.locator("//span[@class='product-link_data']");
        this.registeredViewProductDetailsBtn = page.locator("(//span[@class='sidebar-description_data btn btn-primary px-1 w-aligh'])[1]");
        this.registeredProductDetailsWindow = page.locator("//div[@class='modal-body']");
        this.registeredProductDetailsCloseBtn = page.locator("(//div[@class='modal-footer']//button)[1]");
        this.nextStepBtn = page.locator("//div[@class='right-actions']//button[@class='btn btn-primary ml-2 mr-2']");
    }

    //Methods
    async verifyRequestSecondStepPageOpened(){
        await this.requestSecondStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestSecondStepPageTitle).toBeVisible();
    }

    async importerAddUnRegisteredProduct(){
        await this.unRegisteredProductsPledge.click();
        await this.unRegisteredProductBtn.click();
        await this.unRegisteredProductTypeSelector.selectOption('1');
        await this.unRegisteredProductCommercialName.fill('Test');
        await this.unRegisteredProductDosageFormSelector.selectOption({ index: 0 });
        await this.unRegisteredProductPackagingTypeSelector.selectOption({ index: 0 });
        await this.unRegisteredProductManufacturingCompany.fill('Test');
        await this.unRegisteredProductManufacturingCompanyNationalitySelector.selectOption({ index: 0 });
        await this.unRegisteredProductCompanyAgent.fill('Test');
        await this.unRegisteredProductSupplyMarketingCompany.fill('Test');
        await this.unRegisteredProductSupplyMarketingCompanyNationalitySelector.selectOption({ index: 0 });
        await this.unRegisteredProductAddingBtn.click();
        await this.unRegisteredProductPackageSize.fill('99999');
        await this.unRegisteredProductQuantityUnitSelector.selectOption({ index: 0 });
        await this.unRegisteredProductPackagesNumber.fill('99999999');
        await this.unRegisteredProductScientificName.click();
        await this.unRegisteredProductScientificNameFirstChoice.click();
        await this.unRegisteredProductStrength.fill('34');
        await this.unRegisteredProductStrengthUnitSelector.selectOption({ index: 0 });
        await this.unRegisteredProductAddingUnitBtn.click();
        await this.unRegisteredProductFirstAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductSecondAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductThirdAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductFourthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductFifthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductSixthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductSeventhAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.unRegisteredProductSaveChangesBtn.click();
    }

    async importerViewUnRegisteredProductDetails(){
        await this.unRegisteredViewProductDetailsBtn.waitFor({state: 'visible'});
        await expect(this.unRegisteredViewProductDetailsBtn).toBeVisible();
        await this.unRegisteredViewProductDetailsBtn.click();
        await this.unRegisteredProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.unRegisteredProductDetailsWindow).toBeVisible();
        await this.unRegisteredProductDetailsCloseBtn.click();
    }

    async importerAddRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.registeredProductsPledge.click();
        await this.registeredProductBtn.click();
        await this.registeredProductFirstProduct.click();
        await this.registeredProductAddingBtn.click();
        await this.registeredProductPackagesNumber.fill('99999999');
        await this.registeredProductManufacturingCompany.click();
        await this.registeredProductManufacturingCompanySecondChoice.click();
        await this.registeredProductFirstAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductSecondAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductThirdAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductFourthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductFifthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductSixthAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductSeventhAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.registeredProductSaveChangesBtn.click();
    }

    async importerViewRegisteredProductDetails(){
        await this.registeredViewProductDetailsBtn.waitFor({state: 'visible'});
        await expect(this.registeredViewProductDetailsBtn).toBeVisible();
        await this.registeredViewProductDetailsBtn.click();
        await this.registeredProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.registeredProductDetailsWindow).toBeVisible();
        await this.registeredProductDetailsCloseBtn.click();
    }

    async importerGoToNextStepPage(){
        await this.nextStepBtn.click();
    }
}

export default importPermitCommercialDrugSecondStepPage