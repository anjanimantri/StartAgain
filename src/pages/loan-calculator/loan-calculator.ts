import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';


/**
 * Generated class for the LoanCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loan-calculator',
  templateUrl: 'loan-calculator.html',
})
export class LoanCalculatorPage {

  montlyIncome: number;
  montlyIncomeFormatted: string;

  rateOfInterest: number;
  loanTenure: number;
  tenure: string;

  monthlyEMI: number = 0;
  monthlyEMIFormatted: string;

  EMI: number;
  loanAmount: number;
  isCalculate: boolean = true;
  loanTenureInMonths: number;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanCalculatorPage');
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

  calculateLoan() {
    if (this.montlyIncome == undefined || this.rateOfInterest == undefined || this.loanTenure == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure != 'months') {
        this.loanTenureInMonths = this.loanTenure * 12;
      } else {
        this.loanTenureInMonths = this.loanTenure;
      }
      this.EMI = (this.montlyIncome * 0.5) - this.monthlyEMI;
      this.loanAmount = (this.EMI * (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths) - 1)) / ((this.rateOfInterest / 1200) * (Math.pow((1 + this.rateOfInterest / 1200), this.loanTenureInMonths)));
      this.EMI = Math.round(this.EMI);
      this.loanAmount = Math.round(this.loanAmount);
      if (this.EMI < 0)
        this.EMI = 0
      if (this.loanAmount < 0)
        this.loanAmount = 0
      this.isCalculate = false;
    }
  }
}
