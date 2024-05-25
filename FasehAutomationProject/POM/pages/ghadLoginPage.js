import fasehLandingpage from "./fasehLandingPage";

class ghadLoginPage extends fasehLandingpage{
    constructor(page){
        super(page);

        //Locators
        this.loginGhadBtn= page.locator("(//a[@class='btn-block btn mt-3 btn btn-secondary'])[1]");
        this.emailGhad = page.locator("//input[@type='email']");
        this.passwordGhad = page.locator("//input[@type='password']");
        this.loginBtn = page.locator("(//button[@type='submit'])[1]");
    }

    
    

    //Methods
    async loginWithGhad(emailGhad,passwordGhad){
        await this.loginGhadBtn.click();
        await this.emailGhad.fill(emailGhad);
        await this.passwordGhad.fill(passwordGhad);
        await this.loginBtn.click();
    }
}

export default ghadLoginPage