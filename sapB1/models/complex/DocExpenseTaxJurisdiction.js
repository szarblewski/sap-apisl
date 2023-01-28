

class DocExpenseTaxJurisdiction {
    constructor() {
        this.JurisdictionCode = new String();
        this.JurisdictionType = new Number();
        this.TaxAmount = new Number();
        this.TaxAmountSC = new Number();
        this.TaxAmountFC = new Number();
        this.TaxRate = new Number();
        this.DocEntry = new Number();
        this.LineNumber = new Number();
        this.RowSequence = new Number();
        this.ExternalCalcTaxRate = new Number();
        this.ExternalCalcTaxAmount = new Number();
        this.ExternalCalcTaxAmountFC = new Number();
        this.ExternalCalcTaxAmountSC = new Number();
    }
    JurisdictionCode;
    JurisdictionType;
    TaxAmount;
    TaxAmountSC;
    TaxAmountFC;
    TaxRate;
    DocEntry;
    LineNumber;
    RowSequence;
    ExternalCalcTaxRate;
    ExternalCalcTaxAmount;
    ExternalCalcTaxAmountFC;
    ExternalCalcTaxAmountSC;
}

module.exports = DocExpenseTaxJurisdiction;