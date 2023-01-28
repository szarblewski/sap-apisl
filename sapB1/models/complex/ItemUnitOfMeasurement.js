const ItemUoMPackage = require("./ItemUoMPackage");


class ItemUnitOfMeasurement {
    constructor() {
        this.UoMType = new String();
        this.UoMEntry = new Number();
        this.DefaultBarcode = new Number();
        this.DefaultPackage = new Number();
        this.Length1 = new Number();
        this.Length1Unit = new Number();
        this.Length2 = new Number();
        this.Length2Unit = new Number();
        this.Width1 = new Number();
        this.Width1Unit = new Number();
        this.Width2 = new Number();
        this.Width2Unit = new Number();
        this.Height1 = new Number();
        this.Height1Unit = new Number();
        this.Height2 = new Number();
        this.Height2Unit = new Number();
        this.Volume = new Number();
        this.VolumeUnit = new Number();
        this.Weight1 = new Number();
        this.Weight1Unit = new Number();
        this.Weight2 = new Number();
        this.Weight2Unit = new Number();
        this.ItemUoMPackageCollection = [ItemUoMPackage];
    }
    UoMType;
    UoMEntry;
    DefaultBarcode;
    DefaultPackage;
    Length1;
    Length1Unit;
    Length2;
    Length2Unit;
    Width1;
    Width1Unit;
    Width2;
    Width2Unit;
    Height1;
    Height1Unit;
    Height2;
    Height2Unit;
    Volume;
    VolumeUnit;
    Weight1;
    Weight1Unit;
    Weight2;
    Weight2Unit;
    ItemUoMPackageCollection;
}

module.exports = ItemUnitOfMeasurement;