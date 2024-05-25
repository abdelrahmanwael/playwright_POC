import { expect } from "playwright/test";
import testUrls from "../test-data/testUrls";

class fasehLandingpage{
    constructor(page){
        this.page = page;
        //Locators
        this.loginIconEcosma= page.locator("(//div[@class='service-box-landing'])[1]//div[@class='centerboxfooter']//h2");
        this.loginIconMD= page.locator("(//div[@class='service-box-landing'])[2]//div[@class='centerboxfooter']//h2");
        this.loginIconFood= page.locator("(//div[@class='service-box-landing'])[3]//div[@class='centerboxfooter']//h2");
        this.loginIconDrug= page.locator("(//div[@class='service-box-landing'])[4]//div[@class='centerboxfooter']//h2");
        this.logOutIcon = page.locator("//li[@class='nav-item active']");
        this.logOutSubIcon = page.locator("//div[@class='nav-topup']//span");    
        this.logOutConfirmationBtn = page.locator("//div[@class='modal-footer']//button[@class='btn btn-primary']");
        this.fasehLandingPageTitle = page.locator("//div[@class='container']//div[@class='row row--content-center no-gutter']");
    }

    //Methods
    async navigateToPublicUrl(){
        await this.page.goto(testUrls.publicUrl);
    }

    async importerLogout(){
        await this.logOutIcon.waitFor({state: 'visible'});
        await this.logOutIcon.click();
        await this.logOutSubIcon.click();
        await this.logOutConfirmationBtn.waitFor({state: 'visible'});
        await this.logOutConfirmationBtn.click();
        await this.fasehLandingPageTitle.waitFor({state: 'visible'});
        await expect(this.fasehLandingPageTitle).toBeVisible();
    }

    async clickOnLoginIconEcosma(){
        await this.loginIconEcosma.click();
    }
    
    async clickOnLoginIconMD(){
        await this.loginIconMD.click();
    }

    async clickOnLoginIconFood(){
        await this.loginIconFood.click();
    }

    async clickOnLoginIconDrug(){
        await this.loginIconDrug.click();
    }
}

export default fasehLandingpage