

class DocumentSpecialLine {
    constructor() {
        this.LineNum = new Number();
        this.AfterLineNumber = new Number();
        this.OrderNumber = new Number();
        this.LineType = new String();
        this.Subtotal = new Number();
        this.LineText = new String();
        this.SubtotalFC = new Number();
        this.SubtotalSC = new Number();
        this.TaxAmount = new Number();
        this.TaxAmountFC = new Number();
        this.TaxAmountSC = new Number();
        this.Freight1 = new Number();
        this.Freight1FC = new Number();
        this.Freight1SC = new Number();
        this.Freight2 = new Number();
        this.Freight2FC = new Number();
        this.Freight2SC = new Number();
        this.Freight3 = new Number();
        this.Freight3FC = new Number();
        this.Freight3SC = new Number();
        this.GrossTotal = new Number();
        this.GrossTotalFC = new Number();
        this.GrossTotalSC = new Number();
    }
    LineNum;
    AfterLineNumber;
    OrderNumber;
    LineType;
    Subtotal;
    LineText;
    SubtotalFC;
    SubtotalSC;
    TaxAmount;
    TaxAmountFC;
    TaxAmountSC;
    Freight1;
    Freight1FC;
    Freight1SC;
    Freight2;
    Freight2FC;
    Freight2SC;
    Freight3;
    Freight3FC;
    Freight3SC;
    GrossTotal;
    GrossTotalFC;
    GrossTotalSC;
}

module.exports = DocumentSpecialLine;