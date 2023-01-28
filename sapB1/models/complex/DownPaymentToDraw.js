const DownPaymentToDrawDetails = require("./DownPaymentToDrawDetails");


class DownPaymentToDraw {
    constructor() {
        this.DocEntry = new Number();
        this.PostingDate = new String();
        this.DueDate = new String();
        this.Name = new String();
        this.Details = new String();
        this.AmountToDraw = new Number();
        this.DownPaymentType = new String();
        this.AmountToDrawFC = new Number();
        this.AmountToDrawSC = new Number();
        this.DocInternalID = new Number();
        this.RowNum = new Number();
        this.DocNumber = new Number();
        this.Tax = new Number();
        this.TaxFC = new Number();
        this.TaxSC = new Number();
        this.GrossAmountToDraw = new Number();
        this.GrossAmountToDrawFC = new Number();
        this.GrossAmountToDrawSC = new Number();
        this.IsGrossLine = new String();
        this.DownPaymentsToDrawDetails = [DownPaymentToDrawDetails];
    }
    DocEntry;
    PostingDate;
    DueDate;
    Name;
    Details;
    AmountToDraw;
    DownPaymentType;
    AmountToDrawFC;
    AmountToDrawSC;
    DocInternalID;
    RowNum;
    DocNumber;
    Tax;
    TaxFC;
    TaxSC;
    GrossAmountToDraw;
    GrossAmountToDrawFC;
    GrossAmountToDrawSC;
    IsGrossLine;
    DownPaymentsToDrawDetails;
}

module.exports = DownPaymentToDraw;