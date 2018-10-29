import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common'; 

/**
 * Generated class for the YearsCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-years-calculator',
  templateUrl: 'years-calculator.html',
})
export class YearsCalculatorPage {

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

  constructor(public decimalPipe: DecimalPipe,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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


  calculateYears() {
    if (this.interest == undefined || this.principal == undefined || this.rate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      if (this.tenure == 'months') {
        this.years = this.years / 12;
      }
      if (this.type == 'Simple') {
        this.years = (this.interest * 100) / (this.rate * this.principal);
        this.isCalculate = false;
      } else if (this.type == 'Compound') {
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
        let cal2 = (1 * 1) + (this.rate / (100 * n));
        let cal3 = Math.log(cal1) / Math.log(cal2);
        this.years = Math.round(cal3 / n);
        this.isCalculate = false;
      }

    }
  }


}
