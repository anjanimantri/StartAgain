import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController, PopoverController } from 'ionic-angular';
import { FaqsHomeLoanPage } from '../faqs-home-loan/faqs-home-loan';
import { PmayPage } from '../pmay/pmay';
import { AskQuestionPage } from '../ask-question/ask-question';
import { TabsPage } from '../tabs/tabs';
import { LoanCalculatorPage } from '../loan-calculator/loan-calculator';
import { AdvanceHomeCalculatorPage } from '../advance-home-calculator/advance-home-calculator';
import { MaxHomeLoanCalculatorPage } from '../max-home-loan-calculator/max-home-loan-calculator';
import { PmayWriteupPage } from '../pmay-writeup/pmay-writeup';

import { InterestCalculatorPage } from '../interest-calculator/interest-calculator';
import { PrincipalCalculatorPage } from '../principal-calculator/principal-calculator';
import { YearsCalculatorPage } from '../years-calculator/years-calculator';
import { RateCalculatorPage } from '../rate-calculator/rate-calculator';
import { SubDocumentsHomeLoanPage } from '../sub-documents-home-loan/sub-documents-home-loan';

import { CapitalGainSubPage } from '../capital-gain-sub/capital-gain-sub';
import { CapitalGainModel } from '../../model/CapitalGainModel';
import { EmiComparePage } from '../emi-compare/emi-compare';
import { EligibilityCriteriaPage } from '../eligibility-criteria/eligibility-criteria';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  itemTapped(event, item) {

    switch (item) {
      case 'EMI Calculator':
        this.navCtrl.push(TabsPage);
        break;
      case 'Loan Eligibility Calculator':
        this.navCtrl.push(LoanCalculatorPage);
        break;
      case 'Advance Loan Calculator':
        this.navCtrl.push(AdvanceHomeCalculatorPage);
        break;
      case 'Maximum Home Loan Calculator':
        this.navCtrl.push(MaxHomeLoanCalculatorPage);
        break;
      case 'EMI Comparison':
        this.navCtrl.push(EmiComparePage);
        break;
      case 'About PMAY':
        this.navCtrl.push(PmayWriteupPage);
        break;
      case 'Subsidy Calculator':
        this.navCtrl.push(PmayPage);
        break;
      case 'Simple Interest':
        this.navCtrl.push(InterestCalculatorPage, { type: 'Simple' });
        break;
      case 'Simple Principal':
        this.navCtrl.push(PrincipalCalculatorPage, { type: 'Simple' });
        break;
      case 'Simple Years':
        this.navCtrl.push(YearsCalculatorPage, { type: 'Simple' });
        break;
      case 'Simple Rate of Interest':
        this.navCtrl.push(RateCalculatorPage, { type: 'Simple' });
        break;
      case 'Compound Interest':
        this.navCtrl.push(InterestCalculatorPage, { type: 'Compound' });
        break;
      case 'Compound Principal':
        this.navCtrl.push(PrincipalCalculatorPage, { type: 'Compound' });
        break;
      case 'Compound Years':
        this.navCtrl.push(YearsCalculatorPage, { type: 'Compound' });
        break;
      case 'Compound Rate of Interest':
        this.navCtrl.push(RateCalculatorPage, { type: 'Compound' });
        break;
      case 'NRI':
        this.navCtrl.push(SubDocumentsHomeLoanPage, { category: item });
        break;
      case 'Sale of residential house':
        let model1 = new CapitalGainModel('54', 'Individual or HUF Only', 'Residential House (Long Term Capital Asset i.e 3 years or more period of holding)', 'New Residential House(Only 1 Residential House is allowed)', 'If Purchased One year before or 2 years After or If constructed within 3 years from the date of sale', 'Amount Invested or LONG TERM CAPITAL GAIN which ever is less', 'SHORT TERM CAPITAL GAIN on Sale of New Asset (While Calculating Cost, Capital Gain exempt earlier will be reduced from Cost of acquisition');
        this.navCtrl.push(CapitalGainSubPage, { category: item, model: model1 });
        break;
      case 'All assets except residential house':
        let model2 = new CapitalGainModel('54F', 'Individual or HUF Only', 'Any LONG TERM CAPITAL ASSET except Residential house', 'New Residential House(Only 1 Residential House is allowed)', 'If Purchased One year before or 2 years After or If constructed within 3 years from the date of sale', 'Capital Gains (X) Amt Invested/net Consideration received. Deduction cannot be more than amount of capital gains', 'SHORT TERM CAPITAL GAIN On  Sale of New Asset + LONG TERM CAPITAL GAIN which was exempt earlier also taxable');
        this.navCtrl.push(CapitalGainSubPage, { category: item, model: model2 });
        break;
      case 'Sale of agriculture land':
        let model3 = new CapitalGainModel('54B', 'Individual or HUF Only', 'Agricultural Land used for 2 years for agriculture by assessee/parent. In case of HUF, by member of HUF (Both Long Term and Short Term Covered)', 'Purchase of New agricultural Land (Urban or Rural)', 'Within 2 years', 'Amt Invested or LONG TERM CAPITAL GAIN which ever is less', 'For Rural Land, No SHORT TERM CAPITAL GAIN is applicable. For Urban Land,                                         SHORT TERM CAPITAL GAIN is applicable. On Sale of New Asset (While Calculating Cost, Capital Gain exempt earlier will be reduced from Cost of Acquisition)')
        this.navCtrl.push(CapitalGainSubPage, { category: item, model: model3 });
        break;
      case 'Sale of any kind of asset':
        let model4 = new CapitalGainModel('54EC', 'Any assessee', 'Any LTCA', 'Specified Bonds of NHAI or RECL(These bonds have maturity of 3 years or more)', 'Within 6 months', 'Lower of 1) Amt Invested 2) 50 lacs 3) Capital Gains', 'On sale of securities or loan taken on securities within 3 years, LTCA exempt earlier will be taxable.')
        this.navCtrl.push(CapitalGainSubPage, { category: item, model: model4 });
        break;
      case 'FAQs on Home Loan':
        this.navCtrl.push(FaqsHomeLoanPage, { type: 'Home Loan' });
        break;
      case 'FAQs on PMAY':
        this.navCtrl.push(FaqsHomeLoanPage, { type: 'PMAY' });
        break;
      case 'Ask a Question':
        this.navCtrl.push(AskQuestionPage, { type: 'Ask a Question' });
        break;
      case 'Enquire For Loan':
        this.navCtrl.push(AskQuestionPage, { type: 'Enquire For Loan' });
        break;
      case 'Eligibility Criteria':
        this.navCtrl.push(EligibilityCriteriaPage);
        break;
      case 'Salaried':
        let popover = this.popoverCtrl.create(PopOverPage, { type: 'Salaried' });
        popover.present({
          ev: event
        });
        break;
      case 'Self Employed':
        let popover1 = this.popoverCtrl.create(PopOverPage, { type: 'Self Employed' });
        popover1.present({
          ev: event
        });
        break;
    }
  }
}


