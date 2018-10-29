import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { EMIModel } from '../../model/EMIModel';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Utility} from '../../util/Utility';

@Component({
  selector: 'page-paymentSummary',
  templateUrl: 'paymentSummary.html'
})
export class PaymentSummaryPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  emiModel: EMIModel;
  loanEMI: number;
  loanPrincipal: number;
  loanInterest: number;
  loanPayment: number;
  loanPrincipalPercent: number;
  loanInterestPercent: number;

  doughnutChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public alertCtrl: AlertController) {
    this.emiModel = navParams.get('emiModel');
    if (this.emiModel.loanAmount == undefined ||
      this.emiModel.loanInterest == undefined ||
      this.emiModel.loanTenure == undefined ||
      this.emiModel.startDate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      this.initialize();
    }


    events.subscribe('change-tab', (tab, emiModel) => {
      this.emiModel = emiModel;
      if (this.emiModel.loanAmount == undefined ||
      this.emiModel.loanInterest == undefined ||
      this.emiModel.loanTenure == undefined ||
      this.emiModel.startDate == undefined) {
      Utility.presentAlert(this.alertCtrl);
    }
    else {
      this.initialize();
    }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSummaryPage');
  }

  initialize() {
    this.loanEMI = Math.round(this.emiModel.emiValue);
    this.loanPrincipal = this.emiModel.loanAmount;
    this.loanPayment = Math.round(this.emiModel.loanTenure * this.emiModel.emiValue);
    this.emiModel.totalPayment = this.loanPayment;
    this.loanInterest = Math.round(this.emiModel.totalPayment - this.emiModel.loanAmount);
    this.emiModel.totalInterest = this.loanInterest;
    this.loanPrincipalPercent = Number(((this.emiModel.loanAmount * 100) / this.emiModel.totalPayment).toFixed(1));
    this.loanInterestPercent = Number(((this.emiModel.totalInterest * 100) / this.emiModel.totalPayment).toFixed(1));
    setTimeout(() => {
      this.createDoughnutChart();
    }, 1000)
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Principal", "Interest"],
        datasets: [{
          data: [this.loanPrincipalPercent, this.loanInterestPercent],
          backgroundColor: [
            "#FFB74D",
            "#BA68C8"
          ],
          hoverBackgroundColor: [
            "#FF9800",
            "#9C27B0"
          ]
        }]
      }
    });
  }




}
