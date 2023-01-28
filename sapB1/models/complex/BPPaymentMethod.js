

class BPPaymentMethod {
    constructor() {
        this.PaymentMethodCode = new String();
        this.RowNumber = new Number();
        this.BPCode = new String();
    }
    PaymentMethodCode;
    RowNumber;
    BPCode;
}

module.exports = BPPaymentMethod;