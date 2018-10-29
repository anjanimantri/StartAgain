import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the SubsidyCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subsidy-calculator',
  templateUrl: 'subsidy-calculator.html',
})
export class SubsidyCalculatorPage {

  loanAmount: number;
  loanTenure: number;
  tenure: string;
  isCalculate: boolean = true;
  EMI: number;
  subsidy: number;
  loanTenureInMonths: number;

  interestAmount: number;
  principalAmount: number;
  closingBalance: number;

  limit: number;
  rateOfInterest: number;

  loanAmountFormatted: string;

  minSubsidy: number;
  minLoan: number;

  constructor(public decimalPipe: DecimalPipe, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.limit = navParams.get('limit');
    this.rateOfInterest = navParams.get('roi');
    this.minSubsidy = navParams.get('minSubsidy');
    this.minLoan = navParams.get('minLoan');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubsidyCalculatorPage');
  }

  onChangeLoan(evt) {
    this.loanAmount = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.loanAmountFormatted = Utility.getFormatDigit(this.loanAmount, this.decimalPipe);
  }

  calculateSubsidy() {
    if (this.loanAmount == undefined || this.loanTenure == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      this.subsidy = 0;
      if (this.tenure != 'months') {
        this.loanTenureInMonths = this.loanTenure * 12;
      }
      else
        this.loanTenureInMonths = this.loanTenure;

      if (this.loanAmount <= this.limit)
        this.closingBalance = this.loanAmount;
      else
        this.closingBalance = this.limit;

      this.EMI = (this.closingBalance * (this.rateOfInterest / 1200) *
        Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths)) /
        (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths) - 1);

      for (var i = 1; i <= this.loanTenureInMonths; i++) {
        this.interestAmount = (this.closingBalance * this.rateOfInterest) / 1200;
        this.principalAmount = this.EMI - this.interestAmount;

        this.subsidy = this.subsidy + (this.interestAmount / Math.pow(1 + (9 / 1200), i));
        this.closingBalance = this.closingBalance - this.principalAmount;
      }
      this.EMI = Math.round(this.EMI);
      this.subsidy = Math.round(this.subsidy);
      if (this.subsidy < 0)
        this.subsidy = 0
      this.isCalculate = false;
    }
  }
}