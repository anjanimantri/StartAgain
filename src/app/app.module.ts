import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DecimalPipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { PaymentSchedulePage } from '../pages/paymentSchedule/paymentSchedule';
import { PaymentSummaryPage } from '../pages/paymentSummary/paymentSummary';
import { LoanDetailsPage } from '../pages/loanDetails/loanDetails';
import { PaymentChartPage } from '../pages/payment-chart/payment-chart';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalContentPage } from '../pages/paymentSchedule/paymentSchedule'
import { HomePage } from '../pages/home/home';
import { PmayPage } from '../pages/pmay/pmay';
import { LoanCalculatorPage } from '../pages/loan-calculator/loan-calculator';
import { SubsidyCalculatorPage } from '../pages/subsidy-calculator/subsidy-calculator';
import { PmayWriteupPage } from '../pages/pmay-writeup/pmay-writeup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdvanceHomeCalculatorPage } from '../pages/advance-home-calculator/advance-home-calculator';
import { MaxHomeLoanCalculatorPage } from '../pages/max-home-loan-calculator/max-home-loan-calculator';
import { InterestCalculatorPage } from '../pages/interest-calculator/interest-calculator';
import { PrincipalCalculatorPage } from '../pages/principal-calculator/principal-calculator';
import { YearsCalculatorPage } from '../pages/years-calculator/years-calculator';
import { RateCalculatorPage } from '../pages/rate-calculator/rate-calculator';
import { FaqsHomeLoanPage } from '../pages/faqs-home-loan/faqs-home-loan';
import { ComponentsModule } from '../components/components.module';
import { ExpandableFaQsComponent } from '../components/expandable-fa-qs/expandable-fa-qs';
import { SubDocumentsHomeLoanPage } from '../pages/sub-documents-home-loan/sub-documents-home-loan';
import { CapitalGainSubPage } from '../pages/capital-gain-sub/capital-gain-sub';
import { AskQuestionPage } from '../pages/ask-question/ask-question';
import { EmiComparePage } from '../pages/emi-compare/emi-compare';
import { EligibilityCriteriaPage } from '../pages/eligibility-criteria/eligibility-criteria';
import { PopOverPage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    PaymentSchedulePage,
    PaymentSummaryPage,
    LoanDetailsPage,
    TabsPage,
    ModalContentPage,
    PaymentChartPage,
    HomePage,
    PmayPage,
    LoanCalculatorPage,
    SubsidyCalculatorPage,
    PmayWriteupPage,
    AdvanceHomeCalculatorPage,
    MaxHomeLoanCalculatorPage,
    InterestCalculatorPage,
    PrincipalCalculatorPage,
    YearsCalculatorPage,
    RateCalculatorPage,
    FaqsHomeLoanPage,
    SubDocumentsHomeLoanPage,
    CapitalGainSubPage,
    AskQuestionPage,
    EmiComparePage,
    EligibilityCriteriaPage,
    PopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: "bottom" }),
    ComponentsModule,
    HttpModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaymentSchedulePage,
    PaymentSummaryPage,
    LoanDetailsPage,
    TabsPage,
    ModalContentPage,
    PaymentChartPage,
    HomePage,
    PmayPage,
    LoanCalculatorPage,
    SubsidyCalculatorPage,
    PmayWriteupPage,
    AdvanceHomeCalculatorPage,
    MaxHomeLoanCalculatorPage,
    InterestCalculatorPage,
    PrincipalCalculatorPage,
    YearsCalculatorPage,
    RateCalculatorPage,
    FaqsHomeLoanPage,
    SubDocumentsHomeLoanPage,
    CapitalGainSubPage,
    AskQuestionPage,
    EmiComparePage,
    EligibilityCriteriaPage,
    PopOverPage
  ],

  providers: [
    StatusBar,
    DecimalPipe,
    SplashScreen,
    // SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network
  ]
})
export class AppModule { }
