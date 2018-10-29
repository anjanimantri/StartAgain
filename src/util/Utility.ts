import { AlertController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';

export class Utility {
  public static presentAlert(alertCtrl: AlertController) {
    let alert = alertCtrl.create({
      subTitle: 'To proceed Calculation, Please fill in all the details!',
      buttons: ['Ok']
    });
    alert.present();
  }


  public static getFormatDigit(amount: number, decimalPipe: DecimalPipe) {
    return decimalPipe.transform(amount, '1.2-2');
  }
}