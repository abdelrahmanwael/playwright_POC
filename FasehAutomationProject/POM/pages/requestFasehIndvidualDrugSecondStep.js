import { expect } from "playwright/test";

class requestFasehIndvidualDrugSecondStep{
    constructor(page){
        this.page = page;
        //Locators 
        this.requestSecondStepPageTitle = page.locator("//div[@class='fasehWizard-header-step']");
        this.importPermitFirstCertificate = page.locator("(//span[@class='add cursor-pointer'])[1]");
        this.importPermitFirstProduct = page.locator("(//div[@class='modal-content']//span[@class='add cursor-pointer'])[1]");
        this.importPermitProdAddBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.importPermitProdHScodeDDL = page.locator("//div[@class='ng-select-container']");
        this.importPermitProdHScodeOption1 = page.locator("(//div[@class='ng-option'])[1]");
        this.importPermitProdInvoiceID = page.locator("//select[@id='invoiceId']");
        this.importPermitProdBatchNumber = page.locator("//input[@formcontrolname='batchNumber']");
        this.importPermitProdQuantity = page.locator("//input[@id='quantity']");
        this.addBatchAndQuantityBtn = page.locator("//button[@class='btn btn-primary px-4']");
        this.otherAttachments = page.locator("//label[@class='attach-btn']");
        this.importPermitProdSaveChangesBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.importPermitViewProductDetailsBtn = page.locator("(//button[@class='btn btn-link p-0 text-primary text-decoration-none'])[1]");
        this.importPermitProductDetailsWindowFirstTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowSecondTab = page.locator("(//li[@class='nav-item']//a[@class='nav-link'])[1]");
        this.importPermitProductDetailsWindowSecondTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowThirdTab = page.locator("(//li[@class='nav-item']//a[@class='nav-link'])[2]");
        this.importPermitProductDetailsWindowThirdTabContent = page.locator("(//div[@class='tab-pane active'])[2]");
        this.importPermitProductDetailsWindowCloseBtn = page.locator("//div[@class='modal-footer']//button");
        this.RequestSummaryBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2']");


    }

    //Methods
    async verifyRequestSecondStepPageOpened(){
        await this.requestSecondStepPageTitle.waitFor({state: 'visible'});
        await expect(this.requestSecondStepPageTitle).toBeVisible();
    }


    async importerAddImportPermitProduct(){
        await this.importPermitFirstCertificate.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitFirstCertificate).toBeVisible();
        await this.importPermitFirstCertificate.click();
        await this.importPermitFirstProduct.waitFor({state: 'visible'}, { timeout: 50000 });
        await expect(this.importPermitFirstProduct).toBeVisible();
        await this.importPermitFirstProduct.click();
        await this.importPermitProdAddBtn.click();
        await this.importPermitProdHScodeDDL.click();
        await this.importPermitProdHScodeOption1.click();
        await this.importPermitProdInvoiceID.selectOption({ index: 0 });
        await this.importPermitProdBatchNumber.fill('12');
        await this.importPermitProdQuantity.fill('2');
        await this.addBatchAndQuantityBtn.click();
        await this.otherAttachments.setInputFiles("POM/attachments/test.pdf");
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

export default requestFasehIndvidualDrugSecondStep