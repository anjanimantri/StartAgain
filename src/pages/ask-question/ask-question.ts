import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { MailService } from '@sendgrid/mail';

/**
 * Generated class for the AskQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var navigator: any;
declare var Connection: any;
// declare var window: any;

@Component({
  selector: 'page-ask-question',
  templateUrl: 'ask-question.html',
})

export class AskQuestionPage {

  name: string;
  city: string;
  mobile: string = "";
  email: string = "";
  question: string = "";
  isEmailValid: Boolean = true;
  isMobileValid: Boolean = true;
  isQuestionValid: Boolean = true;
  isOffline: Boolean = true;
  isOnline: Boolean = true;
  type: string;
  isQuestion: Boolean = false;
  senGridApiKey = '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';
  tag = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.type = navParams.get('type')
    if (this.type == 'Enquire For Loan') {
      this.isQuestion = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskQuestionPage');
  }

  ionViewWillLeave() {
    // disconnectSubscription.unsubscribe();
    // connectSubscription.unsubscribe();
  }

  sendEmail() {
    let vEmail = this.validateEmail()
    let vMobile = this.validateMobile()
    let body: string
    if (!this.isQuestion) {
      let vQuestion = this.validateQuestion()
      body = "Name: " + this.name + "\n" +
        "City: " + this.city + "\n" +
        "Mobile: " + this.mobile + "\n" +
        "Email Id: " + this.email + "\n" +
        "Question: " + this.question + "\n"
      if (vEmail && vMobile) {
        this.checkConnection(body, 'question')
      }
    } else {
      body = "Name: " + this.name + "\n" +
        "City: " + this.city + "\n" +
        "Mobile: " + this.mobile + "\n" +
        "Email Id: " + this.email + "\n"
      if (vEmail && vMobile) {
        this.checkConnection(body, 'enquiry')
      }
    }

  }

  checkConnection(body: string, message: string) {

    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN] = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI] = 'WiFi connection';
      states[Connection.CELL_2G] = 'Cell 2G connection';
      states[Connection.CELL_3G] = 'Cell 3G connection';
      states[Connection.CELL_4G] = 'Cell 4G connection';
      states[Connection.CELL] = 'Cell generic connection';
      states[Connection.NONE] = 'No network connection';

      if (networkState == Connection.NONE) {
        console.log('You are offline!');
        this.isOffline = false;
      } else {
        console.log('You are online!');
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(this.senGridApiKey);
        const msg = {
          to: 'venkatesh.zanwar@gmail.com',
          from: 'anjanimantri@gmail.com',
          subject: this.type,
          html: body,
        };
        sgMail.send(msg);
        this.tag = message;
        this.isOnline = false;
        // this.navCtrl.pop();
      }
    });

  }

  validateEmail(): Boolean {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(this.email)) {
      this.isEmailValid = true
      return true;
    }
    this.isEmailValid = false
    return false;
  }

  validateMobile(): Boolean {
    if (this.mobile.length == 10) {
      this.isMobileValid = true;
      return true;
    }
    this.isMobileValid = false;
    return false;
  }

  validateQuestion(): Boolean {
    if (this.question.length > 0) {
      this.isQuestionValid = true;
      return true;
    }
    this.isQuestionValid = false;
    return false;
  }
}
