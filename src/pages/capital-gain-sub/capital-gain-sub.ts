import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CapitalGainModel } from '../../model/CapitalGainModel';

/**
 * Generated class for the CapitalGainSubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-capital-gain-sub',
  templateUrl: 'capital-gain-sub.html',
})
export class CapitalGainSubPage {

  category: string
  model: CapitalGainModel

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');
    this.model = navParams.get('model');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitalGainSubPage');
  }

}
