import { expect } from "playwright/test";

class requestFasehMDSecondStep{
    constructor(page){
        this.page = page;
        //Locators 
        this.requestSecondStepPageTitle = page.locator("//div[@class='fasehWizard-header-step']");
        this.exceptionalProductsPledge = page.locator("//label[@class='custom-control-label']");
        this.addExceptionalProductBtn = page.locator("//button[@id='btnAdd']");
        this.exceptionalProductTypeDDL = page.locator("//select[@id='exceptionalProductType']");
        this.exceptionalProductName = page.locator("//input[@id='productName']");
        this.exceptionalProductCommercialName = page.locator("//input[@id='commercialName']");
        this.exceptionalproductDescription = page.locator("//input[@id='productDescription']");
        this.exceptionalproductIntendedUse = page.locator("//input[@id='productIntendedUse']");
        this.exceptionaldeviceIdNumber = page.locator("//input[@id='deviceIdNumber']");
        this.exceptionalfactoryName = page.locator("//input[@id='factoryName']");
        this.exceptionalProdCountryId = page.locator("//select[@id='countryId']");
        this.exceptionalProdCity = page.locator("//input[@id='city']");
        this.exceptionalProdAddress = page.locator("//input[@id='address']");
        this.exceptionalProdPhone = page.locator("//input[@id='phone']");
        this.exceptionalProdEmail = page.locator("//input[@id='email']");
        this.exceptionalProdPostalCode = page.locator("//input[@id='postalCode']");
        this.exceptionalProdAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.exceptionalProductionDateCalendar = page.locator("//input[@formcontrolname='productionDateCalendar']");
        this.exceptionalExpireDateCalendar = page.locator("//input[@formcontrolname='expireDateCalendar']");
        this.exceptionalProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.exceptionalProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.exceptionalProdInvoiceID = page.locator("//select[@formcontrolname='requestInvoiceId']");
        this.exceptionalProdCategory = page.locator("//select[@formcontrolname='mdProductCategory']");
        this.exceptionalProdLotNumber = page.locator("//input[@formcontrolname='lotNumber']");
        this.exceptionalProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.exceptionalProdPieceNumber = page.locator("//input[@formcontrolname='pieceNumber']");
        this.exceptionalProdSerialNumber = page.locator("//input[@formcontrolname='serialNumber']");
        this.exceptionalProdRequiredSpecificTemperature = page.locator("//input[@formcontrolname='isRequierdSpecificTemperature']");
        this.exceptionalProdTemperature = page.locator("//input[@formcontrolname='serialNumberForDevice']");
        this.exceptionalProdSingleItemQuantity = page.locator("//input[@formcontrolname='singleItemQuantity']");
        this.exceptionalProdSingleItemUnit = page.locator("//select[@formcontrolname='singleItemUnitId']");
        this.exceptionalProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.exceptionalViewProductDetailsBtn = page.locator("(//span[@class='product-link_data'])[1]");
        this.exceptionalProductDetailsWindow = page.locator("//div[@class='modal-body']");
        this.exceptionalProductDetailsWindowCloseBtn = page.locator("//button[@class='btn btn-cancel px-5']");
        this.registeredProductTab = page.locator("//a[@id='ngb-nav-1']");
        this.addRegisteredProductBtn = page.locator("//button[@id='btnAdd']");
        this.addRegisteredProductsWindowTitle = page.locator("//h4[@id='modal-basic-title']");
        this.registeredProductAddBtn = page.locator("(//span[@class='add cursor-pointer'])[1]");
        this.registeredProductAddConfirmationBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.registeredProductionDateCalendar = page.locator("//input[@formcontrolname='productionDateCalendar']");
        this.registeredExpireDateCalendar = page.locator("//input[@formcontrolname='expireDateCalendar']");
        this.registeredProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.registeredProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.registeredProdInvoiceID = page.locator("//select[@formcontrolname='requestInvoiceId']");
        this.registeredProdCategory = page.locator("//select[@formcontrolname='mdProductCategory']");
        this.registeredProdLotNumber = page.locator("//input[@formcontrolname='lotNumber']");
        this.registeredProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.registeredProdPieceNumber = page.locator("//input[@formcontrolname='pieceNumber']");
        this.registeredProdSerialNumber = page.locator("//input[@formcontrolname='serialNumber']");
        this.registeredProdRequiredSpecificTemperature = page.locator("//input[@formcontrolname='isRequierdSpecificTemperature']");
        this.registeredProdTemperature = page.locator("//input[@formcontrolname='serialNumberForDevice']");
        this.registeredProdSingleItemQuantity = page.locator("//input[@formcontrolname='singleItemQuantity']");
        this.registeredProdSingleItemUnit = page.locator("//select[@formcontrolname='singleItemUnitId']");
        this.registeredProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.registeredViewProductDetailsBtn = page.locator("(//span[@class='product-link_data'])[1]");
        this.registeredProductDetailsWindow = page.locator("//div[@class='modal-body']");
        this.registeredProductDetailsWindowCloseBtn = page.locator("//button[@class='btn btn-cancel px-5']");
        this.licenseProductTab = page.locator("//a[@id='ngb-nav-2']");
        this.licenseProductsPledge = page.locator("//label[@class='custom-control-label']");
        this.addLicenseProductBtn = page.locator("//button[@id='btnAdd']");
        this.licenseProductTypeDDL = page.locator("//select[@id='mdRequiredLicenseProductType']");
        this.licenseProductName = page.locator("//input[@id='productName']");
        this.licenseProductCommercialName = page.locator("//input[@id='commercialName']");
        this.licenseproductDescription = page.locator("//input[@id='productDescription']");
        this.licenseproductIntendedUse = page.locator("//input[@id='productIntendedUse']");
        this.licensedeviceIdNumber = page.locator("//input[@id='deviceIdNumber']");
        this.licensefactoryName = page.locator("//input[@id='factoryName']");
        this.licenseProdCountryId = page.locator("//select[@id='countryId']");
        this.licenseProdCity = page.locator("//input[@id='city']");
        this.licenseProdAddress = page.locator("//input[@id='address']");
        this.licenseProdPhone = page.locator("//input[@id='phone']");
        this.licenseProdEmail = page.locator("//input[@id='email']");
        this.licenseProdPostalCode = page.locator("//input[@id='postalCode']");
        this.licenseProdAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.licenseProductionDateCalendar = page.locator("//input[@formcontrolname='productionDateCalendar']");
        this.licenseExpireDateCalendar = page.locator("//input[@formcontrolname='expireDateCalendar']");
        this.licenseProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.licenseProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.licenseProdInvoiceID = page.locator("//select[@formcontrolname='requestInvoiceId']");
        this.licenseProdCategory = page.locator("//select[@formcontrolname='mdProductCategory']");
        this.licenseProdLotNumber = page.locator("//input[@formcontrolname='lotNumber']");
        this.licenseProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.licenseProdPieceNumber = page.locator("//input[@formcontrolname='pieceNumber']");
        this.licenseProdSerialNumber = page.locator("//input[@formcontrolname='serialNumber']");
        this.licenseProdRequiredSpecificTemperature = page.locator("//input[@formcontrolname='isRequierdSpecificTemperature']");
        this.licenseProdTemperature = page.locator("//input[@formcontrolname='serialNumberForDevice']");
        this.licenseProdSingleItemQuantity = page.locator("//input[@formcontrolname='singleItemQuantity']");
        this.licenseProdSingleItemUnit = page.locator("//select[@formcontrolname='singleItemUnitId']");
        this.licenseProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.licenseViewProductDetailsBtn = page.locator("(//span[@class='product-link_data'])[1]");
        this.licenseProductDetailsWindow = page.locator("//div[@class='modal-body']");
        this.licenseProductDetailsWindowCloseBtn = page.locator("//button[@class='btn btn-cancel px-5']");
        this.importPermitProductTab = page.locator("//a[@id='ngb-nav-3']");
        this.importPermitFirstCertificate = page.locator("(//span[@class='add cursor-pointer'])[1]");
        this.importPermitFirstProduct = page.locator("(//div[@class='modal-content']//span[@class='add cursor-pointer'])[1]");
        this.importPermitProdAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.importPermitProductionDateCalendar = page.locator("//input[@formcontrolname='productionDateCalendar']");
        this.importPermitExpireDateCalendar = page.locator("//input[@formcontrolname='expireDateCalendar']");
        this.importPermitProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.importPermitProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.importPermitProdInvoiceID = page.locator("//select[@formcontrolname='requestInvoiceId']");
        this.importPermitProdCategory = page.locator("//select[@formcontrolname='mdProductCategory']");
        this.importPermitProdLotNumber = page.locator("//input[@formcontrolname='lotNumber']");
        this.importPermitProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.importPermitProdPieceNumber = page.locator("//input[@formcontrolname='pieceNumber']");
        this.importPermitProdSerialNumber = page.locator("//input[@formcontrolname='serialNumber']");
        this.importPermitProdRequiredSpecificTemperature = page.locator("//input[@formcontrolname='isRequierdSpecificTemperature']");
        this.importPermitProdTemperature = page.locator("//input[@formcontrolname='serialNumberForDevice']");
        this.importPermitProdSingleItemQuantity = page.locator("//input[@formcontrolname='singleItemQuantity']");
        this.importPermitProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.importPermitViewProductDetailsBtn = page.locator("(//span[@class='product-link_data'])[1]");
        this.importPermitProductDetailsWindow = page.locator("//div[@class='modal-content']");
        this.importPermitProductDetailsWindowCloseBtn = page.locator("//button[@class='btn btn-cancel px-5']");
        this.mdDocBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        
        this.mdRequestSummaryBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");
        


    }

