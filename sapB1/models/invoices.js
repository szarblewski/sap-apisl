const Documents = require("./documents");


class Invoices extends Documents {
    constructor() {
        super('Invoices');
    }    
}

module.exports = Invoices;