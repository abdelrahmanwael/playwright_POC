import { expect } from "playwright/test";

class requestFasehCommercialDrugSecondStep{
    constructor(page){
        this.page = page;
        //Locators 
        this.requestSecondStepPageTitle = page.locator("//div[@class='fasehWizard-header-step']");
        this.exceptionalProductsPledge = page.locator("//label[@class='custom-control-label']");
        this.addExceptionalProductBtn = page.locator("//button[@id='btnAdd']");
        this.exceptionalProductTypeDDL = page.locator("//select[@id='exceptionalDrugProductTypeId']");
        this.exceptionalManufacturyName = page.locator("//input[@id='manufacturyName']");
        this.exceptionalManufacturingCountry = page.locator("//select[@id='manufacturingCountryId']");
        this.exceptionalEmptyPackageProductName = page.locator("//input[@id='emptyPackageProductName']");
        this.exceptionalEmptyPackageProductDescription = page.locator("//input[@id='emptyPackageProductDescription']");
        this.exceptionalEmptyPackagesImportpurpose = page.locator("//input[@id='emptyPackagesImportpurpose']");
        this.exceptionalEmptyPackagesAttachment = page.locator("//label[@class='attach-btn']");
        this.exceptionalApiManufacturyAddress = page.locator("//input[@id='manufacturyAddress']");
        this.exceptionalApiScientificName = page.locator("//input[@id='primaryChemicalScientificName']");
        this.exceptionalPlantScientificName = page.locator("//input[@id='plantScientificName']");
        this.exceptionalPlantUsePurpose = page.locator("//input[@id='plantUsePurpose']");
        this.exceptionalPlantFirstPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[1]");
        this.exceptionalPlantSecondPdf = page.locator("//label[@class='attach-btn mt-2']");
        this.exceptionalSamplesFirstPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[1]");
        this.exceptionalSamplesSecondPdf = page.locator("//label[@class='attach-btn mt-2']");
        this.exceptionalSamplesThirdPdf = page.locator("//label[@class='attach-btn mt-3']");
        this.exceptionalSamplesFourthPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[2]");
        this.exceptionalEducationalFirstPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[1]");
        this.exceptionalEducationalSecondPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[2]");
        this.exceptionalEducationalThirdPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[3]");
        this.exceptionalChemicalFirstPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[1]");
        this.exceptionalChemicalSecondPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[2]");
        this.exceptionalChemicalThirdPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[3]");
        this.exceptionalChemicalFourthPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[4]");
        this.exceptionalChemicalFifthPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[5]");
        this.exceptionalChemicalSixthPdf = page.locator("(//div[@class='modal-body']//div//label[@class='attach-btn'])[6]");
        this.exceptionalAddBtn = page.locator("//div[@class='modal-footer']//button[@class='btn btn-primary px-5']");
        this.exceptionalProdHScodeDDL = page.locator("//ng-select[@name='hscodeidRef']");
        this.exceptionalProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.exceptionalProdInvoiceID = page.locator("//select[@id='invoiceId']");
        this.exceptionalProdUnit = page.locator("//select[@id='unitId']");
        this.exceptionalProdBatchNumber = page.locator("//input[@id='batchNumber']");
        this.exceptionalProdQuantity = page.locator("//input[@id='quantity']");
        this.exceptionalProdProductionDate= page.locator("//input[@id='productionDate']");
        this.exceptionalProdExpiryDate = page.locator("//input[@id='expiryDate']");
        this.exceptionalQuantityAddingBtn= page.locator("//button[@class='btn btn-primary px-4']");
        this.exceptionalFinalizeAddingBtn= page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.exceptionalViewFirstProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[1]");
        this.exceptionalViewSecondProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[3]");
        this.exceptionalViewThirdProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[5]");
        this.exceptionalViewFourthProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[7]");
        this.exceptionalViewFifthProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[9]");
        this.exceptionalViewSixthProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[11]");
        this.exceptionalProductDetailsWindowFirstTabContent = page.locator("//div[@class='modal-body']");
        this.exceptionalProductDetailsWindowCloseBtn = page.locator("//div[@class='modal-footer']//button");
        this.registeredProductTab = page.locator("(//li[@class='nav-item'])[3]");
        this.addRegisteredProductBtn = page.locator("//button[@id='btnAdd']");
        this.selectMainProductType = page.locator("//select[@id='mainProductType']");
        this.registeredProductSearchBtn = page.locator("//button[@class='btn btn-primary']");
        this.registeredFirstProductAddBtn = page.locator("(//span[@class='add cursor-pointer'])[1]");
        this.registeredProductConfirmationAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.registeredProdFinishedManufactureDdl = page.locator("//ng-select[@name='finishedManufacture']//div[@class='ng-select-container']");
        this.registeredProdFinishedManufactureFirstChoice = page.locator("//div[@class='ng-dropdown-panel-items scroll-host']");

        this.registeredViewFirstProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[1]");
        this.registeredViewSecondProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[3]");
        this.registeredViewThirdProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[5]");
        this.registeredProductDetailsWindowFirstTabContent = page.locator("//div[@class='modal-body']");
        this.registeredProductDetailsWindowCloseBtn = page.locator("//div[@class='modal-footer']//button");
        this.importPermitProductTab = page.locator("(//li[@class='nav-item'])[4]");
        this.importPermitFirstCertificate = page.locator("(//span[@class='add cursor-pointer'])[1]");
        this.importPermitFirstProduct = page.locator("(//div[@class='modal-content']//span[@class='add cursor-pointer'])[1]");
        this.importPermitProdAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.importPermitProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.importPermitProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.importPermitProdInvoiceID = page.locator("//select[@id='invoiceId']");
        this.importPermitProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.importPermitProdQuantity = page.locator("//input[@id='quantity']");
        this.importPermitProductionDate = page.locator("//input[@id='productionDate']");
        this.importPermitExpiryDate = page.locator("//input[@id='expiryDate']");
        this.addBatchAndQuantityBtn = page.locator("//button[@class='btn btn-primary px-4']");
        this.mandatoryAttachment = page.locator("(//label[@class='attach-btn'])[2]");
        this.importPermitProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.importPermitViewProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[1]");
        this.importPermitProductDetailsWindowFirstTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowSecondTab = page.locator("//ul[@class='nav-tabs nav']//li[2]");
        this.importPermitProductDetailsWindowSecondTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowThirdTab = page.locator("//ul[@class='nav-tabs nav']//li[3]");
        this.importPermitProductDetailsWindowThirdTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowFourthTab = page.locator("//ul[@class='nav-tabs nav']//li[4]");
        this.importPermitProductDetailsWindowFourthTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowCloseBtn = page.locator("//div[@class='modal-footer']//button");
        this.RequestSummaryBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");


    }

