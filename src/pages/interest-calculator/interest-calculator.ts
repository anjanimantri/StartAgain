import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';
/**
 * Generated class for the InterestCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-interest-calculator',
  templateUrl: 'interest-calculator.html',
})
export class InterestCalculatorPage {

  type: string;
  isCalculate: boolean = true;
  isCompound: boolean = true;
  principal: number;
  years: number;
  rate: number;
  interest: number;
  total: number;
  tenure: string;
  frequency: string;

  principalFormatted: string;

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

  calculateInterest() {
    if (this.principal == undefined || this.years == undefined || this.rate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure == 'months') {
        this.years = this.years / 12;
      }
      if (this.type == 'Simple') {
        this.interest = Math.round(this.principal * this.rate * this.years / 100);
        this.total = (this.principal * 1) / 1 + this.interest;
        this.isCalculate = false;
      }
      else if (this.type == 'Compound') {
        if (this.frequency == 'yearly') {
          this.interest = Math.round(this.principal * Math.pow((1 + this.rate / 100), this.years)) - this.principal;
        } else if (this.frequency == 'halfYearly') {
          this.interest = Math.round(this.principal * Math.pow((1 + this.rate / 200), (this.years * 2))) - this.principal;
        } else if (this.frequency == 'quaterly') {
          this.interest = Math.round(this.principal * Math.pow((1 + this.rate / 400), (this.years * 4))) - this.principal;
        } else {
          this.interest = Math.round(this.principal * Math.pow((1 + this.rate / 1200), (this.years * 12))) - this.principal;
        }
        this.total = (this.principal * 1) / 1 + this.interest;
        this.isCalculate = false;
      }

    }
  }

}
