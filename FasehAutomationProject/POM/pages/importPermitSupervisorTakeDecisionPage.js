import { expect } from "playwright/test";


class importPermitSupervisorTakeDecisionPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestActionsBtn = page.locator("//button[@id='dropdownBasic']");
        this.confirmDecisionBtn = page.locator("(//button[@class='dropdown-item'])[1]");
        this.recieveRequestBtn = page.locator("//button[@class='btn btn-primary px-5 me-2']");
        this.reviewerDecisionOnCommercialRequest = page.locator("//select[@id='reviewerAction0']");
        this.reviewerDecisionOnIndividualRequest = page.locator("//select[@id='reviewerAction']");
        this.saveDecisionBtn = page.locator("//div[@class='product-container']//div[@class='row']//button");
        this.acceptRequestBtn = page.locator("(//button[@class='btn btn-primary px-5 me-2'])[1]");
        this.submitRequestBtn = page.locator("//button[@class='btn btn-primary enh-aligh alignment-buttons']");
    }

    //Methods
    async importPermitSupervisorTakeAcceptDecisionOnRequestOnIndividualRequest(){
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.confirmDecisionBtn.click();
        await this.reviewerDecisionOnIndividualRequest.waitFor({state: 'visible'});
        await expect(this.reviewerDecisionOnIndividualRequest).toBeVisible();
        await this.acceptRequestBtn.click();
        await this.submitRequestBtn.click();
    }

    async importPermitSupervisorTakeAcceptDecisionOnRequestOnCommercialRequest(){
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.confirmDecisionBtn.click();
        await this.reviewerDecisionOnCommercialRequest.waitFor({state: 'visible'});
        await expect(this.reviewerDecisionOnCommercialRequest).toBeVisible();
        await this.acceptRequestBtn.click();
        await this.submitRequestBtn.click();
    }

    
}

export default importPermitSupervisorTakeDecisionPage