    //Methods
    async verifyRequestSecondStepPageOpened(){
        await this.requestSecondStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestSecondStepPageTitle).toBeVisible();
    }

    async importerAddExceptionalProduct(){
        await this.exceptionalProductsPledge.click();
        await this.addExceptionalProductBtn.click();
        await this.exceptionalProductTypeDDL.selectOption('1');
        await this.exceptionalProductName.fill('Test');
        await this.exceptionalProductCommercialName.fill('Test');
        await this.exceptionalproductDescription.fill('Test');
        await this.exceptionalproductIntendedUse.fill('Test');
        await this.exceptionaldeviceIdNumber.fill('123456789');
        await this.exceptionalfactoryName.fill('Test');
        await this.exceptionalProdCountryId.selectOption('623af769-a352-49f1-960e-8e32c7fd2820');
        await this.exceptionalProdCity.fill('Test');
        await this.exceptionalProdAddress.fill('Test');
        await this.exceptionalProdPhone.fill('0099653456789');
        await this.exceptionalProdEmail.fill('test@test.com');
        await this.exceptionalProdPostalCode.fill('12345');
        await this.exceptionalProdAddBtn.click();
        await this.exceptionalProductionDateCalendar.fill('13/04/2023');
        await this.exceptionalExpireDateCalendar.fill('20/05/2024');
        await this.exceptionalProdHScodeDDL.click();
        await this.exceptionalProdHScodeOption1.click();
        await this.exceptionalProdInvoiceID.selectOption({ index: 0 });
        await this.exceptionalProdCategory.selectOption({ index: 0 });
        await this.exceptionalProdLotNumber.fill('123456789');
        await this.exceptionalProdBatchNumber.fill('123456789');
        await this.exceptionalProdPieceNumber.fill('123456789');
        await this.exceptionalProdSerialNumber.fill('123456789');
        await this.exceptionalProdRequiredSpecificTemperature.click();
        await this.exceptionalProdTemperature.fill('400');
        await this.exceptionalProdSingleItemQuantity.fill('5');
        await this.exceptionalProdSingleItemUnit.selectOption({ index: 0 });
        await this.exceptionalProdSaveChangesBtn.click();
    }

    async importerViewExceptionalProductDetails(){
        await this.exceptionalViewProductDetailsBtn.waitFor({state: 'visible'});
        await expect(this.exceptionalViewProductDetailsBtn).toBeVisible();
        await this.exceptionalViewProductDetailsBtn.click();
        await this.exceptionalProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.exceptionalProductDetailsWindow).toBeVisible();
        await this.exceptionalProductDetailsWindowCloseBtn.click();
    }

    async importerAddRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.addRegisteredProductBtn.waitFor({state: 'visible'});
        await expect(this.addRegisteredProductBtn).toBeVisible();
        await this.addRegisteredProductBtn.click();
        await this.addRegisteredProductsWindowTitle.waitFor({state: 'visible'});
        await expect(this.addRegisteredProductsWindowTitle).toBeVisible();
        await this.registeredProductAddBtn.click();
        await this.registeredProductAddConfirmationBtn.click();
        await this.registeredProductionDateCalendar.fill('13/04/2023');
        await this.registeredExpireDateCalendar.fill('20/05/2024');
        await this.registeredProdHScodeDDL.click();
        await this.registeredProdHScodeOption1.click();
        await this.registeredProdInvoiceID.selectOption({ index: 0 });
        await this.registeredProdCategory.selectOption({ index: 0 });
        await this.registeredProdLotNumber.fill('123456789');
        await this.registeredProdBatchNumber.fill('123456789');
        await this.registeredProdPieceNumber.fill('123456789');
        await this.registeredProdSerialNumber.fill('123456789');
        await this.registeredProdRequiredSpecificTemperature.click();
        await this.registeredProdTemperature.fill('400');
        await this.registeredProdSingleItemQuantity.fill('5');
        await this.registeredProdSingleItemUnit.selectOption({ index: 0 });
        await this.registeredProdSaveChangesBtn.click();
    }

    async importerViewRegisteredProductDetails(){
        await this.registeredViewProductDetailsBtn.waitFor({state: 'visible'});
        await expect(this.registeredViewProductDetailsBtn).toBeVisible();
        await this.registeredViewProductDetailsBtn.click();
        await this.registeredProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.registeredProductDetailsWindow).toBeVisible();
        await this.registeredProductDetailsWindowCloseBtn.click();
    }

    async importerAddLicenseProduct(){
        await this.licenseProductTab.click();
        await this.licenseProductsPledge.click();
        await this.addLicenseProductBtn.click();
        await this.licenseProductTypeDDL.selectOption('1');
        await this.licenseProductName.fill('Test');
        await this.licenseProductCommercialName.fill('Test');
        await this.licenseproductDescription.fill('Test');
        await this.licenseproductIntendedUse.fill('Test');
        await this.licensedeviceIdNumber.fill('123456789');
        await this.licensefactoryName.fill('Test');
        await this.licenseProdCountryId.selectOption('623af769-a352-49f1-960e-8e32c7fd2820');
        await this.licenseProdCity.fill('Test');
        await this.licenseProdAddress.fill('Test');
        await this.licenseProdPhone.fill('0099653456789');
        await this.licenseProdEmail.fill('test@test.com');
        await this.licenseProdPostalCode.fill('12345');
        await this.licenseProdAddBtn.click();
        await this.licenseProductionDateCalendar.fill('13/04/2023');
        await this.licenseExpireDateCalendar.fill('20/05/2024');
        await this.licenseProdHScodeDDL.click();
        await this.licenseProdHScodeOption1.click();
        await this.licenseProdInvoiceID.selectOption({ index: 0 });
        await this.licenseProdCategory.selectOption({ index: 0 });
        await this.licenseProdLotNumber.fill('123456789');
        await this.licenseProdBatchNumber.fill('123456789');
        await this.licenseProdPieceNumber.fill('123456789');
        await this.licenseProdSerialNumber.fill('123456789');
        await this.licenseProdRequiredSpecificTemperature.click();
        await this.licenseProdTemperature.fill('400');
        await this.licenseProdSingleItemQuantity.fill('5');
        await this.licenseProdSingleItemUnit.selectOption({ index: 0 });
        await this.licenseProdSaveChangesBtn.click();
    }

    async importerViewLicenseProductDetails(){
        await this.licenseViewProductDetailsBtn.waitFor({state: 'visible'});
        await expect(this.licenseViewProductDetailsBtn).toBeVisible();
        await this.licenseViewProductDetailsBtn.click();
        await this.licenseProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.licenseProductDetailsWindow).toBeVisible();
        await this.licenseProductDetailsWindowCloseBtn.click();
    }

    async importerAddImportPermitProduct(){
        await this.importPermitProductTab.click();
        await this.importPermitFirstCertificate.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitFirstCertificate).toBeVisible();
        await this.importPermitFirstCertificate.click();
        await this.importPermitFirstProduct.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitFirstProduct).toBeVisible();
        await this.importPermitFirstProduct.click();
        await this.importPermitProdAddBtn.click();
        await this.importPermitProductionDateCalendar.fill('13/04/2023');
        await this.importPermitExpireDateCalendar.fill('20/05/2024');
        await this.importPermitProdHScodeDDL.click();
        await this.importPermitProdHScodeOption1.click();
        await this.importPermitProdInvoiceID.selectOption({ index: 0 });
        await this.importPermitProdCategory.selectOption({ index: 0 });
        await this.importPermitProdLotNumber.fill('123456789');
        await this.importPermitProdBatchNumber.fill('123456789');
        await this.importPermitProdPieceNumber.fill('123456789');
        await this.importPermitProdSerialNumber.fill('123456789');
        await this.importPermitProdRequiredSpecificTemperature.click();
        await this.importPermitProdTemperature.fill('400');
        await this.importPermitProdSingleItemQuantity.fill('1');
        await this.importPermitProdSaveChangesBtn.click();
    }

    async importerViewImportPermitProductDetails(){
        await this.importPermitViewProductDetailsBtn.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitViewProductDetailsBtn).toBeVisible();
        await this.importPermitViewProductDetailsBtn.click();
        await this.importPermitProductDetailsWindow.waitFor({state: 'visible'});
        await expect(this.importPermitProductDetailsWindow).toBeVisible();
        await this.importPermitProductDetailsWindowCloseBtn.click();
    }

    async importerNavigateToDocPage(){
        await this.mdDocBtn.click();
    }

    async importerNavigateToRequestSummaryPage(){
        await this.mdRequestSummaryBtn.click();
    }

}

export default requestFasehMDSecondStep