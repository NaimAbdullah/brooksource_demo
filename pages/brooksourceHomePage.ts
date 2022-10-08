import { Page } from "@playwright/test"

export default class BrooksourceHomePage {

    constructor(public page: Page){}

    async clickViewMore(){
        await this.page.click("'View More'");
    }


}