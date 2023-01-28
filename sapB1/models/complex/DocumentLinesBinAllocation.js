

class DocumentLinesBinAllocation {
    constructor() {
        this.BinAbsEntry = new Number();
        this.Quantity = new Number();
        this.AllowNegativeQuantity = new String();
        this.SerialAndBatchNumbersBaseLine = new Number();
        this.BaseLineNumber = new Number();
    }
    BinAbsEntry;
    Quantity;
    AllowNegativeQuantity;
    SerialAndBatchNumbersBaseLine;
    BaseLineNumber;
}

module.exports = DocumentLinesBinAllocation;