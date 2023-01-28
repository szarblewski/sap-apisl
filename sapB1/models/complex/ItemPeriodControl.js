

class ItemPeriodControl {
    constructor() {
        this.FiscalYear = new String();
        this.DepreciationArea = new String();
        this.SubPeriod = new Number();
        this.DepreciationStatus = new String();
        this.Factor = new Number();
        this.ActualUnits = new Number();
    }
    FiscalYear;
    DepreciationArea;
    SubPeriod;
    DepreciationStatus;
    Factor;
    ActualUnits;
}

module.exports = ItemPeriodControl;