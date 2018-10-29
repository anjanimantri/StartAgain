import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the AdvanceHomeCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-advance-home-calculator',
  templateUrl: 'advance-home-calculator.html',
})
export class AdvanceHomeCalculatorPage {

  flatValue: number;
  montlyIncome: number;
  rateOfInterest: number;
  loanTenure: number;
  tenure: string;
  monthlyEMI: number = 0;
  EMI: number;
  loanAmount: number;
  isCalculate: boolean = true;
  loanTenureInMonths: number;

  flatValueFormatted: string;
  montlyIncomeFormatted: string;
  monthlyEMIFormatted: string;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvanceHomeCalculatorPage');
  }

  onChangeIncome(evt) {
    this.montlyIncome = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.montlyIncomeFormatted = Utility.getFormatDigit(this.montlyIncome, this.decimalPipe);
  }

  onChangeEMI(evt) {
    this.monthlyEMI = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.monthlyEMIFormatted = Utility.getFormatDigit(this.monthlyEMI, this.decimalPipe);
  }

  onChangeFlat(evt) {
    this.flatValue = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.flatValueFormatted = Utility.getFormatDigit(this.flatValue, this.decimalPipe);
  }

  calculateLoan() {
    var loanOnIncomeLogic, loanOnBankLogic, bankPercent;

    if (this.flatValue == undefined || this.montlyIncome == undefined
      || this.rateOfInterest == undefined || this.loanTenure == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure != 'months') {
        this.loanTenureInMonths = this.loanTenure * 12;
      } else {
        this.loanTenureInMonths = this.loanTenure;
      }
      this.EMI = (this.montlyIncome * 0.5) - this.monthlyEMI;
      loanOnIncomeLogic = (this.EMI * (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths) - 1)) / ((this.rateOfInterest / 1200) * (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths)));

      if (this.flatValue <= 3000000)
        bankPercent = 90;
      else if (this.flatValue > 3000000 && this.flatValue < 7500000)
        bankPercent = 80;
      else if (this.flatValue > 7500000)
        bankPercent = 75;

      loanOnBankLogic = this.flatValue * bankPercent / 100;

      if (loanOnBankLogic < loanOnIncomeLogic)
        this.loanAmount = Math.round(loanOnBankLogic);
      else
        this.loanAmount = Math.round(loanOnIncomeLogic);

      this.EMI = (this.loanAmount * (this.rateOfInterest / 1200) *
        Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths)) /
        (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths) - 1);

      this.EMI = Math.round(this.EMI);
      if (this.EMI < 0)
        this.EMI = 0
      if (this.loanAmount < 0)
        this.loanAmount = 0
      this.isCalculate = false;
    }
  }
}
