

class BatchNumber {
    constructor() {
        this.BatchNumberProperty = new String();
        this.ManufacturerSerialNumber = new String();
        this.InternalSerialNumber = new String();
        this.ExpiryDate = new String();
        this.ManufacturingDate = new String();
        this.AddmisionDate = new String();
        this.Location = new String();
        this.Notes = new String();
        this.Quantity = new Number();
        this.BaseLineNumber = new Number();
        this.TrackingNote = new Number();
        this.TrackingNoteLine = new Number();
    }
    BatchNumberProperty;
    ManufacturerSerialNumber;
    InternalSerialNumber;
    ExpiryDate;
    ManufacturingDate;
    AddmisionDate;
    Location;
    Notes;
    Quantity;
    BaseLineNumber;
    TrackingNote;
    TrackingNoteLine;
}

module.exports = BatchNumber;