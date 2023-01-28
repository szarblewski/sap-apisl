

class ItemIntrastatExtension {
    constructor() {
        this.ItemCode = new String();
        this.CommodityCode = new Number();
        this.SupplementaryUnit = new Number();
        this.FactorOfSupplementaryUnit = new Number();
        this.ImportRegionState = new Number();
        this.ExportRegionState = new Number();
        this.ImportNatureOfTransaction = new Number();
        this.ExportNatureOfTransaction = new Number();
        this.ImportStatisticalProcedure = new Number();
        this.ExportStatisticalProcedure = new Number();
        this.CountryOfOrigin = new String();
        this.ServiceCode = new Number();
        this.Type = new String();
        this.ServiceSupplyMethod = new String();
        this.ServicePaymentMethod = new String();
        this.ImportRegionCountry = new String();
        this.ExportRegionCountry = new String();
        this.UseWeightInCalculation = new String();
        this.IntrastatRelevant = new String();
        this.StatisticalCode = new String();
    }
    ItemCode;
    CommodityCode;
    SupplementaryUnit;
    FactorOfSupplementaryUnit;
    ImportRegionState;
    ExportRegionState;
    ImportNatureOfTransaction;
    ExportNatureOfTransaction;
    ImportStatisticalProcedure;
    ExportStatisticalProcedure;
    CountryOfOrigin;
    ServiceCode;
    Type;
    ServiceSupplyMethod;
    ServicePaymentMethod;
    ImportRegionCountry;
    ExportRegionCountry;
    UseWeightInCalculation;
    IntrastatRelevant;
    StatisticalCode;
}

module.exports = ItemIntrastatExtension;