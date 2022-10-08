import { expect, test } from "@playwright/test"
import BrooksourceHomePage from "../../pages/brooksourceHomePage"

test("Validate the URL", async ({ page }) => {
    const main = new BrooksourceHomePage(page);

    await page.goto("https://www.brooksource.com/");

    await main.clickViewMore();
    expect(page).toHaveURL("https://www.brooksource.com/technology");
})