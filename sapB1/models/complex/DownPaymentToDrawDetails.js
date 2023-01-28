

class DownPaymentToDrawDetails {
    constructor() {
        this.DocInternalID = new Number();
        this.RowNum = new Number();
        this.SeqNum = new Number();
        this.DocEntry = new Number();
        this.VatGroupCode = new String();
        this.VatPercent = new Number();
        this.AmountToDraw = new Number();
        this.AmountToDrawFC = new Number();
        this.AmountToDrawSC = new Number();
        this.Tax = new Number();
        this.TaxFC = new Number();
        this.TaxSC = new Number();
        this.IsGrossLine = new String();
        this.GrossAmountToDraw = new Number();
        this.GrossAmountToDrawFC = new Number();
        this.GrossAmountToDrawSC = new Number();
        this.LineType = new String();
        this.TaxAdjust = new String();
    }
    DocInternalID;
    RowNum;
    SeqNum;
    DocEntry;
    VatGroupCode;
    VatPercent;
    AmountToDraw;
    AmountToDrawFC;
    AmountToDrawSC;
    Tax;
    TaxFC;
    TaxSC;
    IsGrossLine;
    GrossAmountToDraw;
    GrossAmountToDrawFC;
    GrossAmountToDrawSC;
    LineType;
    TaxAdjust;
}

module.exports = DownPaymentToDrawDetails;