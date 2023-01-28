

class WithholdingTaxLine {
    constructor() {
        this.WTCode = new String();
        this.WTAmountSys = new Number();
        this.WTAmountFC = new Number();
        this.WTAmount = new Number();
        this.WithholdingType = new String();
        this.TaxableAmountinSys = new Number();
        this.TaxableAmountFC = new Number();
        this.TaxableAmount = new Number();
        this.RoundingType = new String();
        this.Rate = new Number();
        this.Criteria = new String();
        this.Category = new String();
        this.BaseType = new String();
        this.AppliedWTAmountSys = new Number();
        this.AppliedWTAmountFC = new Number();
        this.AppliedWTAmount = new Number();
        this.GLAccount = new String();
        this.LineNum = new Number();
        this.BaseDocEntry = new Number();
        this.BaseDocLine = new Number();
        this.BaseDocType = new Number();
        this.BaseDocumentReference = new Number();
        this.Status = new String();
        this.TargetAbsEntry = new Number();
        this.TargetDocumentType = new Number();
        this.CSTCodeIncoming = new String();
        this.CSTCodeOutgoing = new String();
    }
    WTCode;
    WTAmountSys;
    WTAmountFC;
    WTAmount;
    WithholdingType;
    TaxableAmountinSys;
    TaxableAmountFC;
    TaxableAmount;
    RoundingType;
    Rate;
    Criteria;
    Category;
    BaseType;
    AppliedWTAmountSys;
    AppliedWTAmountFC;
    AppliedWTAmount;
    GLAccount;
    LineNum;
    BaseDocEntry;
    BaseDocLine;
    BaseDocType;
    BaseDocumentReference;
    Status;
    TargetAbsEntry;
    TargetDocumentType;
    CSTCodeIncoming;
    CSTCodeOutgoing;
}

module.exports = WithholdingTaxLine;