import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqsHomeLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-faqs-home-loan',
  templateUrl: 'faqs-home-loan.html',
})

export class FaqsHomeLoanPage {
  items: any = [];
  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.type = navParams.get('type');

    if (this.type == 'Home Loan') {
      this.items = [
        {
          question: 'What is the minimum Age for availing home loan?',
          answer: ['21 Years of Age'],
          expanded: false
        },
        {
          question: 'How much bank fund for a home based on property Value?',
          answer: ['Bank Can fund Maximum :',
            'a. if property below 30 Lakhs then 90% of Propoerty Cost',
            'b. if property below 75 Lakhs then 80% of Propoerty Cost',
            'c. if property above 75 Lakhs then 75% of Propoerty Cost '],
          expanded: false
        },
        {
          question: 'How much bank can fund based on income?',
          answer: ['Bank Can fund 50-60 times of monthly income.'],
          expanded: false
        },
        {
          question: 'What is the Rate of interest Bank charge?',
          answer: ['Bank charge Rate of Interest in the range of 8.35% to 8.75% to customers who have all income documents and ROI in the range of 10% to 13% in case of sufficient income documents are not available'],
          expanded: false
        },
        {
          question: 'I have address proof where I don’t stay, still can I get loan?',
          answer: ['No, you cannot get home loan if you don’t stay at the address which is mentioned in your address proof.'],
          expanded: false
        },
        {
          question: 'I have defaulted on old loans which are outstanding as on date. Can I get loan?',
          answer: ['No you will not get loan if your previous loan is defaulted and outstanding as on date'],
          expanded: false
        },
        {
          question: 'I have defaulted on old loans which are NOT outstanding as on date. Can I get loan?',
          answer: ['Yes you can get loan. However you need to justify the banker with reasons as to why loan was defaulted. Also if current income position is better than earlier then that will also add on benefit in sanctioning loan'],
          expanded: false
        },
        {
          question: 'I stay on rent. I don’t have registered agreement.  I have executed agreement on stamp paper.Will the bank accept as address proof?',
          answer: ['If you have rent agreement on stamp paper and if you provide electricty bill of the said place in the name of lanlord then bank will accept such document as address proof. However if registered agreement is submitted then there is no requirement of electricity bill'],
          expanded: false
        },
        {
          question: 'If my loan is not sanctioned will the bank refund my processing fees paid?',
          answer: ['Processing fees is not refundable'],
          expanded: false
        },
        {
          question: 'I don’t have co applicant. Will the bank give me loan?',
          answer: ['There are few Banks/HFCs who lend loan on single applicant. However borrower has to take full insurance on the property'],
          expanded: false
        },
        {
          question: 'My age is 50. Can I get loan?',
          answer: ['Yes you will get loan. Bank can fund upto age of 60-65. In your case you can get loan for a maximum period of 15 in case banks age barrier is upto 65'],
          expanded: false
        },
        {
          question: 'When does the repayment of loan starts?',
          answer: ['Repayment of loan starts after the entire home loan is disbursed to the borrower. In case of under-construction properties banks allow payment of the partially disbursed amount. Towards this partially disbursed loan amount, customers are free to either repay the principal and interest amount both or just the interest amount or none at all.'],
          expanded: false
        },
        {
          question: 'Can repayment of loan be made ahead of schedule?',
          answer: ['Yes. All banks allow pre-payment of home loans. Some banks charge a pre-payment fee for that while others do not.'],
          expanded: false
        },
        {
          question: 'Do I get to avail tax benefits on home loan?',
          answer: ['Yes you can get Tax benefits as per below',
            'Sec 80 C of Income Tax Act :',
            '1. RS 150000 towards principal repayment of loan',
            '2. Deduction is allowed post possession of property',
            '3. Property should not be sold within 5 years from the date of possession else the earlier availed exemption will be taxed in the year of sale',
            '4. Stamp duty paid towards acquisition of property is also allowed as deduction subject to overall limit of Rs 150000',
            'Sec 24 of Income Tax Act :',
            '1. Interest paid on home loan can be availed as deduction of Rs 2 Lakhs (Capped) for a self occupied property.',
            '2. Interest paid on home loan can be availed as deduction of interest amount actually paid (No limit)if the property is rented out. However maximum amount of Rs 2 Lakhs can be availed as dedcution per year and balance amount can be carry forward for next 8 Assessement years'],
          expanded: false
        }

      ];
    } else if (this.type == 'PMAY') {
      this.items = [
        {
          question: 'What is the list of documents required to avail the subsidy?',
          answer: ['a.	Undertaking to be given by customer as per format provided by the banker',
            'b.	Aadhar card and PAN card',
            'Any other documents as required by the Bank/Financial Institution'],
          expanded: false
        },
        {
          question: 'I am Single, can I still benefit from PMAY?',
          answer: ['Yes, you may apply for the PMAY subsidy if you are single, however there are different criteria. Unmarried men can make use of the PMAY subsidy if their mother is the co-applicant. In case, there is no surviving adult woman in the family, they may still apply. Even un married woman is also eligible to apply if she is independent earning member of the family.'],
          expanded: false
        },
        {
          question: 'Can I still get PMAY if I am not applying for a LOAN?',
          answer: ['In order to get PMAY subsidy you must successfully qualify for a home loan with Bank/HFC.'],
          expanded: false
        },
        {
          question: 'Will I get the subsidy directly from the government?',
          answer: ['The entire subsidy will be given upfront to the housing finance company/Bank by the Government Agency. There after Bank/HFC will credit the same in borrowers account. This will result in a reduction in the housing loan amount and consequently the EMI will also reduce.'],
          expanded: false
        },
        {
          question: 'Am I eligible for PMAY if I have a house in my native place or village?',
          answer: ['If the roof of your village house is not made of concrete, it is not considered a ‘pucca’ house, thereby qualifying you for the housing subsidy.'],
          expanded: false
        },
        {
          question: 'How can I apply for PMAY?',
          answer: ['STEP 1: First you book a flat and apply for a housing loan',
            'STEP 2: Bank sanctions your loan',
            'STEP 3: Registration of the agreement',
            'STEP 4: Your housing finance company / bank submits the claim of the subsidy to National Housing Bank/HUDCO',
            'STEP 5: National Housing Bank transfers the amount to your bank',
            'STEP 6: Bank deposits the subsidy to your loan account',
            'STEP 7: Loan reduces to the extent of the subsidy received and the reduced EMI is set'],
          expanded: false
        },
        {
          question: 'How long does it take to received subsidy from government?',
          answer: ['Atleast 3 months is required to receive subsidy from the government.'],
          expanded: false
        },
        {
          question: 'Is PMAY applicable to widows or divorcees?',
          answer: ['Yes, both widows and divorcees can apply.'],
          expanded: false
        },
        {
          question: 'What is the age limit to avail PMAY?',
          answer: ['There is no age limit, as long as you are eligible for a Home Loan.'],
          expanded: false
        }
      ];
    }
  }

  expandItem(item) {
    this.items.map((listItem) => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
