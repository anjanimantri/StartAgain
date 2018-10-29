import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Utility } from '../../util/Utility';
import { DecimalPipe } from '@angular/common'; 

/**
 * Generated class for the MaxHomeLoanCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-max-home-loan-calculator',
  templateUrl: 'max-home-loan-calculator.html',
})
export class MaxHomeLoanCalculatorPage {

  isCalculate: boolean = true;

  loanAmount: number;
  flatValue: number;
  flatValueFormatted: string;

  constructor(public decimalPipe: DecimalPipe,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxHomeLoanCalculatorPage');
  }

  onChangePrice(evt) {
        this.flatValue = evt.replace(/[^0-9.]/g, "");
        if(evt != "")
        this.flatValueFormatted =Utility.getFormatDigit(this.flatValue,this.decimalPipe); 
    }

  public calculateLoan() {
    if (this.flatValueFormatted == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      var bankPercent;
      if (this.flatValue <= 3000000)
        bankPercent = 90;
      else if (this.flatValue > 3000000 && this.flatValue < 7500000)
        bankPercent = 80;
      else if (this.flatValue > 7500000)
        bankPercent = 75;

      this.loanAmount = this.flatValue * bankPercent/100;
      if (this.loanAmount < 0)
        this.loanAmount = 0
      this.isCalculate = false;
    }
  }
}
