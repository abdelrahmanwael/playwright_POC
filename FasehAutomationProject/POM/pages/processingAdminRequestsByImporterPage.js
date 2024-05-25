import { expect } from "playwright/test";

class processingAdminRequestsByImporterPage{
    constructor(page){
        this.page = page;
        //Locators 
        this.requestNumber = page.locator("//div[@class='request-summary text-right']");
        this.importPermitProductTab = page.locator("//a[@id='ngb-nav-3']");
        this.inspectorNotesDropDown = page.locator("//p[@class='title-note']");
        this.inspectorNotesText = page.locator("//div[@class='pt-1 enh-div']");
        this.productionDateCalendarField = page.locator("//input[@formcontrolname='productionDateCalendar']");
        this.saveProductDetailsBtn = page.locator("//button[@class='btn--right product-content_btnwrapper_btn1 product-content_btnwrapper_btn1--saveBtn']");
        this.sendRequestBtn = page.locator("//button[@class='btn btn-primary ml-4']");
        this.viewWarehouseMapBtn = page.locator("//button[@class='btn btn-primary px-5']");
        this.mainSectorSelector = page.locator("//select[@formcontrolname='centralSectorId']");
        this.regionSelector = page.locator("//select[@formcontrolname='regionId']");
        this.citySelector = page.locator("//select[@formcontrolname='cityId']");
        this.responsibleWarehousePhoneNumber = page.locator("//input[@formcontrolname='responsiblePhoneNumber']");
        this.warehouseLocatorConfirmationBtn = page.locator("(//button[@class='btn btn-primary px-5'])[2]");
        this.termsAndConditionsCheckBox = page.locator("//label[@class='custom-control-label']");
        this.sendWarehouseLocationBtn = page.locator("//button[@class='btn btn-primary ml-2 mr-2 mt-3']");
        this.pledgeOpenBtn = page.locator("//label[@class='custom-control-label']//a");
        this.pledgeContentText = page.locator("//div[@class='modal-content']//div[@class='view']");
        this.pledgeCloseBtn = page.locator("//div[@class='modal-footer']//button");
        this.confrimPledgeCheckbox = page.locator("//label[@class='custom-control-label']");
        this.sendPledgeBtn = page.locator("//div[@class='right-actions']//button");
    }

    //Methods
    async validateRequestNumberAfterOpeningRequest(){
        await this.requestNumber.waitFor({state: 'visible'});
        await expect(this.requestNumber).toBeVisible();
    }

    async importerClickSendRequestBtn(){
        await this.sendRequestBtn.click();
    }

    async mdImporterModifyProductDetails(){
        await this.importPermitProductTab.click();
        await this.inspectorNotesDropDown.click();
        await expect(this.inspectorNotesText).toBeVisible();
        await this.inspectorNotesDropDown.click();
        await this.productionDateCalendarField.fill('');
        await this.productionDateCalendarField.type('23/06/2023');
        await this.saveProductDetailsBtn.click();
    }

    async importerSelectWarehouseLocation(){
        await this.viewWarehouseMapBtn.click();
        await this.mainSectorSelector.selectOption({ index: 1 });
        await this.regionSelector.selectOption({ index: 1 });
        await this.citySelector.selectOption({ index: 1 });
        await this.responsibleWarehousePhoneNumber.type('0566433333');
        await this.warehouseLocatorConfirmationBtn.click();
        await this.termsAndConditionsCheckBox.click();
        await this.sendWarehouseLocationBtn.click();

    }

    async importerConfirmPledgeRequestedByAdmin(){
        await this.pledgeOpenBtn.click();
        await expect(this.pledgeContentText).toBeVisible();
        await this.pledgeCloseBtn.click();
        await this.confrimPledgeCheckbox.click();
        await this.sendPledgeBtn.click();
    }
}

export default processingAdminRequestsByImporterPage