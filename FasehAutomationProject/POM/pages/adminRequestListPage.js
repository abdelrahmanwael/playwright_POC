import { expect } from "playwright/test";


class adminRequestListPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestNumberSearchField = page.locator("//input[@formcontrolname='requestNumber']");
        this.typeOfProductsSelector = page.locator("//select[@id='productTypeId']");
        this.typeOfImportPermitProductsSelector = page.locator("//select[@id='importPermitRequestType']");
        this.searchBtn = page.locator("//button[@type='submit']");
        this.requestNumberResultFirstGrid = page.locator("((//tbody)[1]//td[2])[1]");
        this.requestChecbox = page.locator("//input[@id='rowChek_0']");
        this.recieveRequestBtn = page.locator("(//button[@class='btn btn-primary px-5 me-2'])[2]");
        this.requestActionsBtn = page.locator("//button[@id='dropdownBasic']");
        this.takeDecisionBtn = page.locator("(//button[@class='dropdown-item'])[2]");
    }

    //Methods
    async validateRequestListPageOpened(){
        //await this.page.waitForTimeout(5000);
        await this.requestNumberSearchField.waitFor({state: 'visible'}, {setTimeout: 6000});
        await expect(this.requestNumberSearchField).toBeVisible();
    }

    async adminSearchForEcosmaRequests(){
        await this.typeOfProductsSelector.selectOption({ value: '1' });
    }

    async adminSearchForMdRequests(){
        await this.typeOfProductsSelector.selectOption({ value: '2' });
    }

    async adminSearchForFoodRequests(){
        await this.typeOfProductsSelector.selectOption({ value: '3' });
    }

    async adminSearchForDrugRequests(){
        await this.typeOfProductsSelector.selectOption({ value: '4' });
    }

    async adminSearchForImportPermitDrugRequests(){
        await this.typeOfImportPermitProductsSelector.selectOption({ value: '4' });
    }

    async  adminSearchByRequestNumber(){
          var fasehRequestNum = require('./requestFasehSummaryPage.js');
          await this.requestNumberSearchField.type(fasehRequestNum);
          //await this.requestNumberSearchField.type('MD-20240502-14');
          await this.searchBtn.click();
          await this.page.waitForTimeout(5000);
    }

    async  adminSearchByImportPermitRequestNumber(){
        var importPermitRequestNum = require('./importPermitDrugSummaryPage.js');
        await this.requestNumberSearchField.type(importPermitRequestNum);
        //await this.requestNumberSearchField.type('D-IM-20240504-11');
        await this.searchBtn.click();
        await this.page.waitForTimeout(5000);
  }

    async adminRecieveRequestUsingCheckBox(){
        await this.requestChecbox.waitFor({state: 'visible'});
        await expect(this.requestChecbox).toBeVisible();
        await this.requestChecbox.click();
        await this.recieveRequestBtn.waitFor({state: 'visible'});
        await expect(this.recieveRequestBtn).toBeEnabled();
        await this.recieveRequestBtn.click();
        await expect(this.searchBtn).toBeEnabled();
        await this.searchBtn.click();
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.takeDecisionBtn.click();
    }
    
    async adminTakeDecisionOnRequestAfterReturningFromWarehouseOrPort(){
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.takeDecisionBtn.click();
    }
}

export default adminRequestListPage