

class EnhancedFormColumn {
    constructor() {
        this.Code = new String();
        this.ColumnNumber = new Number();
        this.ChildNumber = new Number();
        this.ColumnAlias = new String();
        this.ColumnDescription = new String();
        this.ColumnIsUsed = new String();
        this.Editable = new String();
    }
    Code;
    ColumnNumber;
    ChildNumber;
    ColumnAlias;
    ColumnDescription;
    ColumnIsUsed;
    Editable;

}

module.exports = EnhancedFormColumn;