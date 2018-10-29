import { Component } from '@angular/core';

import { PaymentSchedulePage } from '../paymentSchedule/paymentSchedule';
import { PaymentSummaryPage } from '../paymentSummary/paymentSummary';
import { LoanDetailsPage } from '../loanDetails/loanDetails';
import { PaymentChartPage } from '../payment-chart/payment-chart';
import { ViewChild } from '@angular/core';
import { Tabs, Events } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = LoanDetailsPage;
  tab2Root = PaymentSummaryPage;
  tab3Root = PaymentSchedulePage;
  tab4Root = PaymentChartPage;

  LoanParams = { emiModel: 1, yearlyBreakup: 2 };
  mySelectedIndex: number;

  constructor(events: Events) {
    events.subscribe('change-tab', (tab, emiModel) => {
      this.LoanParams.emiModel=emiModel;
      try {
        this.tabs.select(tab);
      }
      catch (ex) {
        $(".ion-ios-document-outline").click();
      }
      this.mySelectedIndex = tab;
    });

    events.subscribe('send-breakUpData', (yearlyBreakup) => {
      this.LoanParams.yearlyBreakup = yearlyBreakup;
    });
  }
}
