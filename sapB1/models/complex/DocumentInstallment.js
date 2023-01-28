

class DocumentInstallment {
    constructor() {
        this.DueDate = new String();
        this.Percentage = new Number();
        this.Total = new Number();
        this.LastDunningDate = new String();
        this.DunningLevel = new Number();
        this.TotalFC = new Number();
        this.InstallmentId = new Number();
        this.PaymentOrdered = new String();
    }
    DueDate;
    Percentage;
    Total;
    LastDunningDate;
    DunningLevel;
    TotalFC;
    InstallmentId;
    PaymentOrdered;
}

module.exports = DocumentInstallment;