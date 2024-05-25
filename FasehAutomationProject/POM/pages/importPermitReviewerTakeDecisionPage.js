import { expect } from "playwright/test";


class importPermitReviewerTakeDecisionPage{
    constructor(page){
        this.page = page;
        //Locators
        this.requestActionsBtn = page.locator("//button[@id='dropdownBasic']");
        this.viewRequestBtn = page.locator("(//button[@class='dropdown-item'])[1]");
        this.takeDecisionBtn = page.locator("(//button[@class='dropdown-item'])[1]");
        this.recieveRequestBtn = page.locator("//button[@class='btn btn-primary px-5 me-2']");
        this.reviewerDecisionIndividualSelector = page.locator("//select[@id='reviewerAction']");
        this.reviewerDecisionCommercialSelector = page.locator("//select[@id='reviewerAction0']");
        this.saveDecisionIndividualBtn = page.locator("//div[@class='product-container']//div[@class='row']//button");
        this.saveDecisionCommercialBtn = page.locator("//span[@class='product-link_data']");
        this.registeredProductTab = page.locator("//ul[@role='tablist']//li[2]");
        this.acceptRequestBtn = page.locator("(//div[@class='request-summary-conditions']//div[@class='row']//button)[2]");
    }

    //Methods
    async importPermitReviewerRecieveRequest(){
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.viewRequestBtn.click();
        await this.recieveRequestBtn.waitFor({state: 'visible'});
        await expect(this.recieveRequestBtn).toBeVisible();
        await this.recieveRequestBtn.click();
    }

    async importPermitReviewerTakeDecisionOnRequest(){
        await this.page.waitForTimeout(5000);
        await this.requestActionsBtn.click();
        await this.takeDecisionBtn.click();
    }

    async importPermitReviewerTakeAcceptDecisionOnIndividualRequest(){
        await this.reviewerDecisionIndividualSelector.waitFor({state: 'visible'});
        await expect(this.reviewerDecisionIndividualSelector).toBeVisible();
        await this.reviewerDecisionIndividualSelector.selectOption({ index: 1 });
        await this.saveDecisionIndividualBtn.click();
    }

    async importPermitReviewerTakeAcceptDecisionOnCommercialRequestUnRegisteredProduct(){
        await this.reviewerDecisionCommercialSelector.waitFor({state: 'visible'});
        await expect(this.reviewerDecisionCommercialSelector).toBeVisible();
        await this.reviewerDecisionCommercialSelector.selectOption({ index: 1 });
        await this.saveDecisionCommercialBtn.click();
    }

    async importPermitReviewerTakeAcceptDecisionOnCommercialRequestRegisteredProduct(){
        await this.registeredProductTab.click();
        await this.reviewerDecisionCommercialSelector.waitFor({state: 'visible'});
        await expect(this.reviewerDecisionCommercialSelector).toBeVisible();
        await this.reviewerDecisionCommercialSelector.selectOption({ index: 1 });
        await this.saveDecisionCommercialBtn.click();
    }

    async importPermitReviewerClickAcceptBtn(){
        await this.acceptRequestBtn.click();
    }

    
}

export default importPermitReviewerTakeDecisionPage