import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the EmiComparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-emi-compare',
  templateUrl: 'emi-compare.html',
})
export class EmiComparePage {

  loanAmount1: number;
  loanAmount1Formatted: string;

  loanAmount2: number;
  loanAmount2Formatted: string;

  loanInterest1: number;
  loanInterest2: number;

  loanTenure1: number;
  loanTenure2: number;

  loanTenure1InMonths: number;
  loanTenure2InMonths: number;

  tenure1: string;
  tenure2: string;

  emiValue1: number;
  emiValue2: number;
  isCalculate: boolean = true;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiComparePage');
  }

  onChangeLoan1(evt) {
    this.loanAmount1 = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.loanAmount1Formatted = Utility.getFormatDigit(this.loanAmount1, this.decimalPipe);
  }

  onChangeLoan2(evt) {
    this.loanAmount2 = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.loanAmount2Formatted = Utility.getFormatDigit(this.loanAmount2, this.decimalPipe);
  }

  compareEmi() {

    if (this.loanAmount1 == undefined ||
      this.loanInterest1 == undefined ||
      this.loanTenure1 == undefined ||
      this.loanAmount2 == undefined ||
      this.loanInterest2 == undefined ||
      this.loanTenure2 == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure1 != 'months') {
        this.loanTenure1InMonths = this.loanTenure1 * 12;
      } else {
        this.loanTenure1InMonths = this.loanTenure1
      }
      if (this.tenure2 != 'months') {
        this.loanTenure2InMonths = this.loanTenure2 * 12;
      } else {
        this.loanTenure2InMonths = this.loanTenure2
      }

      this.emiValue1 = (this.loanAmount1 * (this.loanInterest1 / 1200) *
        Math.pow((1 + this.loanInterest1 / 1200), this.loanTenure1InMonths)) /
        (Math.pow((1 + this.loanInterest1 / 1200), this.loanTenure1InMonths) - 1);


      this.emiValue1 = Number((this.emiValue1).toFixed(2));

      this.emiValue2 = (this.loanAmount2 * (this.loanInterest2 / 1200) *
        Math.pow((1 + this.loanInterest2 / 1200), this.loanTenure2InMonths)) /
        (Math.pow((1 + this.loanInterest2 / 1200), this.loanTenure2InMonths) - 1);


      this.emiValue2 = Number((this.emiValue2).toFixed(2));

      this.isCalculate = false;
    }

  }

}
