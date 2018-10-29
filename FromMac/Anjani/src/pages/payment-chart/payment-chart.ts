import { Component, ViewChild } from '@angular/core';
import { IonicPage, Events, NavController, NavParams } from 'ionic-angular';
import { BreakUpEMIModel } from '../../model/BreakUpEMIModel';
import { Chart } from 'chart.js';
/**
 * Generated class for the PaymentChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-chart',
  templateUrl: 'payment-chart.html',
})
export class PaymentChartPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  breakUpYear: BreakUpEMIModel[];
  labelChart: number[] = [];
  data1: number[] = [];
  data2: number[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.breakUpYear = navParams.get('yearlyBreakup');
    this.createData();
    setTimeout(() => {
      this.showBarChart();
    }, 1000)

    events.subscribe('send-breakUpData', (yearlyBreakup) => {
      this.breakUpYear = yearlyBreakup;
      this.createData();
      setTimeout(() => {
        this.showBarChart();
      }, 1000)

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentChartPage');
  }

  createData() {
    for (var i = 0; i < this.breakUpYear.length; i++) {
      this.labelChart[i] = this.breakUpYear[i].year;
      this.data1[i] = this.breakUpYear[i].principal;
      this.data2[i] = this.breakUpYear[i].interest;
    }
  }

  showBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: this.labelChart,
        datasets: [{
          label: 'Principal',
          data: this.data1,
          backgroundColor: "#FFB74D",
          borderWidth: 1
        }, {
          label: 'Interest',
          data: this.data2,
          backgroundColor: "#BA68C8",
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }

    });

  }
}