@Component({
  template: `
  <ion-header>
    <ion-navbar> 
     <h6 style="color: white; margin-left: 10px;">{{type}}</h6>
    </ion-navbar>
  </ion-header>
    <ion-content>
        <ion-card>
            <ion-card-content>
                <ion-grid>
                    <ion-row>
                        <ion-col text-center (click)="itemTapped($event, 'Income Documents')">
                            <ion-img style="background-image: url(./assets/img/ic_salaried_documented.svg)"></ion-img>
                            <p class="labelCard">Income Documents</p>
                        </ion-col>
                        <ion-col text-center (click)="itemTapped($event, 'No Income Documents')">
                            <ion-img style="background-image: url(./assets/img/ic_salaried_non_documented.svg)"></ion-img>
                            <p class="labelCard">No Income Documents</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
    </ion-content>
`
})

export class PopOverPage {
  type: string;
  constructor(
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
    this.type = navParams.get('type')
  }

  itemTapped(event, item) {

    if (this.type == "Salaried") {
      switch (item) {
        case 'Income Documents':
          this.navCtrl.push(SubDocumentsHomeLoanPage, { category: 'Salaried - Income Documents' });
          break;
        case 'No Income Documents':
          this.navCtrl.push(SubDocumentsHomeLoanPage, { category: 'Salaried - No Income Documents' });
          break;
      }
    }

    if (this.type == "Self Employed") {
      switch (item) {
        case 'Income Documents':
          this.navCtrl.push(SubDocumentsHomeLoanPage, { category: 'Self Employed - Income Documents' });
          break;
        case 'No Income Documents':
          this.navCtrl.push(SubDocumentsHomeLoanPage, { category: 'Self Employed - No Income Documents' });
          break;
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
