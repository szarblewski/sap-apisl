

class SerialNumber {
    constructor() {
        this.ManufacturerSerialNumber = new String();
        this.InternalSerialNumber = new String();
        this.ExpiryDate = new String();
        this.ManufactureDate = new String();
        this.ReceptionDate = new String();
        this.WarrantyStart = new String();
        this.WarrantyEnd = new String();
        this.Location = new String();
        this.Notes = new String();
        this.BatchID = new String();
        this.SystemSerialNumber = new Number();
        this.BaseLineNumber = new Number();
        this.Quantity = new Number();
        this.TrackingNote = new Number();
        this.TrackingNoteLine = new Number();
    }
    ManufacturerSerialNumber;
    InternalSerialNumber;
    ExpiryDate;
    ManufactureDate;
    ReceptionDate;
    WarrantyStart;
    WarrantyEnd;
    Location;
    Notes;
    BatchID;
    SystemSerialNumber;
    BaseLineNumber;
    Quantity;
    TrackingNote;
    TrackingNoteLine;
}

module.exports = SerialNumber;