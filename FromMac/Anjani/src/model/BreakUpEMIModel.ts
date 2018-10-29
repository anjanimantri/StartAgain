export class BreakUpEMIModel {
    openingBalance: number;
    emi: number;
    interest: number;
    principal: number;
    closingBalance: number;
    date: any;
    month: string;
    year: number;

    constructor(openingBalance: number, emi: number, interest: number,
        principal: number, closingBalance: number, date: any, month:string, year: number) {
        this.openingBalance = openingBalance;
        this.emi = emi;
        this.interest = interest;
        this.principal = principal;
        this.closingBalance = closingBalance;
        this.date = date;
        this.month=month;
        this.year=year;
    }
}