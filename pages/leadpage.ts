

import { CommonMethods } from '../pages/CommonMethods';

export class LeadPage extends CommonMethods {

    page: any;
    constructor(page: any) {
        super(page);
        this.page = page;
    }

     loc_tb_lastname = 'input[name="lastname"]';
     loc_tb_company = 'input[name="company"]';
     loc_btn_save = '(//input[@name="button"])[1]';
     

    async createlead(lname: string, company: string) {        
      
       await this.setLastName(lname);
       await this.setCompany(company);
       await this.clickSave(); 

    }

     async setLastName(lname: string) {    
       
        await this.setInput(this.loc_tb_lastname, lname);  
    }

     async setCompany(company: string) {
        await this.setInput(this.loc_tb_company, company);
     }
   

     async clickSave() {
        await this.clickElement(this.loc_btn_save);
        console.log("Clicked on Save button");
    }

    

}