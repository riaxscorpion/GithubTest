var { Before, After, Given, Then, setDefaultTimeout} = require('cucumber');
const jenkinsProperties = require("../properties/readProperties");
const common = require("../modules/baseModule/common");

setDefaultTimeout(60 * 10000);
browser.ignoreSynchronization = true;

var url       = jenkinsProperties.gateway_url;
var username  = jenkinsProperties.username;
var password  = jenkinsProperties.password;


Then("Verify chethan branch changes", async function(){
    await common.verifyNotActiveWindow();
});