    //Methods
    async verifyRequestSecondStepPageOpened(){
        await this.requestSecondStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestSecondStepPageTitle).toBeVisible();
        await this.exceptionalProductsPledge.click();
    }

    async importerFillExceptionalProductDetails(){
        await this.exceptionalProdHScodeDDL.click();
        await this.exceptionalProdHScodeOption1.click();
        await this.exceptionalProdInvoiceID.selectOption({ index: 0 });
        await this.exceptionalProdUnit.selectOption({ index: 0 });
        await this.exceptionalProdBatchNumber.fill('12345');
        await this.exceptionalProdQuantity.fill('5');
        await this.exceptionalProdProductionDate.fill('01/05/2022');
        await this.exceptionalProdExpiryDate.fill('01/05/2024');
        await this.exceptionalQuantityAddingBtn.click();
        await this.exceptionalFinalizeAddingBtn.click();
    }

    async importerFillRegisteredProductDetails(){
        await this.exceptionalProdHScodeDDL.click();
        await this.exceptionalProdHScodeOption1.click();
        await this.exceptionalProdInvoiceID.selectOption({ index: 0 });
        await this.registeredProdFinishedManufactureDdl.click();
        await this.registeredProdFinishedManufactureFirstChoice.click();
        await this.exceptionalProdBatchNumber.fill('12345');
        await this.exceptionalProdQuantity.fill('5');
        await this.exceptionalProdProductionDate.fill('01/05/2022');
        await this.exceptionalProdExpiryDate.fill('01/05/2024');
        await this.exceptionalQuantityAddingBtn.click();
        await this.mandatoryAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalFinalizeAddingBtn.click();
    }

    async importerAddExceptionalChemicalProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '6' });
        await this.exceptionalChemicalFirstPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalChemicalSecondPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalChemicalThirdPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalChemicalFourthPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalChemicalFifthPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalChemicalSixthPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddExceptionalEducationalProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '5' });
        await this.exceptionalEducationalFirstPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalEducationalSecondPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalEducationalThirdPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddExceptionalSampleMaterialsProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '4' });
        await this.exceptionalSamplesFirstPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalSamplesSecondPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalSamplesThirdPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalSamplesFourthPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddExceptionalPlantProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '3' });
        await this.exceptionalManufacturyName.fill('test');
        await this.exceptionalManufacturingCountry.selectOption({ value: '623af769-a352-49f1-960e-8e32c7fd2820' });
        await this.exceptionalPlantScientificName.fill('test');
        await this.exceptionalPlantUsePurpose.fill('test');
        await this.exceptionalPlantFirstPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalPlantSecondPdf.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddExceptionalApiProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '2' });
        await this.exceptionalManufacturyName.fill('test');
        await this.exceptionalManufacturingCountry.selectOption({ value: '623af769-a352-49f1-960e-8e32c7fd2820' });
        await this.exceptionalApiManufacturyAddress.fill('test');
        await this.exceptionalApiScientificName.fill('test');
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddExceptionalEmptyContainersProduct(){
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.waitFor({state: 'visible'});
        await expect(this.exceptionalProductTypeDDL).toBeVisible();
        await this.exceptionalProductTypeDDL.selectOption({ value: '1' });
        await this.exceptionalManufacturyName.fill('test');
        await this.exceptionalManufacturingCountry.selectOption({ value: '623af769-a352-49f1-960e-8e32c7fd2820' });
        await this.exceptionalEmptyPackageProductName.fill('test');
        await this.exceptionalEmptyPackageProductDescription.fill('test');
        await this.exceptionalEmptyPackagesImportpurpose.fill('test');
        await this.exceptionalEmptyPackagesAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.exceptionalAddBtn.click();
        await this.importerFillExceptionalProductDetails();
    }

    async importerAddAllKindsOfExceptionalProducts(){
        await this.importerAddExceptionalEmptyContainersProduct();
        await this.importerAddExceptionalApiProduct();
        await this.importerAddExceptionalPlantProduct();
        await this.importerAddExceptionalSampleMaterialsProduct();
        await this.importerAddExceptionalEducationalProduct();
        await this.importerAddExceptionalChemicalProduct();
    }

    async importerViewExceptionalEmptyContainersProductDetails(){
        await this.exceptionalViewFirstProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewExceptionalApiProductDetails(){
        await this.exceptionalViewSecondProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewExceptionalPlantProductDetails(){
        await this.exceptionalViewThirdProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewExceptionalSampleMaterialsProductDetails(){
        await this.exceptionalViewFourthProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewExceptionalEducationalProductDetails(){
        await this.exceptionalViewFifthProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewExceptionalChemicalProductDetails(){
        await this.exceptionalViewSixthProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindowFirstTabContent).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerViewProductDetailsForAllExceptionalProducts(){
        await this.importerViewExceptionalEmptyContainersProductDetails();
        await this.importerViewExceptionalApiProductDetails();
        await this.importerViewExceptionalPlantProductDetails();
        await this.importerViewExceptionalSampleMaterialsProductDetails();
        await this.importerViewExceptionalEducationalProductDetails();
        await this.importerViewExceptionalChemicalProductDetails();
    }

    async importerAddHumanRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.addRegisteredProductBtn.click();
        await this.selectMainProductType.selectOption({ value: '1' });
        await this.registeredProductSearchBtn.click();
        await this.registeredFirstProductAddBtn.click();
        await this.registeredProductConfirmationAddBtn.click(); 
        await this.importerFillRegisteredProductDetails(); 
    }

    async importerAddHerbalRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.addRegisteredProductBtn.click();
        await this.selectMainProductType.selectOption({ value: '2' });
        await this.registeredProductSearchBtn.click();
        await this.registeredFirstProductAddBtn.click();
        await this.registeredProductConfirmationAddBtn.click(); 
        await this.importerFillRegisteredProductDetails();  
    }

    async importerAddVeterinaryRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.addRegisteredProductBtn.click();
        await this.selectMainProductType.selectOption({ value: '3' });
        await this.registeredProductSearchBtn.click();
        await this.registeredFirstProductAddBtn.click();
        await this.registeredProductConfirmationAddBtn.click(); 
        await this.importerFillRegisteredProductDetails();  
    }

    async importerViewHumanRegisteredProductDetails(){
        await this.registeredViewFirstProductDetailsBtn.click();
        await this.registeredProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.registeredProductDetailsWindowFirstTabContent).toBeVisible();
        await this.registeredProductDetailsWindowCloseBtn.click();
    }

    async importerViewHerbalRegisteredProductDetails(){
        await this.registeredViewSecondProductDetailsBtn.click();
        await this.registeredProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.registeredProductDetailsWindowFirstTabContent).toBeVisible();
        await this.registeredProductDetailsWindowCloseBtn.click();
    }

    async importerViewVeterinaryRegisteredProductDetails(){
        await this.registeredViewThirdProductDetailsBtn.click();
        await this.registeredProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.registeredProductDetailsWindowFirstTabContent).toBeVisible();
        await this.registeredProductDetailsWindowCloseBtn.click();
    }

    async importerViewProductDetailsForAllRegisteredProducts(){
        await this.importerViewHumanRegisteredProductDetails();
        await this.importerViewHerbalRegisteredProductDetails();
        await this.importerViewVeterinaryRegisteredProductDetails();
    }

    async importerAddAllKindsOfRegisteredProducts(){
        await this.importerAddHumanRegisteredProduct();
        await this.importerAddHerbalRegisteredProduct();
        await this.importerAddVeterinaryRegisteredProduct();
        
    }

    async importerAddImportPermitProduct(){
        await this.importPermitProductTab.click();
        await this.importPermitFirstCertificate.click();
        await this.importPermitFirstProduct.click();
        await this.importPermitProdAddBtn.click();
        await this.importPermitProdHScodeDDL.click();
        await this.importPermitProdHScodeOption1.click();
        await this.importPermitProdInvoiceID.selectOption({ index: 0 });
        await this.importPermitProdBatchNumber.fill('12');
        await this.importPermitProdQuantity.fill('2');
        await this.importPermitProductionDate.fill('01/01/2022');
        await this.importPermitExpiryDate.fill('01/01/2023');
        await this.addBatchAndQuantityBtn.click();
        await this.mandatoryAttachment.setInputFiles("POM/attachments/test.pdf");
        await this.importPermitProdSaveChangesBtn.click();
    }

    async importerViewImportPermitProductDetails(){
        await this.importPermitViewProductDetailsBtn.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitViewProductDetailsBtn).toBeVisible();
        await this.importPermitViewProductDetailsBtn.click();
        await this.importPermitProductDetailsWindowFirstTabContent.waitFor({state: 'visible'});
        await expect(this.importPermitProductDetailsWindowFirstTabContent).toBeVisible();
        await this.importPermitProductDetailsWindowSecondTab.click();
        await expect(this.importPermitProductDetailsWindowSecondTabContent).toBeVisible();
        await this.importPermitProductDetailsWindowThirdTab.click();
        await expect(this.importPermitProductDetailsWindowThirdTabContent).toBeVisible();
        await this.importPermitProductDetailsWindowCloseBtn.click();
    }

    async importerNavigateToRequestSummaryPage(){
        await this.RequestSummaryBtn.click();
    }

}

export default requestFasehCommercialDrugSecondStep