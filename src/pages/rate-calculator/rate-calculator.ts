import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the RateCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rate-calculator',
  templateUrl: 'rate-calculator.html',
})
export class RateCalculatorPage {

  type: string;
  isCalculate: boolean = true;
  principal: number;
  years: number;
  rate: number;
  interest: number;
  tenure: string;
  isCompound: boolean = true;
  frequency: string;

  principalFormatted: string;
  interestFormatted: string;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.type = navParams.get('type');
    if (this.type == 'Compound')
      this.isCompound = false;
    else
      this.isCompound = true;
  }

  onChangePrincipal(evt) {
    this.principal = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.principalFormatted = Utility.getFormatDigit(this.principal, this.decimalPipe);
  }

  onChangeInterest(evt) {
    this.interest = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.interestFormatted = Utility.getFormatDigit(this.interest, this.decimalPipe);
  }

  calculateRate() {
    if (this.interest == undefined || this.years == undefined || this.principal == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure == 'months') {
        this.years = this.years / 12;
      }
      if (this.type == 'Simple') {
        this.rate = Math.round((this.interest * 100) / (this.principal * this.years));
        this.isCalculate = false;
      }
      else if (this.type == 'Compound') {
        let n;
        if (this.frequency == 'yearly') {
          n = 1;
        } else if (this.frequency == 'halfYearly') {
          n = 2;
        } else if (this.frequency == 'quaterly') {
          n = 4;
        } else {
          n = 12;
        }
        let cal1 = this.interest / this.principal;
        let cal2 = Math.pow(cal1, 1 / (this.years * n)) - 1;
        this.rate = Math.round(cal2 * 100 * n);
        this.isCalculate = false;
      }
    }
  }
}
