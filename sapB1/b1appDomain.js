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
var SQLQueries = require('./models/sqlQueries');
var BusinessPartners = require('./models/businessPartners');
var Invoices = require('./models/invoices');
var Items = require('./models/items');

B1AppDomain = {
    sl: new serviceLayer,
    UserTablesMD: new UserTablesMD,
    UserFieldsMD: new UserFieldsMD,
    UserObjectsMD: new UserObjectsMD,
    Helpers: Helpers,
    SQLQueries: new SQLQueries,
    BusinessPartners: new BusinessPartners,
    Invoices: new Invoices,
    Items: new Items   
}

module.exports = B1AppDomain;