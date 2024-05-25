import fasehLandingpage from "./fasehLandingPage";

class denrLoginPage extends fasehLandingpage{
    constructor(page){
        super(page);

        //Locators
        this.loginDenrBtn= page.locator("(//a[@class='btn-block btn mt-3 btn btn-secondary'])[2]");
        this.userNameDenr = page.locator("//input[@id='LoginInput_UserNameOrEmailAddress']");
        this.passwordDenr = page.locator("//input[@type='password']");
        this.loginBtn = page.locator("(//button[@type='submit'])[1]");
    }

    
    

    //Methods
    async loginWithDenr(userNameDenr,passwordDenr){
        await this.loginDenrBtn.click();
        await this.userNameDenr.fill(userNameDenr);
        await this.passwordDenr.fill(passwordDenr);
        await this.loginBtn.click();
    }
}

export default denrLoginPage