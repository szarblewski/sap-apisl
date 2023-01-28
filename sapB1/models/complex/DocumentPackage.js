const DocumentPackageItem = require("./DocumentPackageItem");


class DocumentPackage {
    constructor() {
        this.Number = new Number();
        this.Type = new String();
        this.TotalWeight = new Number();
        this.Units = new Number();
        this.DocumentPackageItems = [DocumentPackageItem];
    }
    Number;
    Type;
    TotalWeight;
    Units;
    DocumentPackageItems;
}

module.exports = DocumentPackage;