var { Before, After, Given, Then, setDefaultTimeout} = require('cucumber');
const jenkinsProperties = require("../properties/readProperties");
const common = require("../modules/baseModule/common");


setDefaultTimeout(60 * 10000);
browser.ignoreSynchronization = true;

Then("Changes done by Riax", async function(){
    await common.changesByRiax();
});