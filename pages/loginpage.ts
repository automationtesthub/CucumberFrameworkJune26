

import { CommonMethods } from '../pages/CommonMethods';

export class LoginPage extends CommonMethods {

    page: any;
    constructor(page: any) {
        super(page);
        this.page = page;
    }

     userid = 'input[name="user_name"]';
     pwd = 'input[name="user_password"]';
     loginButton = 'input[name="Login"]';
     logo = "//img[@src='include/images/vtiger-crm.gif']";
     loc_msg_error = "//*[contains(text(),'You must specify a valid username and password.')]";
  

    async login(username: string, password: string) {        
      
       await this.setUserName(username);
       await this.setPassword(password);
       await this.clickLogin(); 
       

    }

     async setUserName(username: string) {    
       
        await this.setInput(this.userid, username);  
    }

     async setPassword(password: string) {        
      // await this.page.fill(this.pwd, password);    
       await this.setInput(this.pwd, password);
    }

    
     async clickLogin() {
        //await this.page.click(this.loginButton);   
        await this.clickElement(this.loginButton);

    }

    async verifyUserName() {    
       
        await this.isElementVisible(this.userid);  
    }

     async verifyErrorMsg() {    
       
        await this.isElementVisible(this.loc_msg_error);  
    }




}