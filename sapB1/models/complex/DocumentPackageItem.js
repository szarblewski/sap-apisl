

class DocumentPackageItem {
    constructor() {
        this.PackageNumber = new Number();
        this.ItemCode = new String();
        this.Quantity = new Number();
        this.UoMEntry = new Number();
        this.MeasureUnit = new String();
        this.UnitsOfMeasurement = new Number();
    }
    PackageNumber;
    ItemCode;
    Quantity;
    UoMEntry;
    MeasureUnit;
    UnitsOfMeasurement;
}

module.exports = DocumentPackageItem;