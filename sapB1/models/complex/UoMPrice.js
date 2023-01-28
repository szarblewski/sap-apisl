

class UoMPrice {
    constructor() {
        this.PriceList = new Number();
        this.UoMEntry = new Number();
        this.ReduceBy = new Number();
        this.Price = new Number();
        this.Currency = new String();
        this.AdditionalReduceBy1 = new Number();
        this.AdditionalPrice1 = new Number();
        this.AdditionalCurrency1 = new String();
        this.AdditionalReduceBy2 = new Number();
        this.AdditionalPrice2 = new Number();
        this.AdditionalCurrency2 = new String();
        this.Auto = new String();
    }
    PriceList;
    UoMEntry;
    ReduceBy;
    Price;
    Currency;
    AdditionalReduceBy1;
    AdditionalPrice1;
    AdditionalCurrency1;
    AdditionalReduceBy2;
    AdditionalPrice2;
    AdditionalCurrency2;
    Auto;
}

module.exports = UoMPrice;