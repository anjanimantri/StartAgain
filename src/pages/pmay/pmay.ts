import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubsidyCalculatorPage } from '../subsidy-calculator/subsidy-calculator';

/**
 * Generated class for the PmayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pmay',
  templateUrl: 'pmay.html',
})
export class PmayPage {
  // options: DocumentViewerOptions = {
  //   title: 'PMAY'
  // }
  selectedItem: any;
  items: Array<{ title: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    this.items = [];

    this.items.push(
      {
        title: 'Income: upto 6 Lakhs'
      },
      {
        title: 'Income: 6 Lakhs - 12 Lakhs'
      },
      {
        title: 'Income: 12 Lakhs - 18 Lakhs'
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PmayPage');
  }

  itemTapped(event, item) {
    switch (item.title) {
      case 'Income: upto 6 Lakhs':
        this.navCtrl.push(SubsidyCalculatorPage, { limit: 600000, roi: 6.5, minSubsidy: 2.67, minLoan: 6 });
        break;
      case 'Income: 6 Lakhs - 12 Lakhs':
        this.navCtrl.push(SubsidyCalculatorPage, { limit: 900000, roi: 4, minSubsidy: 2.35, minLoan: 9 });
        break;
      case 'Income: 12 Lakhs - 18 Lakhs':
        this.navCtrl.push(SubsidyCalculatorPage, { limit: 1200000, roi: 3, minSubsidy: 2.30, minLoan: 12 });
        break;

    }
  }
}
