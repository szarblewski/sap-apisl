

class ItemDepreciationParameter {
    constructor() {
        this.FiscalYear = new String();
        this.DepreciationArea = new String();
        this.DepreciationStartDate = new String();
        this.DepreciationEndDate = new String();
        this.UsefulLife = new Number();
        this.RemainingLife = new Number();
        this.DepreciationType = new String();
        this.TotalUnitsInUsefulLife = new Number();
        this.RemainingUnits = new Number();
        this.StandardUnits = new Number();
    }
    FiscalYear;
    DepreciationArea;
    DepreciationStartDate;
    DepreciationEndDate;
    UsefulLife;
    RemainingLife;
    DepreciationType;
    TotalUnitsInUsefulLife;
    RemainingUnits;
    StandardUnits;
}

module.exports = ItemDepreciationParameter;