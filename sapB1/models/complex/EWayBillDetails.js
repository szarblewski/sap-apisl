

class EWayBillDetails {
    constructor() {
        this.DocEntry = new Number();
        this.SupplyType = new String();
        this.SubType = new Number();
        this.DocumentType = new String();
        this.TransportationMode = new Number();
        this.Distance = new Number();
        this.TransporterDocNo = new String();
        this.TransporterDocDate = new String();
        this.VehicleType = new String();
        this.VehicleNo = new String();
        this.EWayBillNo = new String();
        this.EWayBillDate = new String();
        this.BillFromName = new String();
        this.BillFromGSTIN = new String();
        this.BillFromStateGSTCode = new String();
        this.DispatchFromAddress1 = new String();
        this.DispatchFromAddress2 = new String();
        this.DispatchFromZipCode = new String();
        this.DispatchFromStateGSTCode = new String();
        this.BillToName = new String();
        this.BillToGSTIN = new String();
        this.BillToStateGSTCode = new String();
        this.ShipToAddress1 = new String();
        this.ShipToAddress2 = new String();
        this.ShipToZipCode = new String();
        this.ShipToStateGSTCode = new String();
        this.MainHSNEntry = new Number();
        this.DispatchFromPlace = new String();
        this.ShipToPlace = new String();
        this.TransporterID = new String();
        this.TransporterName = new String();
        this.EWayBillExpirationDate = new String();
        this.TransporterEntry = new Number();
        this.TransporterLineNumber = new Number();
        this.TransactionType = new String();
    }
    DocEntry;
    SupplyType;
    SubType;
    DocumentType;
    TransportationMode;
    Distance;
    TransporterDocNo;
    TransporterDocDate;
    VehicleType;
    VehicleNo;
    EWayBillNo;
    EWayBillDate;
    BillFromName;
    BillFromGSTIN;
    BillFromStateGSTCode;
    DispatchFromAddress1;
    DispatchFromAddress2;
    DispatchFromZipCode;
    DispatchFromStateGSTCode;
    BillToName;
    BillToGSTIN;
    BillToStateGSTCode;
    ShipToAddress1;
    ShipToAddress2;
    ShipToZipCode;
    ShipToStateGSTCode;
    MainHSNEntry;
    DispatchFromPlace;
    ShipToPlace;
    TransporterID;
    TransporterName;
    EWayBillExpirationDate;
    TransporterEntry;
    TransporterLineNumber;
    TransactionType;
}

module.exports = EWayBillDetails;