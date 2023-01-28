

class BPIntrastatExtension {
    constructor() {
        this.CardCode = new String();
        this.TransportMode = new Number();
        this.Incoterms = new Number();
        this.NatureOfTransactions = new Number();
        this.StatisticalProcedure = new Number();
        this.CustomsProcedure = new Number();
        this.PortOfEntryOrExit = new Number();
        this.DomesticOrForeignID = new String();
        this.IntrastatRelevant = new String();
    }
    CardCode;
    TransportMode;
    Incoterms;
    NatureOfTransactions;
    StatisticalProcedure;
    CustomsProcedure;
    PortOfEntryOrExit;
    DomesticOrForeignID;
    IntrastatRelevant;
}

module.exports = BPIntrastatExtension;