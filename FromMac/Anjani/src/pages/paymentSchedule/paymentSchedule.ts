import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavController, NavParams, Events } from 'ionic-angular';
import { EMIModel } from '../../model/EMIModel';
import { BreakUpEMIModel } from '../../model/BreakUpEMIModel';
import * as moment from 'moment';

@Component({
  selector: 'page-paymentSchedule',
  templateUrl: 'paymentSchedule.html'
})

export class PaymentSchedulePage {

  emiModel: EMIModel;
  breakUpModel: BreakUpEMIModel[] = [];
  breakUpYear: BreakUpEMIModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, public modalCtrl: ModalController) {

    this.emiModel = navParams.get('emiModel');
    this.initializeBreakUpEMI();

    events.subscribe('change-tab', (tab, emiModel) => {
      this.emiModel = emiModel;
      this.initializeBreakUpEMI();
    });

  }

  openModal(year) {
    let breakUpCurrent: BreakUpEMIModel[] = [];
    console.log(year + 'year');
    for (var i = 0; i < this.breakUpModel.length; i++) {
      if (this.breakUpModel[i].year == year) {
        breakUpCurrent.push(this.breakUpModel[i]);
      }
    }
    let modal = this.modalCtrl.create(ModalContentPage, { breakUp: breakUpCurrent });
    modal.present();

  }

  initializeBreakUpEMI() {
    let openingBalance;
    let emi;
    let interest;
    let principal;
    let closingBalance;
    var currentDate;
    let mon;
    let year;

    let yearOpeningBalance = 0;
    let yearEmi = 0;
    let yearInterest = 0;
    let yearPrincipal = 0;
    let yearClosingBalance = 0;
    let currentYear = 0;
    let previousYear;

    for (var i = 0; i < this.emiModel.loanTenure; i++) {

      if (i == 0) {
        openingBalance = this.emiModel.loanAmount;
        currentDate = this.emiModel.startDate;
        previousYear = moment(currentDate).year();
        currentYear = previousYear;
      }
      else {
        openingBalance = closingBalance;
        currentDate = moment(currentDate, "YYYY MM").add(1, 'M');
      }
      switch (moment(currentDate).month()) {
        case 0: mon = 'Jan';
          break;
        case 1: mon = 'Feb';
          break;
        case 2: mon = 'March';
          break;
        case 3: mon = 'April';
          break;
        case 4: mon = 'May';
          break;
        case 5: mon = 'June';
          break;
        case 6: mon = 'July';
          break;
        case 7: mon = 'Aug';
          break;
        case 8: mon = 'Sep';
          break;
        case 9: mon = 'Oct';
          break;
        case 10: mon = 'Nov';
          break;
        case 11: mon = 'Dec';
          break;
      }

      year = moment(currentDate).year();
      emi = Math.round(this.emiModel.emiValue);
      interest = Math.round((openingBalance * this.emiModel.loanInterest) / 1200);
      principal = emi - interest;
      closingBalance = openingBalance - principal;

      this.breakUpModel.push(
        new BreakUpEMIModel(openingBalance, emi, interest, principal, closingBalance, currentDate, mon, year));

      currentYear = moment(currentDate).year();
      if (previousYear == currentYear) {
        yearEmi = yearEmi + emi;
        yearInterest = yearInterest + interest;
        yearPrincipal = yearPrincipal + principal;
      }
      else {
        yearClosingBalance = openingBalance;
        this.breakUpYear.push(
          new BreakUpEMIModel(yearOpeningBalance, yearEmi, yearInterest, yearPrincipal, yearClosingBalance, currentDate, ' ', previousYear));
        yearEmi = 0;
        yearInterest = 0;
        yearPrincipal = 0;
        yearClosingBalance = 0;
        previousYear = currentYear;
      }
      if (i == this.emiModel.loanTenure - 1) {
        yearClosingBalance = openingBalance;
        this.breakUpYear.push(
          new BreakUpEMIModel(yearOpeningBalance, yearEmi, yearInterest, yearPrincipal, yearClosingBalance, currentDate, ' ', previousYear));
        yearEmi = 0;
        yearInterest = 0;
        yearPrincipal = 0;
        yearClosingBalance = 0;
        previousYear = currentYear;
      }
    }
    this.events.publish('send-breakUpData', this.breakUpYear);
  }
}

@Component({
  template: `
<ion-header>
<ion-navbar>
    <ion-title>
      Yearly Break-up
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text style="color: white" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
    </ion-navbar>
</ion-header>

<ion-content>

 <ion-card style="margin-top:60px" *ngFor="let breakUpMod of breakUp"> 
      <ion-card-header style="color: white">
       {{breakUpMod.month}}, {{breakUpMod.year}}
      </ion-card-header>
    <ion-list>
        <ion-item>
          <ion-label>Opening Balance</ion-label>
          <ion-label class="alignme">₹{{breakUpMod.openingBalance | number:'1.2-2'}}</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>Interest</ion-label>
          <ion-label class="alignme">₹{{breakUpMod.interest | number:'1.2-2'}}</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>Principal</ion-label>
          <ion-label class="alignme">₹{{breakUpMod.principal | number:'1.2-2'}}</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>EMI</ion-label>
          <ion-label class="alignme">₹{{breakUpMod.emi | number:'1.2-2'}}</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>Closing Balance</ion-label>
          <ion-label class="alignme">₹{{breakUpMod.closingBalance | number:'1.2-2'}}</ion-label>
        </ion-item>
      </ion-list>
  </ion-card>
</ion-content>
`
})
export class ModalContentPage {
  breakUp: BreakUpEMIModel[];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.breakUp = this.params.get('breakUp');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
