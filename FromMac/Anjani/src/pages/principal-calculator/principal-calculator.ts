import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the PrincipalCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-principal-calculator',
  templateUrl: 'principal-calculator.html',
})
export class PrincipalCalculatorPage {

  type: string;
  isCalculate: boolean = true;
  isCompound: boolean = true;
  principal: number;
  years: number;
  rate: number;
  interest: number;
  interestFormatted: string;
  total: number;
  tenure: string;
  frequency: string;

  constructor(public decimalPipe: DecimalPipe, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.type = navParams.get('type');
    if (this.type == 'Compound')
      this.isCompound = false;
    else
      this.isCompound = true;
  }

  onChangeInterest(evt) {
    this.interest = evt.replace(/[^0-9.]/g, "");
    if (evt != "")
      this.interestFormatted = Utility.getFormatDigit(this.interest, this.decimalPipe);
  }

  calculatePrincipal() {
    if (this.interest == undefined || this.years == undefined || this.rate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure == 'months') {
        this.years = this.years / 12;
      }
      if (this.type == 'Simple') {
        this.principal = Math.round((this.interest * 100) / (this.rate * this.years));
        this.total = (this.interest * 1) / 1 + this.principal;
        this.isCalculate = false;
      } else if (this.type == 'Compound') {
        if (this.frequency == 'yearly') {
          this.principal = Math.round(this.interest / Math.pow((1 + this.rate / 100), this.years));
        } else if (this.frequency == 'halfYearly') {
          this.principal = Math.round(this.interest / Math.pow((1 + this.rate / 200), (this.years * 2)));
        } else if (this.frequency == 'quaterly') {
          this.principal = Math.round(this.interest / Math.pow((1 + this.rate / 400), (this.years * 4)));
        } else {
          this.principal = Math.round(this.interest / Math.pow((1 + this.rate / 1200), (this.years * 12)));
        }
        this.total = (this.interest * 1) / 1 + this.principal;
        this.isCalculate = false;
      }

    }
  }

}
