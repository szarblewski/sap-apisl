const RelatedDocument = require("./RelatedDocument");


class ElectronicProtocol {
    constructor() {
        this.ProtocolCode = new String();
        this.GenerationType = new String();
        this.MappingID = new Number();
        this.TestingMode = new String();
        this.Confirmation = new String();
        this.RelatedDocuments = [RelatedDocument];
    }
    ProtocolCode;
    GenerationType;
    MappingID;
    TestingMode;
    Confirmation;
    RelatedDocuments;
}

module.exports = ElectronicProtocol;