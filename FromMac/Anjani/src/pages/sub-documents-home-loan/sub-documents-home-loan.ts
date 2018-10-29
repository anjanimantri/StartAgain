import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DocumentsModel } from '../../model/DocumentsModel';
/**
 * Generated class for the SubDocumentsHomeLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sub-documents-home-loan',
  templateUrl: 'sub-documents-home-loan.html',
})
export class SubDocumentsHomeLoanPage {

  category: string
  identityProof = new DocumentsModel('Identity Proof', 'Pan Card & Aadhar Card', 'Yes', 'Yes')
  addressProof = new DocumentsModel('Address Proof', 'Electricity Bill or Rent Agreement or Telephone Bill or Bank Statement or Passport or Aadhar Card (Aadhar mandatory for subsidy)', 'Yes', 'Yes, if income is to be clubbed')

  bankStatement = [new DocumentsModel('Bank Statement', 'Last 6 Months where salary is credited', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('Bank Statement', 'Last 12 Months bank statement  of business transactions and 6 months saving bank statement', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('Bank Statement', 'Last 6 Months where in bank transaction can seen', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Last 6 months NRO/NRE  bank statement is (Mandatory)', 'Yes', 'Yes, if income is to be clubbed')]

  existingLoanDetails = new DocumentsModel('Existing Loan Details', 'Sanction letter and Loan repayment  track ( if have any exiting loan )', 'Yes', 'Yes, if income is to be clubbed')

  incomeDocuments = [new DocumentsModel('Income Documents', 'Last 3 months Salary Slip', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Form 16 (last two Years)', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Joining Letter', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Experience Letter', 'If Demanded', 'If Demanded and if income is to be clubbed'),
  new DocumentsModel('Income Documents', 'ITR of last 2 years', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Sales Register/Receipt Book', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('Income Documents', 'Last 3 Months Salary Certificate from Employer', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('Income Documents', 'Evidence to substantiate he is into that business / Profession', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Overseas IT return (if applicable)', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Joining Letter/confirmation letter/experience letter/Contract copy', 'Yes', 'Yes, if income is to be clubbed'),
  new DocumentsModel('', 'Credit bureau report ( Applicable in UK/US/Canada/Australia ) ', 'Yes', 'Yes, if income is to be clubbed'),
  ]

  businessProof = new DocumentsModel('Business  Proof', 'Shop Act', 'Yes', 'Yes, if income is to be clubbed')

  localPoa = new DocumentsModel('LOCAL POA', '', '', '')

  powerOfAttorney = new DocumentsModel('Power of Attorney (POA Holder)', 'In Specific Bank Format only', 'Yes', 'Yes, if co-applicant spouse is to be clubbed ')

  documentsList: DocumentsModel[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');
    this.displayAccordingToCategory()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubDocumentsHomeLoanPage');
  }

  displayAccordingToCategory() {
    switch (this.category) {
      case 'Salaried - Documented':
        this.documentsList = [
        this.addressProof,
        this.bankStatement[0],
        this.incomeDocuments[0],
        this.incomeDocuments[1],
        this.incomeDocuments[2],
        this.incomeDocuments[3],
        this.existingLoanDetails]
        break;

      case 'Self Employed - Documented':
        this.documentsList = [
        this.addressProof,
        this.businessProof,
        this.bankStatement[1],
        this.incomeDocuments[4],
        this.incomeDocuments[5],
        this.existingLoanDetails]
        break
      case 'Salaried - No income Documents':
        this.documentsList = [
        this.addressProof,
        this.bankStatement[2],
        this.incomeDocuments[6],
        this.existingLoanDetails]
        break
      case 'Self Employed - No Income Documents':
        this.documentsList = [
        this.addressProof,
        this.bankStatement[2],
        this.incomeDocuments[7],
        this.incomeDocuments[5],
        this.existingLoanDetails]
        break
      case 'NRI':
        this.documentsList = [
        this.addressProof,
        this.bankStatement[0],
        this.bankStatement[3],
        this.incomeDocuments[0],
        this.incomeDocuments[0],
        this.incomeDocuments[8],
        this.incomeDocuments[9],
        this.incomeDocuments[10],
        this.existingLoanDetails,
        this.localPoa,
        this.identityProof,
        this.addressProof,
        this.powerOfAttorney
        ]
        break
    }
  }
}
