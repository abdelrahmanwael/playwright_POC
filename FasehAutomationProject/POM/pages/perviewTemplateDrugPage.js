import { expect } from "playwright/test";


class perviewTemplateDrugPage{
    constructor(page){
        this.page = page;
        //Locators
        this.perviewTemplateOpenBtn = page.locator("//div[@class='block-details request-details']//button");
        this.addPerviewTemplateBtn = page.locator("//div[@class='col-md-12 iconstyled']//div//img");
        this.productNameDDL = page.locator("//div[@class='ng-input']//input");
        this.firstProductChoiceDDL = page.locator("//ng-dropdown-panel[@class='ng-dropdown-panel ng-select-multiple ng-select-bottom']");
        this.perviewDateField = page.locator("//input[@id='previewDate']");
        this.shipmentMethodSelector = page.locator("//select[@id='shipmentMethod']");
        this.perviewTimeField = page.locator("//input[@id='previewTime']");
        this.numberOfContainersField = page.locator("//input[@id='containersCount']");
        this.perviewTemplateSection2Btn = page.locator("(//div[@class='col-md-8 col-9'])[1]");
        this.firstTestSection2 = page.locator("(//input[@id='productIsMatched1'])");
        this.secondTestSection2 = page.locator("(//input[@id='activatedETemperature1'])");
        this.thirdTestSection2 = page.locator("(//input[@id='sequentialNumberForTemperature1'])");
        this.fourthTestSection2 = page.locator("(//input[@id='inspectorTemperatureWhenShipmentArrives1'])");
        this.fifthTestSection2 = page.locator("(//input[@id='receiptAndSignature1'])");
        this.perviewTemplateSection3Btn = page.locator("(//div[@class='col-md-8 col-9'])[2]");
        this.firstTestSection3 = page.locator("(//input[@id='drugsA1'])");
        this.secondTestSection3 = page.locator("(//input[@id='drugsB1'])");
        this.thirdTestSection3 = page.locator("(//input[@id='drugsC1'])");
        this.fourthTestSection3 = page.locator("(//input[@id='drugsD1'])");
        this.fifthTestSection3 = page.locator("(//input[@id='drugsE1'])");
        this.sixthTestSection3 = page.locator("(//input[@id='drugsF1'])");
        this.perviewTemplateSection4Btn = page.locator("(//div[@class='col-md-8 col-9'])[3]");
        this.firstTestSection4 = page.locator("(//input[@id='clearanceRecommendation2'])");
        this.secondTestSection4 = page.locator("(//input[@id='conformityShipmentToTermsAndConditions1'])");
        this.perviewTemplateSaveBtn = page.locator("(//button[@class='next-btn btn btn-primary px-5'])");
        this.backBtn = page.locator("(//button[@class='btn fontcolor'])");
    }

    //Methods
    async validatePerviewTemplatePageAfterOpening(){
        await this.addPerviewTemplateBtn.waitFor({state: 'visible'});
        await expect(this.addPerviewTemplateBtn).toBeVisible();
    }

    async fillPerviewTemplate(){
        await this.perviewTemplateOpenBtn.click();
        await this.validatePerviewTemplatePageAfterOpening();
        await this.addPerviewTemplateBtn.click();
        await this.productNameDDL.click();
        await this.firstProductChoiceDDL.click();
        await this.perviewDateField.fill('1/4/2024');
        await this.shipmentMethodSelector.selectOption({ index: 0 });
        await this.perviewTimeField.fill('12:00');
        await this.numberOfContainersField.fill('10');
        await this.perviewTemplateSection2Btn.click();
        await this.firstTestSection2.click();
        await this.secondTestSection2.click();
        await this.thirdTestSection2.click();
        await this.fourthTestSection2.click();
        await this.fifthTestSection2.click();
        await this.perviewTemplateSection3Btn.click();
        await this.firstTestSection3.click();
        await this.secondTestSection3.click();
        await this.thirdTestSection3.click();
        await this.fourthTestSection3.click();
        await this.fifthTestSection3.click();
        await this.sixthTestSection3.click();
        await this.perviewTemplateSection4Btn.click();
        await this.firstTestSection4.click();
        await this.secondTestSection4.click();
        await this.perviewTemplateSaveBtn.click();
        await this.validatePerviewTemplatePageAfterOpening();
        await this.backBtn.click();
    }


}

export default perviewTemplateDrugPage