var obj = require("../../properties/objects.json");

var EC = protractor.ExpectedConditions;

module.exports = {

    verifyActivateWindow: async function(){
        await browser.wait(EC.visibilityOf(element(by.xpath(obj.createAPIs.manageAPI.activateAPIWindow)), 10000, "Activation Window does not appear"));
        await element(by.xpath(obj.createAPIs.manageAPI.activateAPIYesButton)).click();
        await browser.wait(EC.visibilityOf(element(by.linkText(obj.baseModule.headerLinks.APIlink)), 180000, "API LINK TEXT NOT FOUND"));
        await browser.sleep("10000");
        console.log("changed as a chethan branch");
    },

    changesByRiax: async function(){
        console.log("Changes done by riax");
    },

    verifyNotActiveWindow: async function(){
        console.log("A method written to commit in chethan's branch");
    }
}