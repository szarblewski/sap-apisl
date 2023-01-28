const UoMPrice = require("./UoMPrice");


class ItemPrice {
    constructor() {
        this.PriceList = new Number();
        this.Price = new Number();
        this.Currency = new String();
        this.AdditionalPrice1 = new Number();
        this.AdditionalCurrency1 = new String();
        this.AdditionalPrice2 = new Number();
        this.AdditionalCurrency2 = new String();
        this.BasePriceList = new Number();
        this.Factor = new Number();
        this.UoMPrices = [UoMPrice];
    }
    PriceList;
    Price;
    Currency;
    AdditionalPrice1;
    AdditionalCurrency1;
    AdditionalPrice2;
    AdditionalCurrency2;
    BasePriceList;
    Factor;
    UoMPrices;
}

module.exports = ItemPrice;