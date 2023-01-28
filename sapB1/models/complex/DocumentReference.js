

class DocumentReference {
    constructor() {
        this.DocEntry = new Number();
        this.LineNumber = new Number();
        this.RefDocEntr = new Number();
        this.RefDocNum = new Number();
        this.ExtDocNum = new String();
        this.RefObjType = new String();
        this.AccessKey = new String();
        this.IssueDate = new String();
        this.IssuerCNPJ = new String();
        this.IssuerCode = new String();
        this.Model = new String();
        this.Series = new String();
        this.Number = new Number();
        this.RefAccKey = new String();
        this.RefAmount = new Number();
        this.SubSeries = new String();
        this.Remark = new String();
        this.LinkRefTyp = new String();
    }
    DocEntry;
    LineNumber;
    RefDocEntr;
    RefDocNum;
    ExtDocNum;
    RefObjType;
    AccessKey;
    IssueDate;
    IssuerCNPJ;
    IssuerCode;
    Model;
    Series;
    Number;
    RefAccKey;
    RefAmount;
    SubSeries;
    Remark;
    LinkRefTyp;
}

module.exports = DocumentReference;