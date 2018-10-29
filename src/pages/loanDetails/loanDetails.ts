import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EMIModel } from '../../model/EMIModel';
import { Events } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'page-loanDetails',
  templateUrl: 'loanDetails.html'
})
export class LoanDetailsPage {

  typeLoan: string;
  emiModel: EMIModel;

  homeLoanAmount: number;
  homeLoanAmountFormatted: string;

  homeLoanInterest: number;
  homeLoanTenure: number;
  homeTenure: string;
  homeStartDate: Date;

  personalLoanAmount: number;
  personalLoanAmountFormatted: string;

  personalLoanInterest: number;
  personalLoanTenure: number;
  personalTenure: string;
  personalStartDate: Date;

  carLoanAmount: number;
  carLoanAmountFormatted: string;

  carLoanInterest: number;
  carLoanTenure: number;
  carTenure: string;
  carStartDate: Date;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, private events: Events, public alertCtrl: AlertController) {
    this.typeLoan = "homeLoan";
    this.emiModel = new EMIModel();
  }

  onChangeHome(evt) {
    this.homeLoanAmount = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.homeLoanAmountFormatted = Utility.getFormatDigit(this.homeLoanAmount, this.decimalPipe);
  }
  onChangePersonal(evt) {
    this.personalLoanAmount = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.personalLoanAmountFormatted = Utility.getFormatDigit(this.personalLoanAmount, this.decimalPipe);
  }
  onChangeCar(evt) {
    this.carLoanAmount = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.carLoanAmountFormatted = Utility.getFormatDigit(this.carLoanAmount, this.decimalPipe);
  }

  calculateEmi() {
    // let emiValue: number;
    // let loanAmount: number;
    // let loanInterest: number;
    // let loanTenure: number;
    // let tenure: string;

    if (this.typeLoan == 'homeLoan') {
      this.emiModel.loanAmount = this.homeLoanAmount;
      this.emiModel.loanInterest = this.homeLoanInterest;
      this.emiModel.loanTenure = this.homeLoanTenure;
      this.emiModel.tenure = this.homeTenure;
      this.emiModel.startDate = this.homeStartDate;

    } else if (this.typeLoan == 'personalLoan') {
      this.emiModel.loanAmount = this.personalLoanAmount;
      this.emiModel.loanInterest = this.personalLoanInterest;
      this.emiModel.loanTenure = this.personalLoanTenure;
      this.emiModel.tenure = this.personalTenure;
      this.emiModel.startDate = this.personalStartDate;
    } else if (this.typeLoan == 'carLoan') {
      this.emiModel.loanAmount = this.carLoanAmount;
      this.emiModel.loanInterest = this.carLoanInterest;
      this.emiModel.loanTenure = this.carLoanTenure;
      this.emiModel.tenure = this.carTenure;
      this.emiModel.startDate = this.carStartDate;
    }

    if (this.emiModel.tenure != 'months') {
      this.emiModel.loanTenure = this.emiModel.loanTenure * 12;
    }
    this.emiModel.emiValue = (this.emiModel.loanAmount * (this.emiModel.loanInterest / 1200) *
      Math.pow((1 + this.emiModel.loanInterest / 1200), this.emiModel.loanTenure)) /
      (Math.pow((1 + this.emiModel.loanInterest / 1200), this.emiModel.loanTenure) - 1);

    // this.emiModel.emiValue = Math.round(this.emiModel.emiValue);
    this.emiModel.emiValue = Number((this.emiModel.emiValue).toFixed(2));
    // this.navCtrl.parent.select(1);
    if (this.emiModel.loanAmount == undefined ||
      this.emiModel.loanInterest == undefined ||
      this.emiModel.loanTenure == undefined ||
      this.emiModel.startDate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      this.events.publish('change-tab', 1, this.emiModel);
    }

  }

}
