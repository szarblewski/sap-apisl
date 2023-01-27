if(typeof(module) === "undefined") {
    module = {};
}

if(typeof(B1AppDomain) === "undefined") {
    B1AppDomain = {};
}

var serviceLayer = require('./serviceLayer');
var UserTablesMD = require('./models/userTablesMD');
var UserFieldsMD = require('./models/userFieldsMD');
var UserObjectsMD = require('./models/userObjectsMD');
var Helpers = require('./helpers');

B1AppDomain = {
    sl: new serviceLayer,
    UserTablesMD: new UserTablesMD,
    UserFieldsMD: new UserFieldsMD,
    UserObjectsMD: new UserObjectsMD,
    Helpers: Helpers,
}

module.exports = B1AppDomain;