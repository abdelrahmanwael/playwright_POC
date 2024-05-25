import { expect } from "playwright/test";


class centralClearanceEmpTakeDecisionPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestNumber = page.locator("//div[@class='request-summary text-end mb-4']");
        this.employeeDecisionsDdl = page.locator("//select[@formcontrolname='inspectionDecision']");
        this.saveProductBtn = page.locator("//div[@class='product-content_btnwrapper']//button");
        this.exceptionalProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[1]");
        this.registeredProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[2]");
        this.licenseProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[3]");
        this.importPermitProdTabMD = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[4]");
        this.exceptionalDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[1]");
        this.registeredDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[2]");
        this.importPermitDrugTabCommercialDrug = page.locator("//ul[@class='nav-tabs tabsheadcenter nav']//li[3]");
        this.needModificatioFirstOption = page.locator("//input[@id='1']");
        this.needModificationNotes = page.locator("//div[@class='col-12 p-3']//textarea[@class='form-control product-header_data_large-text ng-untouched ng-pristine ng-valid']");
        this.needModificationSaveProductBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.quantityPartialreleaseField = page.locator("//input[@formcontrolname='partialReleaseQuantity']");
        this.sendDecisionBtn = page.locator("//button[@class='btn btn-primary ms-4']");
        this.perviewTypeDDL = page.locator("//select[@id='previewTypeId']");
        this.perviewTypeSendDecisionBtn = page.locator("//div[@class='modal-footer']//button[@class='btn btn-primary']");
        this.requestPledgeOkBtn = page.locator("//button[@class='btn btn-primary enh-aligh alignment-buttons']");
    }

    //Methods
    async validateRequestNumberAfterOpeningRequest(){
        await this.requestNumber.waitFor({state: 'visible'});
        await expect(this.requestNumber).toBeVisible();
    }

    async takeFasehDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 0 });
        await this.saveProductBtn.click();
    }

    async takeRejectDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 1 });
        await this.saveProductBtn.click();
    }

    async takePerviewDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 2 });
        await this.saveProductBtn.click();
    }

    async takePullSampleDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 3 });
        await this.saveProductBtn.click();
    }

    async takeNeedModificationDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 4 });
        await this.saveProductBtn.click();
        await this.needModificatioFirstOption.click();
        await this.needModificationNotes.type('test modification');
        await this.needModificationSaveProductBtn.click();
    }

    async takeNeedPartialReleaseDecision(){
        await this.employeeDecisionsDdl.selectOption({ index: 5 });
        await this.quantityPartialreleaseField.type('1');
        await this.saveProductBtn.click();
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

    async sendDecision(){
        await this.sendDecisionBtn.click();
    }

    async selectPerviewTypeWarehouse(){
        await this.perviewTypeDDL.selectOption({ index: 0 });
        await this.perviewTypeSendDecisionBtn.click();
    }

    async selectPerviewTypePort(){
        await this.perviewTypeDDL.selectOption({ index: 1 });
        await this.perviewTypeSendDecisionBtn.click();
    }

    async requestPledgeFromImporter(){
        //await this.waitForSelector(this.requestPledgeOkBtn, { state: 'visible' });
        await this.requestPledgeOkBtn.click();
    }

    
}

export default centralClearanceEmpTakeDecisionPage