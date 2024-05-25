import { expect } from "playwright/test";
import testUrls from "../test-data/testUrls";


class fasehLoginPage{
    constructor(page){
        this.page = page;
        //Locators
        this.emailField = page.locator("//input[@class='form-floating floatingInput form-control ']");
        this.passwordField = page.locator("//input[@class='form-floating form-control ']");
        this.loginBtn = page.locator("//button[@class='btn-block btn-lg mt-3 btn btn-primary']");
    }

    //Methods
    async navigateToAdminUrl(){
        await this.page.goto(testUrls.adminUrl);
    }

    async loginAsAuthorizedEmployee(email,password){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }

    
    
}

export default fasehLoginPage