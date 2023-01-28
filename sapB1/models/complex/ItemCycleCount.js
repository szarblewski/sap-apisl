

class ItemCycleCount {
    constructor() {
        this.CycleCode = new Number();
        this.Alert = new String();
        this.NextCountingDate = new String();
        this.AlertTime = new String();
        this.DestinationUser = new Number();
        this.WarehouseCode = new String();
    }
    CycleCode;
    Alert;
    NextCountingDate;
    AlertTime;
    DestinationUser;
    WarehouseCode;
}

module.exports = ItemCycleCount;