

class Document_ApprovalRequest {
    constructor() {
        this.ApprovalTemplatesID = new Number();
        this.Remarks = new String();
        this.ApprovalTemplatesName = new String();
        this.ActiveForUpdate = new String();
    }
    ApprovalTemplatesID;
    Remarks;
    ApprovalTemplatesName;
    ActiveForUpdate;
}

module.exports = Document_ApprovalRequest;