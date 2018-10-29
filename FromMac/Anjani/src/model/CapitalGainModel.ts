export class CapitalGainModel {
    section: string;
    exemptionTo: string;
    saleOf: string;
    purchaseOf: string;
    timePeriodOfPurchase: string;
    quantumOfDeduction: string;
    consequences: string;

    constructor(section: string,
        exemptionTo: string,
        saleOf: string,
        purchaseOf: string,
        timePeriodOfPurchase: string,
        quantumOfDeduction: string,
        consequences: string) {
        this.section = section
        this.exemptionTo = exemptionTo
        this.saleOf = saleOf
        this.purchaseOf = purchaseOf
        this.timePeriodOfPurchase = timePeriodOfPurchase
        this.quantumOfDeduction = quantumOfDeduction
        this.consequences = consequences
    }
}